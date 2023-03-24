// get slider item | Array.from[ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))
// get number of slides
var slidesCount = sliderImages.length
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

// Create The Main Ul Element
var paginationElement = document.createElement("ul")
//set ID Created Ul Element
paginationElement.setAttribute("id", "pagination-ul")

// Create List Items Based On Slide Count {اضافة الازرار}
for (var i = 1; i <= slidesCount; i++) {
	// Create The Li
	var paginationItem = document.createElement("li")
	//set Custom Attribute
	paginationItem.setAttribute("data-index", i)
	// Set item content
	paginationItem.appendChild(document.createTextNode(i))
	// Append item to the main ul list
	paginationElement.appendChild(paginationItem)
}

// Add the created ul element to the page
document.getElementById("indicators").appendChild(paginationElement)

// get the new created ul 
var paginationCreatedUl = document.getElementById("pagination-ul")

// trigger the Checker function
theChecker()

// Next Slide Function
function nextSlide(item) {
	console.log("next");
}

// previous Slide Function
function prevSlide() {
	console.log("previous");
}


// creaat the checker function {اضافة لون على الازرار}
function theChecker() {
	// set the slide number
	slideNumberElement.textContent = "slide #" + (currentSlide) + " of " + (slidesCount);

	// set active class on current slide
	sliderImages[currentSlide - 1].classList.add("active")

	// set active class on current Pagination item
	paginationCreatedUl.children[currentSlide - 1].classList.add("active")
}
