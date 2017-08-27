var word;
var remainingGuess;
var correctGuesses;
var wrongGuesses;
var wins = 0;

var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');


function reset() {
  word = randomWord();
  remainingGuess = 10;
  wrongGuesses = [];
  correctGuesses = [];
  console.log(word)

  for (var i = 0; i < word.length; i++) {
    correctGuesses.push('_');
  }
  wordElement.innerHTML = correctGuesses.join(' ');
  letterCountElement.innerHTML = remainingGuess;
};

function randomWord (){
  var words = ["spidey",
        "peter",
        "amazing",
        "venom",
        "vulture"             
  ];  
  return words[Math.floor(Math.random()* words.length)];
}

function updateGuesses(letter) {
  letterCountElement.innerHTML = remainingGuess;

  if (word.indexOf(letter) === -1) { // letter is not inthe word
    remainingGuess--;
    wrongGuesses.push(letter); 
    lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
  } else { // letter IS in the word
    // replace underscore with the letter
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        correctGuesses[i] = letter;
      }
    }
    wordElement.innerHTML = correctGuesses.join(' ');
  }
};

//var randomWord = words[Math.floor(Math.random()* words.length)];

function check() {
  if (correctGuesses.indexOf('_') === -1) {
    alert('You Won!');
    wins++;
    document.getElementById('wins').innerHTML = wins;
    reset();    
  } else if (remainingGuess === 0) {
    alert('You Lost!');
    reset();
  }
}

document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  updateGuesses(letterGuessed);
  check();
};

// $(alert).on('click', function (){
// reset();
// });

reset();
















