
var words = ["javascript",
			"monkey",
			"amazing",
			"pancake"							
];

var randomWord = words[Math.floor(Math.random()* words.length)];

var currentWord = words[randomWord];
//var guessedLetters = new Array(currentWord.length);
var answerArray = [];

var remainingLetters = words.length;

var updateGuessedLetters = function (){
  document.getElementById("lettersGuessed").innerHTML = "Letters already guessed: " + guess;
};
var updateAnswerArray = function (){
  document.getElementById("currentWord").innerHTML = "Current word: " + answerArray;
};
  var game = document.getElementById("currentWord");
  game.innerHTML=""; 



for (var i = 0; i < randomWord.length; i++) {
	answerArray[i] = "_";
}
 console.log(answerArray)

  document.onkeyup = function(event) {
    //guessesLeft--;
    var guess = event.key;

    answerArray.push(guess);
    updateAnswerArray();
    updateGuessedLetters();
    console.log(randomWord)

    if(guess == randomWord){

    }

};















 // while (remainingLetters > 0) {

 // 	$("#currentWord").html(answerArray.join(""));
 // 	    newDiv = document.getElementById('div');
 //        newDiv.innerHTML = answerArray[i];

 // 	  document.onkeyup = function(event) {
 //      //guessesLeft--;
 //      var guess = event.key;

 //  }
 //        for (var j = 0; j < word.length; j++) {

 //          if (word[j] === guess) {

 //            answerArray[j] = guess;

 //            remainingLetters--;

 //          }

 //        }

 // }