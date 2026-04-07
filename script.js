const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const digital = document.getElementById("digital");

function updateClock() {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const hDeg = ((h % 12) + m / 60) * 30;
  const mDeg = (m + s / 60) * 6;
  const sDeg = s * 6;

  hour.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
  minute.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
  second.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;

  digital.textContent =
    String(h).padStart(2, "0") + ":" +
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0");
}

setInterval(updateClock, 1000);
updateClock();
