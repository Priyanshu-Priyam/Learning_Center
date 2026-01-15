/**
 * Special Kids Learning Center - Main JavaScript
 * Handles navigation, modals, accordions, and animations
 */

(function() {
    'use strict';

    // ===================
    // DOM Elements
    // ===================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const faqItems = document.querySelectorAll('.faq-item');
    const programButtons = document.querySelectorAll('.program-details-btn');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    // ===================
    // Navigation
    // ===================

    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu
    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Smooth scroll to section
    function smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (element) {
            const navbarHeight = navbar.offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight - 20;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Handle nav link clicks
    function handleNavLinkClick(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            closeMobileMenu();
            smoothScrollTo(href);
        }
    }

    // ===================
    // FAQ Accordion
    // ===================

    function toggleFaqItem(e) {
        const item = this.closest('.faq-item');
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    }

    // ===================
    // Program Modals
    // ===================

    function openModal(modalId) {
        const modal = document.getElementById(`modal-${modalId}`);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function closeAllModals() {
        modals.forEach(modal => {
            closeModal(modal);
        });
    }

    function handleProgramButtonClick() {
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    }

    function handleModalCloseClick() {
        const modal = this.closest('.modal');
        closeModal(modal);
    }

    function handleModalOverlayClick() {
        const modal = this.closest('.modal');
        closeModal(modal);
    }

    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            closeMobileMenu();
        }
    }

    // ===================
    // Scroll Animations
    // ===================

    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Add scroll animation classes to elements
    function initScrollAnimations() {
        // Add animation classes to sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const header = section.querySelector('.section-header');
            if (header) {
                header.classList.add('animate-on-scroll');
            }
        });

        // Add stagger animation to grids
        const grids = document.querySelectorAll('.programs-grid, .pillars, .team-grid, .testimonials-grid, .resources-grid');
        grids.forEach(grid => {
            grid.classList.add('stagger-children');
        });

        // Add animation to steps
        const steps = document.querySelectorAll('.step');
        steps.forEach(step => {
            step.classList.add('animate-on-scroll');
        });

        // Initialize observer
        handleScrollAnimations();
    }

    // ===================
    // Active Nav Link Highlighting
    // ===================

    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ===================
    // Utility Functions
    // ===================

    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ===================
    // Phone Number Formatting
    // ===================

    // Update WhatsApp links with actual phone number
    function updateContactLinks() {
        // This function can be used to dynamically update phone numbers
        // For now, the placeholder number is used
        // You can update this when you have the actual number
    }

    // ===================
    // Form Validation (for future use)
    // ===================

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[6-9]\d{9}$/;
        return re.test(phone.replace(/\D/g, ''));
    }

    // ===================
    // Analytics Tracking (placeholder)
    // ===================

    function trackEvent(category, action, label) {
        // Placeholder for analytics tracking
        // Can be integrated with Google Analytics or other services
        console.log('Event tracked:', { category, action, label });
    }

    // Track CTA clicks
    function trackCTAClick(e) {
        const button = e.target.closest('a, button');
        if (button) {
            const text = button.textContent.trim();
            trackEvent('CTA', 'click', text);
        }
    }

    // ===================
    // Lazy Loading Images (for future use)
    // ===================

    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        }
    }

    // ===================
    // Preloader (optional)
    // ===================

    function hidePreloader() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }
    }

    // ===================
    // Initialize
    // ===================

    function init() {
        // Event Listeners - Navigation
        window.addEventListener('scroll', throttle(handleNavbarScroll, 100));
        window.addEventListener('scroll', throttle(highlightActiveNavLink, 100));
        
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });

        // Event Listeners - FAQ
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', toggleFaqItem);
            }
        });

        // Event Listeners - Modals
        programButtons.forEach(button => {
            button.addEventListener('click', handleProgramButtonClick);
        });

        modalCloses.forEach(close => {
            close.addEventListener('click', handleModalCloseClick);
        });

        modalOverlays.forEach(overlay => {
            overlay.addEventListener('click', handleModalOverlayClick);
        });

        document.addEventListener('keydown', handleEscapeKey);

        // Initialize features
        initScrollAnimations();
        initLazyLoading();
        updateContactLinks();

        // Initial checks
        handleNavbarScroll();
        highlightActiveNavLink();

        // Track CTA clicks
        document.addEventListener('click', trackCTAClick);

        // Hide preloader if exists
        hidePreloader();

        console.log('Special Kids Learning Center website initialized successfully!');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ===================
    // Public API (if needed)
    // ===================

    window.SpecialKidsLC = {
        openModal: openModal,
        closeAllModals: closeAllModals,
        smoothScrollTo: smoothScrollTo,
        trackEvent: trackEvent
    };

})();

