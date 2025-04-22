const baseImage = document.getElementById("bedroom-image");
const beanbagImageSrc = "portfolio/assets/beanbag.jpeg";
const chairImageSrc = "portfolio/assets/chair.jpeg";
const bedImageSrc = "portfolio/assets/bed.jpeg";

const bedroomOverlay = document.getElementById("bedroom-overlay");
const beanbagOverlay = document.getElementById("beanbag-overlay");
const chairOverlay = document.getElementById("chair-overlay");
const bedOverlay = document.getElementById("bed-overlay");

function handleHashChange() {
  bedroomOverlay.classList.add("hidden");
  beanbagOverlay.classList.add("hidden");
  chairOverlay.classList.add("hidden");
  bedOverlay.classList.add("hidden");
  
  const hash = window.location.hash.substring(1);
  
  switch(hash) {
    case "beanbag":
      baseImage.src = beanbagImageSrc;
      baseImage.alt = "beanbag view";
      beanbagOverlay.classList.remove("hidden");
      break;
    case "chair":
      baseImage.src = chairImageSrc;
      baseImage.alt = "chair view";
      chairOverlay.classList.remove("hidden");
      break;
    case "bed":
      baseImage.src = bedImageSrc;
      baseImage.alt = "bed view";
      bedOverlay.classList.remove("hidden");
      break;
    default:
      baseImage.src = "portfolio/assets/portfolio-background.jpeg";
      baseImage.alt = "my bedroom in The Chestnut";
      bedroomOverlay.classList.remove("hidden");
  }
}

handleHashChange();
window.addEventListener("hashchange", handleHashChange);

document.getElementById("beanbag-link").addEventListener("click", function(e) {
  e.preventDefault();
  history.pushState(null, null, "#beanbag");
  handleHashChange();
});

document.getElementById("chair-link").addEventListener("click", function(e) {
  e.preventDefault();
  history.pushState(null, null, "#chair");
  handleHashChange();
});

document.getElementById("bed-link").addEventListener("click", function(e) {
  e.preventDefault();
  history.pushState(null, null, "#bed");
  handleHashChange();
});