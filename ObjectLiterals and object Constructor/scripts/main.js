function Friend(fName, lName) {     //When Creating an object constructor always keep in mind that the constructor name shoudl start with caps
    "use strict";
    this.FirstName = fName;
    this.LastName = lName;
}
var paul = new Friend("Paul", "Allen");
window.alert(paul.FirstName + " " + paul.LastName);