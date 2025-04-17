const baseImage = document.getElementById("bedroom-image");

const beanbagImageSrc = "portfolio/assets/beanbag.jpeg";

const bedroomOverlay = document.getElementById("bedroom-overlay");
const beanbagOverlay = document.getElementById("beanbag-overlay");

document.getElementById("beanbag-link").addEventListener("click", function (e) {
  e.preventDefault();

  baseImage.src = beanbagImageSrc;
  baseImage.alt = "beanbag view";
  bedroomOverlay.classList.add("hidden");
  beanbagOverlay.classList.remove("hidden");
});