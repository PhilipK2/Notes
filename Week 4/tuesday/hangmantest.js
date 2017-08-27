var words = ["#"];

var word = words[Math.floor(Math.random()* words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}
 
 var remainingLetters = word.length;

