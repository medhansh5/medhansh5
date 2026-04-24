document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation with Stagger
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach((el, index) => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                // Add stagger effect for project cards
                if (el.classList.contains('project-card')) {
                    setTimeout(() => {
                        el.classList.add('active');
                    }, index * 150); // 150ms stagger delay
                } else {
                    el.classList.add('active');
                }
            }
        });
    };

    // Initial check
    revealOnScroll();

    // Listen for scroll
    window.addEventListener('scroll', revealOnScroll);

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced hover effect for the logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.color = '#ffffff';
        logo.style.textShadow = '0 0 20px rgba(0, 255, 204, 0.5)';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.color = 'var(--accent-color)';
        logo.style.textShadow = 'none';
    });

    // Add dynamic grain effect
    const body = document.body;
    let grainIntensity = 0;
    
    setInterval(() => {
        grainIntensity = Math.random() * 0.02;
        body.style.setProperty('--grain-intensity', grainIntensity);
    }, 100);
});
