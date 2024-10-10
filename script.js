const countdown = document.getElementById("countdown");
const message = document.getElementById("message");

const targetDate = new Date("2024-10-25T12:00:00").getTime(); // Set your target date here

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );

  if (distance < 0) {
    clearInterval(interval);
    countdown.style.display = "none";
    message.classList.remove("hidden");
  }
};

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);
