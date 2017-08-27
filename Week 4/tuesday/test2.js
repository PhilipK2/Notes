        var words = [
["T", "R", "E", "E", "H", "O", "U", "S", "E"],
  ["J","A","V","A","S","C","R","I","P","T"],
  ["W","E","B","D","E","S","I","G","N"],
  ["E","D","U","C","A","T","I","O","N"],
  ["C","H","O","C","O","L","A","T","E"],
  ["G","E","R","M","A","N","Y"]
]
var random = Math.floor((Math.random()*(words.length-1))); 

var currentWord = words[random]; // the word to guess will be chosen from the array above
var guessedLetters = new Array(currentWord.length);
var lose = 0;

// every letter in the word is symbolized by an underscore in the guessfield
for (var i = 0; i < guessedLetters.length; i++){
	guessedLetters[i] = "_ ";
}

// prints the guessfield
function printguessedLetters(){
	for (var i = 0; i < guessedLetters.length; i++){
	var game = document.getElementById("game");
	var letter = document.createTextNode(guessedLetters[i]);
	game.appendChild(letter);
	}
}

//checks if the the letter provided by the user matches one or more of the letters in the word
var checkBalance = function(){
	var f = document.rateformular; 
	var b = f.elements["rateuserchoice"]; 
	var userchoice = b.value; // the letter provided by the user
	userchoice = userchoice.toUpperCase();
	for (var i = 0; i < currentWord.length; i++){
		if(currentWord[i] === userchoice){
			guessedLetters[i] = userchoice + " ";
			var userLetter = true;
		}
	b.value = "";
	}
	
	//deletes the guessfield and replaces it with the new one
	var game = document.getElementById("game");
	game.innerHTML=""; 
	printguessedLetters();
	
	// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
	if(!userLetter){
		var createLetter = document.getElementById("createLetter");
		var letter = document.createTextNode(" " + userchoice);
		createLetter.appendChild(letter); 
		lose++;
	}
	
	//checks if all letters have been found
	var confirm = true;
	for (var i = 0; i < guessedLetters.length; i++){
		if(guessedLetters[i] === "_ "){
			confirm = false;
		}
	}
	if(confirm){
		window.alert("You win!");
	}
	
	//once you got six wrong letters, you lose
	if(lose === 6){
		window.alert("Uh...I guess you're dead now.");
	}
}

function init(){
	printguessedLetters();
};

window.onload = init;