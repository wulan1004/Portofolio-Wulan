// scripts.js
// You can add interactivity such as smooth scroll, modals, or API requests here.

// Smooth scroll for nav links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});