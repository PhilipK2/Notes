// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer.prompt([

    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "password",
        message: "Enter your password",
        name: "password"
    },
    {
        type: "list",
        message: "Which Pokemon do you choose?",
        choices: ["Bulbasaur", "Squirtle", "Charmander"],
        name: "Pokemon"
    },
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
    },
    {
        type: 'checkbox',
        message: 'Select proficency',
        name: 'skill',
        choices: [
        {
            name: 'Master'
        },
        {
            name: 'Advanced'
        },
        {
            name: 'Novice'
        }
        ],
    },   

]) 

.then(function(response){
        console.log(response.username);
        console.log(response.password);
        console.log(response.pokemon);
        console.log(response.skill);
    
});




































    //   ],
    //   validate: function (answer) {
    //     if (answer.length < 1) {
    //       return 'You must choose at least one topping.';
    //     }
    //     return true;
    //   }
    // }