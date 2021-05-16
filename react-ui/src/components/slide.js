var slideIndex = 0;
showSlides();
console.log("hello");
function showSlides() {
  var i;
  var slides = document.querySelectorAll(".App-logo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 8000); 
} 