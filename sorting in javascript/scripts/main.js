function stringSort() {
    var fruits = ["banana","apple","watermelon","mango","guava"];
    document.getElementById("stringSort").innerHTML=fruits.sort();
}

function numAsStringSort() {
    var nums=[4,5,9,1,40,3,44,67];
    document.getElementById("numAsStr").innerHTML=nums.sort();
}

function numSort() {
    var nums = [3,4,100,2,1,5,70,45];
    document.getElementById("numSort").innerHTML=nums.sort(function(a,b){return a-b;});
}

function initiateExample() {
    stringSort();
    numAsStringSort();
    numSort();
}