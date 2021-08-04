const inquirer = require('inquirer');
const fs = require('fs');




const generatecard = (answers) => {
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
}

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
        },
    ])


    .then((answers)) => {
        const HTMLContent = generatecard(answers);

        fs.writeFile
    }