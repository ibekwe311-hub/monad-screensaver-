const logo = document.getElementById("logo");
const countEl = document.getElementById("count");
const toast = document.getElementById("cornerToast");

let x = 100;
let y = 100;
let dx = 2;
let dy = 2;
const speed = 1.5;
let corners = 0;
let toastTimer = null;

function randomColor() {
  return Math.floor(Math.random() * 360);
}

function showToast() {
  clearTimeout(toastTimer);
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1200);
}

function animate() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const logoWidth = logo.clientWidth;
  const logoHeight = logo.clientHeight;

  x += dx * speed;
  y += dy * speed;

  let hitX = false;
  let hitY = false;

  if (x + logoWidth >= width) {
    x = width - logoWidth;
    dx = -Math.abs(dx);
    hitX = true;
  }
  if (x <= 0) {
    x = 0;
    dx = Math.abs(dx);
    hitX = true;
  }
  if (y + logoHeight >= height) {
    y = height - logoHeight;
    dy = -Math.abs(dy);
    hitY = true;
  }
  if (y <= 0) {
    y = 0;
    dy = Math.abs(dy);
    hitY = true;
  }

  if (hitX || hitY) {
    logo.style.filter = `hue-rotate(${randomColor()}deg)`;
    if (hitX && hitY) {
      corners++;
      countEl.textContent = corners;
      showToast();
    }
  }

  logo.style.left = x + "px";
  logo.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();
