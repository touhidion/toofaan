// ===== SAMPLE PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 3500,
        originalPrice: 4500,
        rating: 4.8,
        reviews: 234,
        merchant: "Tech Mart BD",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
    },
    {
        id: 2,
        name: "Cotton Casual T-Shirt",
        price: 650,
        originalPrice: 900,
        rating: 4.6,
        reviews: 156,
        merchant: "Fashion Hub",
        verified: true,
        badge: "New",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop"
    },
    {
        id: 3,
        name: "Smart Watch Series 5",
        price: 8900,
        originalPrice: 12000,
        rating: 4.9,
        reviews: 445,
        merchant: "Tech Mart BD",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    },
    {
        id: 4,
        name: "Decorative Table Lamp",
        price: 1200,
        originalPrice: 1800,
        rating: 4.7,
        reviews: 89,
        merchant: "Home Luxe",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop"
    },
    {
        id: 5,
        name: "Leather Backpack",
        price: 2400,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 178,
        merchant: "Fashion Hub",
        verified: true,
        badge: "New",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop"
    },
    {
        id: 6,
        name: "Organic Skincare Set",
        price: 1850,
        originalPrice: 2500,
        rating: 4.9,
        reviews: 312,
        merchant: "Beauty Bliss",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop"
    },
    {
        id: 7,
        name: "Running Shoes Pro",
        price: 4200,
        originalPrice: 5500,
        rating: 4.7,
        reviews: 267,
        merchant: "Sports Zone",
        verified: true,
        badge: "New",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop"
    },
    {
        id: 8,
        name: "Ceramic Coffee Mug Set",
        price: 890,
        originalPrice: 1200,
        rating: 4.6,
        reviews: 134,
        merchant: "Home Luxe",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop"
    }
];

// ===== NAVIGATION FUNCTIONALITY =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');

            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ===== HERO CAROUSEL LOGIC =====
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('heroSlider');

function showSlide(index) {
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

function initHeroCarousel() {
    const nextBtn = document.getElementById('heroNext');
    const prevBtn = document.getElementById('heroPrev');
    const dotElements = document.querySelectorAll('.dot');

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    dotElements.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Auto-play
    let slideTimer = setInterval(nextSlide, 5000);

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000);
    }
}

// ===== CATEGORY-WISE PRODUCT SECTIONS =====
function renderCategorySections() {
    const sectionContainer = document.getElementById('categorySections');
    if (!sectionContainer) return;

    // Categories we want to showcase as sections
    const categoryConfigs = [
        { id: 'electronics', name: 'Smartphones & Gadgets', icon: '📱' },
        { id: 'fashion', name: 'Trending Fashion', icon: '👕' },
        { id: 'home', name: 'Home & Living', icon: '🏠' }
    ];

    sectionContainer.innerHTML = '';

    categoryConfigs.forEach(config => {
        const filteredProducts = products.filter(p => {
            if (config.id === 'electronics') return p.name.toLowerCase().includes('phone') || p.name.toLowerCase().includes('watch');
            if (config.id === 'fashion') return p.name.toLowerCase().includes('shirt') || p.name.toLowerCase().includes('backpack') || p.name.toLowerCase().includes('shoes');
            if (config.id === 'home') return p.name.toLowerCase().includes('lamp') || p.name.toLowerCase().includes('mug');
            return false;
        });

        if (filteredProducts.length === 0) return;

        const section = document.createElement('div');
        section.className = 'section-container container';
        section.innerHTML = `
            <div class="section-header-row">
                <h2 class="section-title-main">${config.name}</h2>
                <a href="#products" class="btn btn-small btn-outline">View All</a>
            </div>
            <div class="slider-outer">
                <button class="slider-btn prev">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <div class="slider-inner" id="slider-${config.id}">
                    <!-- Products injected here -->
                </div>
                <button class="slider-btn next">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                </button>
            </div>
        `;

        sectionContainer.appendChild(section);
        const sliderInner = document.getElementById(`slider-${config.id}`);

        filteredProducts.forEach(product => {
            const card = createProductCard(product);
            sliderInner.appendChild(card);
        });

        initSliderNavigation(section);
    });
}

function createProductCard(product) {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-badges">
                <span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>
                ${product.id % 2 === 0 ? '<span class="product-badge shipping">Free Shipping</span>' : ''}
            </div>
            <div class="product-actions">
                <button class="product-action-btn" aria-label="Add to wishlist">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </button>
                <button class="product-action-btn quick-view-btn" aria-label="Quick view" data-id="${product.id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-merchant">
                <span>${product.merchant}</span>
                ${product.verified ? '<span class="merchant-verified">✓</span>' : ''}
            </div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <div class="product-price">
                    <span class="price-current">৳${product.price.toLocaleString()}</span>
                    <span class="price-original">৳${product.originalPrice.toLocaleString()}</span>
                </div>
                <button class="add-to-cart" aria-label="Add to cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;

    div.addEventListener('click', (e) => {
        if (!e.target.closest('.product-action-btn') && !e.target.closest('.add-to-cart')) {
            window.location.href = `product-details.html?id=${product.id}`;
        } else if (e.target.closest('.quick-view-btn')) {
            e.stopPropagation();
            openQuickView(product);
        }
    });

    return div;
}

function initSliderNavigation(section) {
    const slider = section.querySelector('.slider-inner');
    const prevBtn = section.querySelector('.slider-btn.prev');
    const nextBtn = section.querySelector('.slider-btn.next');

    if (prevBtn) prevBtn.addEventListener('click', () => {
        slider.scrollLeft -= 600;
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        slider.scrollLeft += 600;
    });
}

