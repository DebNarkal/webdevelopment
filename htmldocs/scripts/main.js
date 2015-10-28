$(document).ready(function(){


var resultList = $("#inf");
resultList.text("This is from jQuery");

var toggleButton = $("#toggle");
toggleButton.on("click",function(){

	resultList.toggle(500);
});

});														//This is done to ensure that the whole html documents loaded before any type of
														//call from the javascript or jqery.
