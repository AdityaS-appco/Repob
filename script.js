/**
 * Aditya Singh Portfolio - Interaction Logic
 * Features: Dual-element custom cursor, scroll progress, scroll reveal, smoothing.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Custom Cursor
    const cursorPoint = document.querySelector('.cursor-point');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Hide default cursor and show custom ones via JS
    document.body.style.cursor = 'none';

    let mouseX = 0, mouseY = 0; // Current mouse position
    let followerX = 0, followerY = 0; // Current follower position (smoothed)
    let isHovering = false;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Update direct point cursor immediately
        document.documentElement.style.setProperty('--cursor-x', `${mouseX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${mouseY}px`);
    });

    // Smoothing for the follower cursor
    const animateFollower = () => {
        const ease = 0.15;
        followerX += (mouseX - followerX) * ease;
        followerY += (mouseY - followerY) * ease;

        document.documentElement.style.setProperty('--f-x', `${followerX}px`);
        document.documentElement.style.setProperty('--f-y', `${followerY}px`);

        requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .exp-card, .project-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            isHovering = true;
            document.documentElement.style.setProperty('--f-s', '1.5');
            cursorFollower.style.opacity = '1';
            cursorFollower.style.borderColor = 'var(--accent-secondary)';
        });

        el.addEventListener('mouseleave', () => {
            isHovering = false;
            document.documentElement.style.setProperty('--f-s', '1');
            cursorFollower.style.opacity = '0.5';
            cursorFollower.style.borderColor = 'var(--accent-primary)';
        });
    });

    // 2. Scroll Progress Bar
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // 3. Intersection Observer for Scroll Reveals
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only reveal once
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Smooth Scrolling for Nav Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Account for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Technical Touch: Log a cool message to console
    console.log("%c Aditya Singh | Technical Masterpiece Portfolio ", "color: #00f2ff; font-weight: bold; font-size: 20px; background: #050505; padding: 10px; border-radius: 5px;");
    console.log("Environment: Pure HTML/CSS/JS | Performance: Optimal | Status: Live");
});
