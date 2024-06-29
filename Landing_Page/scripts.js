document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    const detailsList = document.querySelectorAll('.details ul li');

    // Smooth scrolling for button click
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
    });

    // Adding hover animation to list items
    detailsList.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateX(10px)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateX(0)';
        });
    });
});
