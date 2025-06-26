// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVBAR FUNCTIONALITY =====
    const navbar = document.getElementById('mainNavbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active nav link highlighting
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ===== SCROLL TO TOP BUTTON =====
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== CONTACT FORM FUNCTIONALITY =====
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            let isValid = true;
            const errors = {};
            
            // Clear previous validation states
            this.querySelectorAll('.form-control').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            
            this.querySelectorAll('.invalid-feedback').forEach(feedback => {
                feedback.remove();
            });
            
            // Validate name
            if (!name || name.trim().length < 2) {
                isValid = false;
                errors.name = 'Nome deve ter pelo menos 2 caracteres';
                showFieldError('name', errors.name);
            } else {
                showFieldSuccess('name');
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                isValid = false;
                errors.email = 'Por favor, insira um e-mail válido';
                showFieldError('email', errors.email);
            } else {
                showFieldSuccess('email');
            }
            
            // Validate message
            if (!message || message.trim().length < 10) {
                isValid = false;
                errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
                showFieldError('message', errors.message);
            } else {
                showFieldSuccess('message');
            }
            
            if (isValid) {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual API call)
                setTimeout(() => {
                    // Show success message
                    showSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                    
                    // Reset form
                    this.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    
                    // Clear validation states
                    this.querySelectorAll('.form-control').forEach(field => {
                        field.classList.remove('is-valid');
                    });
                    
                }, 2000);
            }
        });
    }
    
    // Helper functions for form validation
    function showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        field.classList.add('is-invalid');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function showFieldSuccess(fieldName) {
        const field = document.getElementById(fieldName);
        field.classList.add('is-valid');
    }
    
    function showSuccessMessage(message) {
        // Remove existing success message
        const existingAlert = document.querySelector('.alert-success');
        if (existingAlert) {
            existingAlert.remove();
        }
        
        // Create success alert
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-success alert-dismissible fade show';
        alertDiv.innerHTML = `
            <i class="fas fa-check-circle me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        // Insert before the form
        const contactSection = document.getElementById('contact');
        const container = contactSection.querySelector('.container');
        const row = container.querySelector('.row');
        row.parentNode.insertBefore(alertDiv, row);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
    
    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .about-image, .section-title').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // ===== MOBILE MENU ENHANCEMENT =====
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    }
    
    // ===== PARALLAX EFFECT FOR HERO SECTION =====
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // ===== SERVICE CARDS HOVER EFFECTS =====
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===== TYPING ANIMATION FOR HERO TITLE =====
    const heroTitle = document.querySelector('.hero-section h1');
    
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }
    
    // ===== LAZY LOADING FOR IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        setActiveNavLink();
    }, 100));
    
    // ===== ACCESSIBILITY ENHANCEMENTS =====
    // Add keyboard navigation for service cards
    serviceCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });
    
    // Add focus styles for better accessibility
    document.querySelectorAll('a, button, input, textarea').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ===== CONSOLE WELCOME MESSAGE =====
    console.log('%c🚀 Bem-vindo ao nosso site!', 'color: #007bff; font-size: 20px; font-weight: bold;');
    console.log('%cDesenvolvido com HTML, CSS, JavaScript e Bootstrap', 'color: #6c757d; font-size: 14px;');
    
}); 