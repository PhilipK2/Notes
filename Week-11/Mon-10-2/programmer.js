var request = require("inquirer");


function programmer (name, position, age, favorite){
    this.name = name;
    this.position = position;
    this.age = age;
    this.favorite = favorite;

this.printinfo = function (){
    console.log("\nname: " + this.name + "\nposition: " + this.position + "\nage: " + this.age + "\nfavorite language: " + this.favorite);
}
};

var count = 0;
var progArray = [];

askQuestions = function(){
inquirer.prompt ([
    {
        name: "name",
        message: "What is your name?"
    },
    {
        name: "position",
        message: "What do you do?"
    },
    {
        name: "age",
        message: "How old are you?"
    },
    {
        name: "favorite",
        message: "What is your favorite programmming language?"
    },
])
    .then(function(answers){

    var newGuy = new programmer(
        answers.name, 
        answers.position, 
        answers.age, 
        answers.favorite
    );

    newGuy.printinfo();
    count: ++;
    })
}else{
    console.log("nope");
}