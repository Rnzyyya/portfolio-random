// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Header and nav scroll effect
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const backToTop = document.getElementById('backToTop');
    
    if (header && nav && backToTop) {
        window.addEventListener('scroll', function() {
            // Header scroll effect
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                nav.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
                nav.classList.remove('scrolled');
            }
            
            // Back to top button visibility
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
            
            // Section reveal animation
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.85) {
                    section.classList.add('visible');
                }
            });
        });
        
        // Back to top functionality
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links (starting with #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Button animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
        });
    });
    
    // Project button functionality
    document.querySelectorAll('.project-view-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Wala pa talaga to.');
        });
    });
    
    document.querySelectorAll('.project-code-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('wala pa talaga to.');
        });
    });
    
    // Learn more button functionality
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // If about section is not on current page, navigate to about page
                window.location.href = 'about.html';
            }
        });
    }
    
    // Contact button functionality
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert('wala pa to boss.');
        });
    }
    
    // Skill tag animations
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Initial section reveal on page load
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
});

// GALAXY: Inject twinkling stars into DOM
function addGalaxyStars() {
    const starLayer = document.createElement('div');
    starLayer.className = 'stars';
    const numStars = 110;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = Math.random()*0.5 + 0.5;
        star.style.animationDelay = (Math.random()*3) + 's';
        const size = Math.random() * 2.5 + 1;
        star.style.width = star.style.height = size + 'px';
        // Animated motion for parallax
        star.style.transition = 'top 0.5s linear';
        starLayer.appendChild(star);
    }
    document.body.appendChild(starLayer);
    // Parallax on scroll
    window.addEventListener('scroll', () => {
        const yOffset = window.scrollY * 0.04;
        [...starLayer.children].forEach((star,idx) => {
          star.style.top = `calc(${star.style.top} + ${Math.sin(idx)*yOffset}px)`;
        });
    });
}
addGalaxyStars();