const inquirer = require('inquirer');
const fs = require('fs');

let teamArray = [];



const generateHTML = () => 

   ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <title>Team Roster</title>
    </head>
    <body>
    
        <nav class="navbar navbar-light bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand text-white " href="#">The Team</a>
            </div>
          </nav>
    
         ${teamArray.map(card => {
             return card;
         })}
         
    
    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
        <script src="./assets/js/script.js"></script>
    </body>
    </html>`;
 

function promptEmployeeType(){
inquirer
    .prompt([

        {
            type: "list",
            name: "position",
            message: "Please choose the position the member fills",
            choices: ["Manager", "Engineer", "Intern", "No more members"]

        },

        // {
        //     type: "input",
        //     name: "ID",
        //     message: "Please enter their employee ID?",
        //     validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}} 
        // },
        // {
        //     type: "input",
        //     name: "email",
        //     message: "Please enter their email",
        //     validate: (value) => {if(value){return true} else{return "please enter a value to continue."}}
        // },
        // {
        //     type: "input", 
        //     name: "git",
        //     message: "Please enter their github username",
        //     validate: (value) => {if(value){return true} else{return "please enter a value to continue."}}
        // },
    ])


    .then((answers) => {
        if(answers.position==="Manager") {
            addManager()
            
        }
        else if(answers.position==="Engineer"){
            addEngineer()
        }
        else if(answers.position==="Intern"){
            addIntern()
        }
        else {saveTeam()}
       
    });
}

    function saveTeam() {
        const HTMLContent = generateHTML();

        fs.writeFile("index.html" , HTMLContent, (err) => 
        err ? console.log(err) : console.log('congrats you have created a employee roster!!')
        );
    }

    function addManager(){
        inquirer.prompt([

            {
                type: "input",
                message: "what is their name",
                name:"name",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            },
            {
                type: "input",
                message: "Please enter the employee ID",
                name:"ID",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            },
            {
                type: "input",
                name: "email",
                message: "Please enter their email",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            },
            {
            type: "input",
            name: "office",
            message: "What is their office number",
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            }

        ])
        .then(answers => {
           // console.log(answers);
            let card = ` <div class="card" style="width: 18rem; padding: 10px; margin: 40px;">
            <div class="card-header bg-primary text-white">
            ${answers.name}\   
           
            Manager
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${answers.ID}</li>
              <li class="list-group-item">Email: ${answers.email}</li>
              <li class="list-group-item">Office number: ${answers.office}</li>
            </ul>
          </div>`
          teamArray.push(card)
            promptEmployeeType()
        })
    }
   function addEngineer(){
       inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "Please enter the name of the engineer",
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter employee ID",
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
        },
        {
            type: "input",
            name: "email",
            message: "Please enter email",
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
        },
        {
            type: "input",
            name: "git",
            message: "Please enter employees github username",
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
        }
    
       ])
       .then(answers => {
           let card = `<div class="card" style="width: 18rem; padding: 10px; margin: 40px;">
           <div class="card-header bg-primary text-white">
           ${answers.name}\   
          
           Engineer
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${answers.ID}</li>
             <li class="list-group-item">Email: ${answers.email}</li>
             <li class="list-group-item">https://github.com/${answers.git}</li>
           </ul>
         </div>`
         teamArray.push(card)
            promptEmployeeType()
       })

    }
    function addIntern(){
        inquirer.prompt([

            {
                type: "input",
                name: "name",
                message: "Please enter the name of the employee",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            },
            {
                type: "input",
                name: "ID",
                message: "Please enter employee ID",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the email",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            },
            {
                type: "input",
                name: "school",
                message: "please enter the school that the student is attending",
                validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}}
            }
        ])
        .then(answers => {
            let card = `<div class="card" style="width: 18rem; padding: 10px; margin: 40px;">
           <div class="card-header bg-primary text-white">
           ${answers.name}\   
          
           Intern
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">ID: ${answers.ID}</li>
             <li class="list-group-item">Email: ${answers.email}</li>
             <li class="list-group-item">School: ${answers.school}</li>
           </ul>
         </div>`
         teamArray.push(card)
            promptEmployeeType()
        })
    }

    promptEmployeeType()