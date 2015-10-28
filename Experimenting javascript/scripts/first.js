function alertbox() {
    "use strict";
	window.alert("Hello Guys");
}

function innerText(ids) {
    "use strict";
	document.getElementById(ids).innerHtml = "This is the new text";
}

var changeText={
    chngtxt: function(ids,chngedTxt) {
        document.getElementById(ids).innerHTML=chngedTxt;
    }
};
