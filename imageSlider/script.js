let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active"); // Remove active class from all slides
    if (i === index) {
      slide.classList.add("active"); // Add active class to the current slide
    }
  });
}

// Function to change the slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
