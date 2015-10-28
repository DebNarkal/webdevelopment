
var dynNode = window.$("#dynContent");
var initialText = dynNode.text();
window.$(function () {                          //same as $(document).ready(function(){ codes});
    'use strict';
    window.alert(initialText);
    window.$("#dynContent").click(function () {
    
        window.$(this).css('color', 'red');
    });
});

function changeText() {
    'use strict';
     window.$("#dynContent").text(function () {
            
        return "The google CDN is https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
    });
}

function returnText() {
    'use strict';
    dynNode.text(function () {
        return initialText;
    });
    dynNode.css('color', 'violet');
    dynNode.css('backgroundColor', 'gray');
}