document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.addEventListener('click', function() {
      popup.style.display = 'none';
    });
    const clickableCaptions = document.querySelectorAll('.caption.clickable');
    clickableCaptions.forEach(caption => {
      caption.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
