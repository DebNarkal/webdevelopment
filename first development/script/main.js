/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
alert('Hello World');
confirm('hello friends');
var answer = prompt("Do you wanna learn JavaScript?")
console.log("Hello friends");
console.warn("This is a warning")
/*
true
*/
console.error("This is an Error!!!!!");
console.log(answer);

var randomNumberDecimal=Math.random() * 10;
console.log(randomNumberDecimal);
var randomNumberWhole = Math.ceil(randomNumberDecimal);
console.log(randomNumberWhole);
if(answer === "yes" || answer === "YES" || answer === "Yes"){
  
  alert("Welcome to javascript course");
}
else if(answer === "no" || answer === "NO" || answer === "No"){
  alert("OK as you wish");
}
else{
  alert("Your "+answer+" is not correct.");
}
