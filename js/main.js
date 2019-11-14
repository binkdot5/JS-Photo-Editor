//self executing anonymous function
(function() {
	"use strict";
console.log("SEAF has fired");
    
    var imgFilter = document.querySelector ("#img-default");
    var button1 = document.querySelector ("#grayscale");
    var button2 = document.querySelector ("#brightness");
    var button3 = document.querySelector ("#sepia");
    var button4 = document.querySelector ("#saturate");
    var button5 = document.querySelector ("#blur");
    var button6 = document.querySelector ("#opacity");
    var button7 = document.querySelector ("#hue");
    var button8 = document.querySelector ("#invert");
    var button9 = document.querySelector ("#reset");
    
    function filterGrayscale () {
        imgFilter.style.WebkitFilter = "grayscale(50%)";
    }
    
    function filterBrightness () {
        imgFilter.style.WebkitFilter = "brightness(1.4)";
    }
    
    function filterSepia () {
        imgFilter.style.WebkitFilter = "sepia(60%)";
    }
    
    function filterSaturate () {
        imgFilter.style.WebkitFilter = "saturate(170%)";
    }
    
    function filterBlur () {
        imgFilter.style.WebkitFilter = "blur(5px)";
    }
    
    function filterOpacity () {
        imgFilter.style.WebkitFilter = "opacity(25%)";
    }
    
    function filterHue () {
        imgFilter.style.WebkitFilter = "hue-rotate(90deg)";
    }
    
    function filterInvert () {
        imgFilter.style.WebkitFilter = "invert(75%)";
    }
    
    function filterReset () {
        imgFilter.style.WebkitFilter = "none";
    }

    
    button1.addEventListener("click", filterGrayscale, false);
    button2.addEventListener("click", filterBrightness, false);
    button3.addEventListener("click", filterSepia, false);
    button4.addEventListener("click", filterSaturate, false);
    button5.addEventListener("click", filterBlur, false);
    button6.addEventListener("click", filterOpacity, false);
    button7.addEventListener("click", filterHue, false);
    button8.addEventListener("click", filterInvert, false);
    button9.addEventListener("click", filterReset, false);
    
    
    //The Efficient way

//    var buttons = document.querySelectorAll (".button");
//    console.log(buttons);

//    function filterType1 (buttons = 0) {
//        imgFilter.style.WebkitFilter = "grayscale(50%)";
//        imgFilter.style.WebkitFilter = "event.currentTarget.id";
//    }
//    
//    function filterType2 (buttons = 1) {
//        imgFilter.style.filter = "brightness(1.5)";
//        imgFilter.style.filter = "event.currentTarget.id";
//    }
    
//    function changeFilter (event){
////        console.log("event");
////        console.log("event.currentTarget.id");
//        event.preventDefault();
////        imgFilter.style.filter = "brightness(1.5)";
////        imgFilter.style.filter = "event.currentTarget.id";
//        filterType1();  
//        filterType2();
//    }
    
    
//    for (var i=0; i<buttons.length; i++) {
//        //console.log(i);
//        buttons [i].addEventListener("click", changeFilter, false);
//        
//    }
    

})();