// Simple scroll animation
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add staggered animation to children elements
                const animatableChildren = entry.target.querySelectorAll('.animatable');
                if (animatableChildren.length > 0) {
                    animatableChildren.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, 150 * index);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all sections except the hero section
    document.querySelectorAll('section:not(#home)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Make sure hero section is always visible
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

    // Add animate class to trigger animations
    document.addEventListener('scroll', () => {
        document.querySelectorAll('.animate').forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (document.body.classList.contains('menu-open')) {
                document.body.classList.remove('menu-open');
                document.querySelector('.nav-links').classList.remove('active');
            }
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Enhanced hover effects for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered');
            
            // Add a slight lift effect
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered');
            
            // Reset transform and shadow
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });
    
    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.service-icon i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = 'var(--accent-color)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.service-icon i');
            if (icon) {
                icon.style.transform = '';
                icon.style.color = '';
            }
        });
    });
    
    // Form submission animation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // We don't prevent default anymore to allow the form to submit to Formspree
            
            // We still do client-side validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                e.preventDefault(); // Prevent form submission if validation fails
                alert('Please fill in all required fields');
                return;
            }
            
            // Add loading animation to submit button
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
                submitButton.classList.add('btn-loading');
            }
            
            // Form will be submitted to Formspree automatically
        });
    }
    
    // Add skill bar animation
    const skillBars = document.querySelectorAll('.skill-bar');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector('.progress');
                    const targetWidth = progressBar.getAttribute('data-width');
                    progressBar.style.width = targetWidth;
                }
            });
        }, { threshold: 0.5 });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }
    
    // Scroll to top button functionality
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (scrollToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopButton.classList.add('visible');
            } else {
                scrollToTopButton.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const navLinks = document.querySelector('.nav-links');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
