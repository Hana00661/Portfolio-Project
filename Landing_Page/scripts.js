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
// Add any JavaScript functionality if needed
// For example, you could add smooth scrolling for the navigation links

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
