// get slider item | Array.from[ES6 Feature]


var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))
console.table(sliderImages)

// get number of slides
var slidesCount = sliderImages.length
console.log("slidesCount", slidesCount)

// set current slide
var currentSlide = 1;

// Slide Number String Element
var slideNumberElement = document.getElementById("slider-number")

// previous and Next Buttons
var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")

// Handle Click on previous and Next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Next Slide Function
function nextSlide() {
    console.log("next");
}

// previous Slide Function
function prevSlide() {
    console.log("previous");
}
