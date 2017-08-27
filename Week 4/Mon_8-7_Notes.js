z
//new div created after the first statement

targetDiv.appendChild(newDiv);

newDiv.setAttribute('class', 'fancy');
//applying CSS to new div
//changes the class or id to specific name <div class= 'fancy'></div>
//can also set styles in it if you wanted


//jQuery ==> smaller code than just js
//document.getelementbyID('drink-options') ==> $('#drink-options')


//************JQUERY!

//same thing as above
$('#empty-div').html('<h1>Hello Friends!</h1>');
$('#empty-div').append("A pleasure to meet you!");

var newDiv = $('<div></div>');
newDiv.html('A pleasure to meet you!');
$('empty-div').append(newDiv);

newDiv.attr('class', 'fancy');
(

var newDrinkDiv = $('<div>' + drinkList[i] + "</div>");
//different way to create new div




//in JS
document.getElementById('click-me').onclick = function (){
	alert('ive been clicked');
}

//in JQ

$("#click-me").on("click", function() {
	alert("ive been clicked jq");
});


find element - $("");
create element - $("<p></p>");
change html of element - el.html("");
change attribut of element - el.attr("");
append/prepend a child element - .append(chidel) .prepend(childEl)

event listener: el.on("name of event", function to run when the event happens);

el.on("click", function(){


});