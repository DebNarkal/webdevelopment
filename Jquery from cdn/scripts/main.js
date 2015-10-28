"use strict";
//$(function () {                          //same as $(document).ready(function(){ codes});
    var dynNode=$("#dynContent");
    var initialText = $("#dynContent").text();
    alert(initialText);
    function changeText() {
        $("#dynContent").text(function() {
            
            return "The microsoft CDN is http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min.js";
        });
    }

function returnText() {
    dynNode.text(function() {
        return initialText;
    });
}


//});