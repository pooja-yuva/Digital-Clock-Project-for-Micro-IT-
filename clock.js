function updateClock() {
  const now = new Date();
  let hrs = now.getHours();
  let mins = now.getMinutes();
  let secs = now.getSeconds();

  // Pad single digits
  hrs = hrs < 10 ? '0' + hrs : hrs;
  mins = mins < 10 ? '0' + mins : mins;
  secs = secs < 10 ? '0' + secs : secs;

  const currentTime = `${hrs}:${mins}:${secs}`;
  document.getElementById('time').textContent = currentTime;
}

// Call immediately and then every second
updateClock();
setInterval(updateClock, 1000);
