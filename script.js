const baseImage = document.getElementById("bedroom-image");

const beanbagImageSrc = "portfolio/assets/beanbag.jpeg";
const chairImageSrc = "portfolio/assets/chair.jpeg"
const bedImageSrc = "portfolio/assets/bed.jpeg"

const bedroomOverlay = document.getElementById("bedroom-overlay");
const beanbagOverlay = document.getElementById("beanbag-overlay");
const chairOverlay = document.getElementById("chair-overlay")
const bedOverlay = document.getElementById("bed-overlay")

document.getElementById("beanbag-link").addEventListener("click", function (e) {
  e.preventDefault();

  baseImage.src = beanbagImageSrc;
  baseImage.alt = "beanbag view";
  bedroomOverlay.classList.add("hidden");
  beanbagOverlay.classList.remove("hidden");
});

document.getElementById("chair-link").addEventListener("click", function (e) {
  e.preventDefault();

  baseImage.src = chairImageSrc;
  baseImage.alt = "chair view";
  bedroomOverlay.classList.add("hidden");
  chairOverlay.classList.remove("hidden");
});

document.getElementById("bed-link").addEventListener("click", function (e) {
  e.preventDefault();

  baseImage.src = bedImageSrc;
  baseImage.alt = "bed view";
  bedroomOverlay.classList.add("hidden");
  bedOverlay.classList.remove("hidden");
});