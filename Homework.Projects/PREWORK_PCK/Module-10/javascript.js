
// When the Grow button is clicked... 
$("#boxGrow").on("click", function() {
	// Increase the size of the box.
	$("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
})

// When the blue button is pressed...
$("#button2").on("click", function() {
	// Change box to blue.
	$("#box").css("backgroundColor", "blue")
})

 document.getElementById("button3").addEventListener("click", function(){

  	document.getElementById("box").style.opacity = "0.05";

});


document.getElementById("button4").addEventListener("click", function(){

	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = 'orange';
	document.getElementById("box").style.opacity = '1';

});