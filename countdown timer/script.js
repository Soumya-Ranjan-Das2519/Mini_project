let timerInterval;
let timeRemaining;

const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const secondsInput = document.getElementById("secondsInput");
const timeDisplay = document.getElementById("timeDisplay");

// Helper to format time as MM:SS
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Start the countdown
function startCountdown() {
  const inputSeconds = parseInt(secondsInput.value);

  if (isNaN(inputSeconds) || inputSeconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  timeRemaining = inputSeconds;
  updateDisplay();
  startButton.disabled = true;
  resetButton.disabled = false;
  secondsInput.disabled = true;

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time’s up!");
      resetCountdown();
    }
  }, 1000);
}

// Update the display
function updateDisplay() {
  timeDisplay.textContent = formatTime(timeRemaining);
}

// Reset the countdown
function resetCountdown() {
  clearInterval(timerInterval);
  timeDisplay.textContent = "00:00";
  startButton.disabled = false;
  resetButton.disabled = true;
  secondsInput.disabled = false;
  secondsInput.value = "";
}

startButton.addEventListener("click", startCountdown);
resetButton.addEventListener("click", resetCountdown);
