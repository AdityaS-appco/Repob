/**
 * Aditya Singh Portfolio v2 - Masterpiece Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cursor Engine
    const cursorP = document.querySelector('.cursor-p');
    const cursorF = document.querySelector('.cursor-f');

    let mX = 0, mY = 0; // Mouse Pos
    let fX = 0, fY = 0; // Follower Pos

    window.addEventListener('mousemove', (e) => {
        mX = e.clientX;
        mY = e.clientY;

        document.documentElement.style.setProperty('--cursor-x', `${mX}px`);
        document.documentElement.style.setProperty('--cursor-y', `${mY}px`);
    });

    const smoothFollow = () => {
        fX += (mX - fX) * 0.15;
        fY += (mY - fY) * 0.15;

        document.documentElement.style.setProperty('--f-x', `${fX}px`);
        document.documentElement.style.setProperty('--f-y', `${fY}px`);

        requestAnimationFrame(smoothFollow);
    };
    smoothFollow();

    // 1.5 Magnetic Effect
    const magneticElements = document.querySelectorAll('.nav-links a, .btn-cta, .copy-btn, .nav-brand');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0, 0)`;
        });
    });

    // Interaction scaling
    const interactives = document.querySelectorAll('a, button, .exp-card, .proj-card, .tech-item');
    interactives.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.documentElement.style.setProperty('--f-s', '2');
            cursorF.style.opacity = '0.8';
        });
        el.addEventListener('mouseleave', () => {
            document.documentElement.style.setProperty('--f-s', '1');
            cursorF.style.opacity = '0.3';
        });
    });

    // 2. Parallax Effect for Profile Image
    const profileFrame = document.querySelector('.profile-frame');
    if (profileFrame) {
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const moveX = (clientX - centerX) / 25;
            const moveY = (clientY - centerY) / 25;

            profileFrame.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        });
    }

    // 3. Scroll Reveal & Active Nav System
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Update Nav Link if the intersecting element is a section
                if (entry.target.tagName === 'SECTION') {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            }
        });
    }, { threshold: 0.15 }); // Lower threshold for better mobile/small screen trigger

    revealElements.forEach(el => revealObserver.observe(el));
    sections.forEach(el => revealObserver.observe(el));

    // 3.5 Scroll Progress Bar
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });

    // 4. Smooth Scroll for Navigation
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Copy Email Action
    const copyBtn = document.getElementById('copy-email');
    const emailLink = document.getElementById('email-link');

    if (copyBtn && emailLink) {
        copyBtn.addEventListener('click', () => {
            const email = emailLink.innerText;
            navigator.clipboard.writeText(email).then(() => {
                copyBtn.classList.add('success');
                // Lucide replaces <i> with <svg>, so we target the data attribute
                const icon = copyBtn.querySelector('[data-lucide]');
                const originalIcon = icon.getAttribute('data-lucide');

                if (originalIcon !== 'check') {
                    icon.setAttribute('data-lucide', 'check');
                    lucide.createIcons();

                    setTimeout(() => {
                        copyBtn.classList.remove('success');
                        // Use the saved original icon name
                        const currentIcon = copyBtn.querySelector('[data-lucide]');
                        currentIcon.setAttribute('data-lucide', 'copy');
                        lucide.createIcons();
                    }, 2000);
                }
            });
        });
    }

    // 6. Hero Text Glitch/Hover effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY, target } = e;
            const { clientWidth, clientHeight } = target;

            const xPos = (offsetX / clientWidth) - 0.5;
            const yPos = (offsetY / clientHeight) - 0.5;

            // Subtle shift
            target.style.textShadow = `
                ${xPos * 10}px ${yPos * 10}px 0 rgba(0, 255, 204, 0.2),
                ${xPos * -10}px ${yPos * -10}px 0 rgba(0, 136, 255, 0.2)
            `;
        });

        heroTitle.addEventListener('mouseleave', (e) => {
            e.target.style.textShadow = 'none';
        });
    }

    console.log("%c ADITYA SINGH // MASTERPIECE ACTIVATED ", "background: #00ffcc; color: #000; font-weight: bold; padding: 5px 10px;");
});
