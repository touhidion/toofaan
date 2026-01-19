/**
 * Toofaan Homepage - Interactive Features
 * Language Toggle, Sticky Header, Countdown Timer, etc.
 */

(function() {
    'use strict';

    // ============================================
    // Language Toggle (EN / বাংলা)
    // ============================================
    const langToggle = document.getElementById('langToggle');
    const htmlElement = document.documentElement;
    let currentLang = 'en';

    // Initialize language from localStorage or default to 'en'
    if (localStorage.getItem('preferredLang')) {
        currentLang = localStorage.getItem('preferredLang');
        updateLanguage(currentLang);
    }

    function updateLanguage(lang) {
        currentLang = lang;
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'bn' ? 'rtl' : 'ltr');
        
        // Update all elements with data-en and data-bn attributes
        const elements = document.querySelectorAll('[data-en], [data-bn]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                element.textContent = text;
            }
        });

        // Update language toggle button
        const langTexts = document.querySelectorAll('.lang-text');
        langTexts.forEach(text => {
            if (text.getAttribute('data-lang') === lang) {
                text.style.display = 'inline';
            } else {
                text.style.display = 'none';
            }
        });

        // Save preference
        localStorage.setItem('preferredLang', lang);
    }

    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'bn' : 'en';
            updateLanguage(newLang);
        });
    }

    // ============================================
    // Sticky Header on Scroll
    // ============================================
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
            // Add shadow effect
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // ============================================
    // Countdown Timer for Flash Sale
    // ============================================
    function initCountdownTimer() {
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (!hoursEl || !minutesEl || !secondsEl) return;

        // Set end time (24 hours from now)
        let endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

        function updateTimer() {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                // Timer expired, reset to 24 hours
                endTime = new Date().getTime() + (24 * 60 * 60 * 1000);
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
            secondsEl.textContent = String(seconds).padStart(2, '0');
        }

        // Update immediately and then every second
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    initCountdownTimer();

    // ============================================
    // Search Functionality
    // ============================================
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('searchInput');

    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const query = searchInput.value.trim();
            if (query) {
                // Redirect to search page with query
                window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }
        });
    }

    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // Product Card Interactions
    // ============================================
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ============================================
    // Lazy Loading Images (Performance)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // Cart Count Update (Example)
    // ============================================
    function updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            // Get cart count from localStorage or API
            const count = localStorage.getItem('cartCount') || 0;
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    updateCartCount();

    // ============================================
    // Mobile Menu Toggle (if needed in future)
    // ============================================
    function initMobileMenu() {
        // This can be expanded if a mobile menu is added
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        }
    }

    // ============================================
    // Form Validation (for future forms)
    // ============================================
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    // ============================================
    // Analytics Tracking (Placeholder)
    // ============================================
    function trackEvent(category, action, label) {
        // Integrate with Google Analytics, Facebook Pixel, etc.
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    }

    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            trackEvent('Button', 'Click', btnText);
        });
    });

    // ============================================
    // Performance Monitoring
    // ============================================
    window.addEventListener('load', function() {
        // Log page load time
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page Load Time:', pageLoadTime + 'ms');
        }
    });

    // ============================================
    // Error Handling
    // ============================================
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
        // Send to error tracking service (e.g., Sentry)
    });

    // ============================================
    // Initialize on DOM Ready
    // ============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Toofaan Homepage Initialized');
        });
    } else {
        console.log('Toofaan Homepage Initialized');
    }

})();
