function changeColor(elemId) {
	var doc= document.getElementById(elemId);
	doc.style.color = 'red';
	doc.style.background = 'beige';
	doc.style.border = 'solid 1px red';
	doc.style.borderRadius = '2px';
	doc.style.width = '700px'
	
	//document.getElementById("dynContent").style.color=red;
}

function returnColor(elemId) {
	document.getElementById(elemId).style.color = 'black';
	document.getElementById(elemId).style.background = 'transparent';
	document.getElementById(elemId).style.border = 'none';
}