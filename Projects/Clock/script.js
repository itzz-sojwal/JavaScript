const clock = document.getElementById("clock");

updateClock();

function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  clock.textContent = `${hours}:${min}:${sec}`
}

setInterval(updateClock, 1000)
