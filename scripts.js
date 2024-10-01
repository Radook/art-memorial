document.addEventListener('DOMContentLoaded', () => {
    const pillars = document.querySelectorAll('.pillar');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const closeBtn = document.querySelector('.close');

    pillars.forEach((pillar) => {
        pillar.addEventListener('click', () => {
            popupTitle.textContent = pillar.getAttribute('data-title');
            popupDescription.textContent = pillar.getAttribute('data-description');
            popup.style.backgroundImage = `url(${pillar.getAttribute('data-image')})`; // Set popup background image
            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside of it
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
            document.body.style.overflow = 'auto'; // Re-enable body scroll
        }
    });
});


