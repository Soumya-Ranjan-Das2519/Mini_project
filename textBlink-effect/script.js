// Select the text element
const blinkingText = document.getElementById("blinking-text");

// Variable to track visibility state
let isVisible = true;

// Toggle visibility every second using setInterval
setInterval(() => {
  isVisible = !isVisible;
  blinkingText.style.opacity = isVisible ? "1" : "0";
}, 1000);