// ===== PRODUCT RENDERING =====
function renderProducts() {
    const productGrid = document.getElementById('productGrid');

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animation = `slideUp 0.6s ease ${index * 0.1}s backwards`;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">
                    <span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>
                    ${product.id % 2 === 0 ? '<span class="product-badge shipping">Free Shipping</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="product-action-btn" aria-label="Add to wishlist">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="product-action-btn quick-view-btn" aria-label="Quick view" data-id="${product.id}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-merchant">
                    <span>${product.merchant}</span>
                    ${product.verified ? '<span class="merchant-verified">✓</span>' : ''}
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">৳${product.price.toLocaleString()}</span>
                        <span class="price-original">৳${product.originalPrice.toLocaleString()}</span>
                    </div>
                    <button class="add-to-cart" aria-label="Add to cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        // Add click event to navigate to product details
        productCard.addEventListener('click', (e) => {
            // Don't navigate if clicking on action buttons
            if (!e.target.closest('.product-action-btn') && !e.target.closest('.add-to-cart')) {
                window.location.href = `product-details.html?id=${product.id}`;
            } else if (e.target.closest('.quick-view-btn')) {
                e.stopPropagation();
                openQuickView(product);
            }
        });

        // Add cursor pointer style
        productCard.style.cursor = 'pointer';

        productGrid.appendChild(productCard);
    });
}

// ===== CATEGORY CARD INTERACTIONS =====
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.querySelector('.category-name').textContent;
            console.log(`Navigating to ${categoryName} category`);
            // In a real app, this would navigate to the category page
        });
    });
}

// ===== MERCHANT CARD INTERACTIONS =====
function initMerchantCards() {
    const merchantCards = document.querySelectorAll('.merchant-card');

    merchantCards.forEach(card => {
        const visitBtn = card.querySelector('.btn');
        visitBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const merchantName = card.querySelector('.merchant-name').textContent;
            console.log(`Visiting ${merchantName} store`);
            // In a real app, this would navigate to the merchant's store page
        });
    });
}

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('.newsletter-input').value;

        // Simulate subscription
        alert(`Thank you for subscribing with ${email}!`);
        form.reset();
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.categories, .products, .merchants, .newsletter').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ===== CART FUNCTIONALITY =====
// Cart is now managed by cart.js

// Add to cart functionality for product cards
document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart')) {
        e.stopPropagation(); // Prevent navigation to product details

        const productCard = e.target.closest('.product-card');
        const productIndex = Array.from(document.querySelectorAll('.product-card')).indexOf(productCard);
        const product = products[productIndex];

        if (product) {
            addToCart(product, 1);

            // Show feedback
            const btn = e.target.closest('.add-to-cart');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span style="font-size: 14px;">✓</span>';
            btn.style.background = 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 76%, 56%))';

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
            }, 1000);
        }
    }
});

// ===== QUICK VIEW FUNCTIONALITY =====
function openQuickView(product) {
    const modal = document.getElementById('quickViewModal');
    const body = document.getElementById('quickViewBody');
    const title = document.getElementById('quickViewTitle');

    if (!modal || !body) return;

    title.textContent = product.name;
    body.innerHTML = `
        <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
            <div style="flex: 1; min-width: 280px;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 12px; height: 300px; object-fit: cover;">
            </div>
            <div style="flex: 1.2; min-width: 280px;">
                <div style="color: var(--color-primary); font-weight: 600; margin-bottom: 0.5rem;">${product.merchant} ${product.verified ? '✓' : ''}</div>
                <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">${product.name}</h2>
                <div style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary); margin-bottom: 1rem;">
                    ৳${product.price.toLocaleString()} 
                    <span style="font-size: 1rem; color: var(--color-text-light); text-decoration: line-through; font-weight: 400; margin-left: 0.5rem;">৳${product.originalPrice.toLocaleString()}</span>
                </div>
                <p style="color: var(--color-text-light); margin-bottom: 1.5rem;">Experience high-quality audio and superior comfort with these premium headphones. Perfect for music, gaming, and professional use.</p>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-primary" style="flex: 1;" onclick="handleQuickAddToCart(${product.id})">Add to Cart</button>
                    <a href="product-details.html?id=${product.id}" class="btn btn-outline" style="flex: 1; text-decoration: none; justify-content: center;">View Details</a>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function handleQuickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        addToCart(product, 1);
        document.getElementById('quickViewModal').classList.remove('active');
    }
}

document.getElementById('closeQuickView')?.addEventListener('click', () => {
    document.getElementById('quickViewModal').classList.remove('active');
});

document.querySelector('#quickViewModal .cart-modal-overlay')?.addEventListener('click', () => {
    document.getElementById('quickViewModal').classList.remove('active');
});

// ===== SEARCH FUNCTIONALITY =====
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchQuery = prompt('What are you looking for?');
    if (searchQuery) {
        console.log(`Searching for: ${searchQuery}`);
        // In a real app, this would trigger a search
    }
});

// ===== INITIALIZE ALL FEATURES =====
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    renderCategorySections();
    renderProducts();
    initCategoryCards();
    initMerchantCards();
    initNewsletterForm();
    initScrollAnimations();

    console.log('TOOFAAN E-commerce Platform Loaded Successfully! 🎉');
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}
