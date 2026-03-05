/**
 * Special Kids Learning Center - Digital Booklet
 * Interactive JavaScript Features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initPageNavigation();
    initTableOfContents();
    initPrintButton();
    initSmoothScrolling();
    initScrollProgress();
});

/**
 * Page Navigation
 * Navigate between pages using previous/next buttons
 */
function initPageNavigation() {
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    
    if (!pages.length || !prevBtn || !nextBtn) return;
    
    // Update total pages
    totalPagesSpan.textContent = pages.length;
    
    // Track current visible page
    let currentPageIndex = 0;
    
    // Scroll to specific page
    function scrollToPage(index) {
        if (index >= 0 && index < pages.length) {
            currentPageIndex = index;
            pages[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateNavigation();
        }
    }
    
    // Update navigation buttons state
    function updateNavigation() {
        currentPageSpan.textContent = currentPageIndex + 1;
        prevBtn.disabled = currentPageIndex === 0;
        nextBtn.disabled = currentPageIndex === pages.length - 1;
    }
    
    // Button click handlers
    prevBtn.addEventListener('click', () => {
        scrollToPage(currentPageIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        scrollToPage(currentPageIndex + 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            scrollToPage(currentPageIndex - 1);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            scrollToPage(currentPageIndex + 1);
        }
    });
    
    // Detect current page on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;
            
            pages.forEach((page, index) => {
                const rect = page.getBoundingClientRect();
                const pageTop = rect.top + window.scrollY;
                const pageBottom = pageTop + rect.height;
                
                if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
                    if (currentPageIndex !== index) {
                        currentPageIndex = index;
                        updateNavigation();
                    }
                }
            });
        }, 100);
    });
    
    // Initial state
    updateNavigation();
}

/**
 * Table of Contents
 * Toggle sidebar navigation
 */
function initTableOfContents() {
    const tocToggle = document.getElementById('tocToggle');
    const toc = document.getElementById('toc');
    
    if (!tocToggle || !toc) return;
    
    // Toggle TOC sidebar
    tocToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        toc.classList.toggle('active');
    });
    
    // Close TOC when clicking outside
    document.addEventListener('click', (e) => {
        if (!toc.contains(e.target) && !tocToggle.contains(e.target)) {
            toc.classList.remove('active');
        }
    });
    
    // Close TOC when clicking a link
    const tocLinks = toc.querySelectorAll('a');
    tocLinks.forEach(link => {
        link.addEventListener('click', () => {
            toc.classList.remove('active');
        });
    });
    
    // Highlight current section in TOC
    const sections = document.querySelectorAll('.page[id]');
    
    function highlightCurrentSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightCurrentSection);
    highlightCurrentSection();
}

/**
 * Print Button
 * Open print dialog for PDF saving
 */
function initPrintButton() {
    const printBtn = document.getElementById('printBtn');
    
    if (!printBtn) return;
    
    printBtn.addEventListener('click', () => {
        // Show print instructions
        const confirmation = confirm(
            'To save as PDF:\n\n' +
            '1. In the print dialog, select "Save as PDF" as your printer\n' +
            '2. Set margins to "None" for best results\n' +
            '3. Enable "Background graphics" option\n' +
            '4. Click Save/Print\n\n' +
            'Continue to print dialog?'
        );
        
        if (confirmation) {
            window.print();
        }
    });
}

/**
 * Smooth Scrolling
 * Handle anchor link clicks with smooth scroll
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Scroll Progress Indicator
 * Optional: Add visual progress indicator
 */
function initScrollProgress() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress no-print';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: rgba(61, 154, 139, 0.2);
            z-index: 9999;
        }
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #3D9A8B, #5BB5A6);
            width: 0%;
            transition: width 0.1s ease;
        }
        @media print {
            .scroll-progress { display: none !important; }
        }
    `;
    document.head.appendChild(style);
    
    // Update progress on scroll
    const progressBarInner = progressBar.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBarInner.style.width = `${scrollPercent}%`;
    });
}

/**
 * Utility: Animate on Scroll
 * Add fade-in animation to elements as they enter viewport
 */
function initAnimateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        @media print {
            .animate-on-scroll {
                opacity: 1 !important;
                transform: none !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.page, .pillar-card, .addon-card, .enrollment-step');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

/**
 * Touch Swipe Support
 * Handle swipe gestures for mobile navigation
 */
function initTouchSwipe() {
    let touchStartX = 0;
    let touchEndX = 0;
    const pages = document.querySelectorAll('.page');
    let currentPageIndex = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) < swipeThreshold) return;
        
        if (diff > 0 && currentPageIndex < pages.length - 1) {
            // Swipe left - next page
            currentPageIndex++;
            pages[currentPageIndex].scrollIntoView({ behavior: 'smooth' });
        } else if (diff < 0 && currentPageIndex > 0) {
            // Swipe right - previous page
            currentPageIndex--;
            pages[currentPageIndex].scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Initialize touch support for mobile
if ('ontouchstart' in window) {
    initTouchSwipe();
}

