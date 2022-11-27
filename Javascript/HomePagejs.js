// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function populateDots() {
	console.log("populating dots");
	const container = document.querySelector("#dots-holder");
	const slidesCount = getSlides().length;

	for (let i = 0; i < slidesCount; i++) {
		let span = document.createElement("span");
		span.classList.add("dot");
		span.setAttribute("onclick", `showSlides(${i})`);
		container.appendChild(span);
	}
}

function getSlides() {
	return document.getElementsByClassName("mySlides");
}

function showSlides(n) {
	console.log("Showing Slides", n);
	let slides = getSlides();
	let dots = document.getElementsByClassName("dot");
	// let captionText = document.getElementById("caption");

	if (n >= slides.length) {
		slideIndex = 0;
	} else if (n < 0) {
		slideIndex = slides.length - 1;
	} else {
		slideIndex = n;
	}
	
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove("active");
		// dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex].style.display = "block";
	dots[slideIndex].classList.add("active");
	// captionText.innerHTML = dots[slideIndex].alt;
}

let slideIndex = 0;
populateDots();
showSlides(slideIndex);