const inquirer = require('inquirer');
const fs = require('fs');




const generateHTML = (answers) => 

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
    
          <div class="card" style="width: 18rem; padding: 10px; margin: 120px;">
        <div class="card-header bg-primary text-white">
          ${answers.position}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${answers.ID}</li>
          <li class="list-group-item">${answers.email}</li>
          <li class="list-group-item">https://github.com/${answers.git}</li>
        </ul>
      </div>
         
    
    
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
        <script src="./assets/js/script.js"></script>
    </body>
    </html>`;
 


inquirer
    .prompt([

        {
            type: "list",
            name: "position",
            message: "Please choose the position the member fills",
            choices: ["Manager", "Engineer", "Intern", "No more members"]

        },

        {
            type: "input",
            name: "ID",
            message: "Please enter their employee ID?",
            validate: (value) =>{if(value){return true} else{return 'please enter a value to continue'}} 
        },
        {
            type: "input",
            name: "email",
            message: "Please enter their email",
            validate: (value) => {if(value){return true} else{return "please enter a value to continue."}}
        },
        {
            type: "input", 
            name: "git",
            message: "Please enter their github username",
            validate: (value) => {if(value){return true} else{return "please enter a value to continue."}}
        },
    ])


    .then((answers) => {
        const HTMLContent = generateHTML(answers);

        fs.writeFile("index.html" , HTMLContent, (err) => 
        err ? console.log(err) : console.log('congrats you have created a employee roster!!')
        );
    });