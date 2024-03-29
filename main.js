function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Adjust minutes to the nearest 5-minute interval
  minutes = Math.round(minutes / 5) * 5;

  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  const secondHand = document.getElementById("second-hand");

  const hourDeg = (hours % 12) * 30 + minutes * 0.5; // 360 degrees / 12 hours = 30 degrees per hour
  const minuteDeg = minutes * 6; // 360 degrees / 60 minutes = 6 degrees per minute
  const secondDeg = seconds * 6; // 360 degrees / 60 seconds = 6 degrees per second

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function toggleFormat() {
  const toggleBtn = document.getElementById("toggleFormat");
  const format = toggleBtn.dataset.format;

  if (format === "12") {
    toggleBtn.textContent = "Switch to 24-Hour Format";
    toggleBtn.dataset.format = "24";
  } else {
    toggleBtn.textContent = "Switch to 12-Hour Format";
    toggleBtn.dataset.format = "12";
  }

  updateClock();
}

setInterval(updateClock, 1000);
document.getElementById("toggleFormat").addEventListener("click", toggleFormat);
