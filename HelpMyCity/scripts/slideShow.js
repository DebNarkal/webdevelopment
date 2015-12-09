(function () {
    "use strict";
    var imageArray = new Array();
    imageArray[0] = new Image();
    imageArray[0].src = "../images/car1.jpg";
    imageArray[1] = new Image();
    imageArray[1].src = "../images/car2.jpg";
    imageArray[2] = new Image();
    imageArray[2].src = "../images/car3.jpg";
    imageArray[3] = new Image();
    imageArray[3].src = "../images/car4.jpg";
    
    
    var step = 0;
    
    function slideIt() {
        //if (!document.images) {
            //return;
        //}
        document.getElementById("slideImage").src = imageArray[step].src;
        if (step < 3) {
            step = step + 1;
            
        } else {
            step = 0;
        }
        setTimeout(slideIt, 2000);
    }
    slideIt();
}());