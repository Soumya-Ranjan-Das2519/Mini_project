const button = document.getElementById("showNotification");
const notification = document.getElementById("notification");

button.addEventListener("click", () => {
  // Show the notification
  notification.classList.remove("hidden");
  notification.classList.add("show");

  // Set timeout to hide the notification after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");

    // Delay hiding the element completely until the transition ends
    setTimeout(() => {
      notification.classList.add("hidden");
    }, 500); // Match the CSS transition time
  }, 5000);
});
