document.addEventListener('DOMContentLoaded', function() {
    const clickableCaptions = document.querySelectorAll('.caption.clickable');
    
    clickableCaptions.forEach(caption => {
        caption.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});