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
  const currentSrc = baseImage.src;
  let targetSrc = "";
  let targetAlt = "";
  let targetOverlay = null;
  
  switch(hash) {
    case "beanbag":
      targetSrc = beanbagImageSrc;
      targetAlt = "beanbag view";
      targetOverlay = beanbagOverlay;
      break;
    case "chair":
      targetSrc = chairImageSrc;
      targetAlt = "chair view";
      targetOverlay = chairOverlay;
      break;
    case "bed":
      targetSrc = bedImageSrc;
      targetAlt = "bed view";
      targetOverlay = bedOverlay;
      break;
    default:
      targetSrc = "portfolio/assets/portfolio-background.jpeg";
      targetAlt = "my bedroom in The Chestnut";
      targetOverlay = bedroomOverlay;
  }
  
  if (currentSrc.includes(targetSrc.split('/').pop())) {
    targetOverlay.classList.remove("hidden");
  } else {
    baseImage.onload = function() {
      targetOverlay.classList.remove("hidden");
      baseImage.onload = null;
    };
    baseImage.src = targetSrc;
    baseImage.alt = targetAlt;
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