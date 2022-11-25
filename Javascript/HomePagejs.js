let slidePosition= 0;
const slides= document.getElementbyClassName('slideshow-container');
const totalSlides= slides.length;

document.getElementById('buttonnext')
.addEventListener("click", function(){
 	moveToNextSlide();
});
document.getElementById('buttonprev')
.addEventListener("click", function(){
 	moveToPrevSlide();
});

function updateSlidePosition(){
	for (let slide of slides){
		slide.classList.remove('carousel_item--v
function moveToNextSlide(){
        function updateSlidePosition();
	if(slidePosition == totalSlides){
		slidePosition =0;
}
	else{
		slidePosition++;
}	
}
function moveToPrevSlide(){
        function updateSlidePosition();
	if(slidePosition == 0){
		slidePosition =0;
}
	else{
		slidePosition--;
}	
}
