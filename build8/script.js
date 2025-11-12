// Set target countdown date (Example: Dec 31, 2025, 23:59:59)
const countdownDate = new Date("December 31, 2025 23:59:59").getTime();

const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // When countdown finishes
  if (distance < 0) {
    clearInterval(countdown);
    timerElement.innerHTML = "🎉 Countdown Completed!";
  }
}, 1000);
