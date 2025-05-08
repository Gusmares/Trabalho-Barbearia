document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll (excluding no-scroll links)
    document.querySelectorAll('.menu a:not(.no-scroll)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.navbar .menu');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Scroll Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            } else {
                entry.target.classList.remove('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.secao-animada').forEach(section => {
        observer.observe(section);
    });

    // Typed.js for Subtitle
    new Typed('#typed-text', {
        strings: [
            'Seu estilo com um toque de tradição.',
            'Modernidade e cuidado em cada detalhe.',
            'Onde a barba encontra a perfeição.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Gallery Lightbox
    const galleryItems = document.querySelectorAll('.galeria-item img');
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = document.querySelector('#lightbox-img');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImg.src = item.src;
            lightbox.classList.add('active');
        });
    });

    document.querySelector('.close-lightbox').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
    }
});

// Dark/Light Mode Toggle
function toggleMode() {
    document.body.classList.toggle('dark');
}
