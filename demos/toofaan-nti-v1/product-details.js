// ===== RELATED PRODUCTS DATA =====
const relatedProducts = [
    {
        id: 9,
        name: "Bluetooth Speaker Pro",
        price: 2800,
        originalPrice: 3500,
        rating: 4.7,
        reviews: 189,
        merchant: "Tech Mart BD",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop"
    },
    {
        id: 10,
        name: "USB-C Fast Charger",
        price: 1200,
        originalPrice: 1600,
        rating: 4.8,
        reviews: 267,
        merchant: "Tech Mart BD",
        verified: true,
        badge: "New",
        image: "https://images.unsplash.com/photo-1591290619762-c588f0e8d3d8?w=500&h=500&fit=crop"
    },
    {
        id: 11,
        name: "Phone Stand Holder",
        price: 450,
        originalPrice: 700,
        rating: 4.6,
        reviews: 134,
        merchant: "Tech Mart BD",
        verified: true,
        badge: "Sale",
        image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop"
    },
    {
        id: 12,
        name: "Wireless Earbuds",
        price: 2200,
        originalPrice: 3000,
        rating: 4.9,
        reviews: 445,
        merchant: "Tech Mart BD",
        verified: true,
        badge: "New",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop"
    }
];

// ===== IMAGE GALLERY =====
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Update main image
        mainImage.src = thumbnail.src.replace('w=200&h=200', 'w=800&h=800');

        // Update active thumbnail
        thumbnails.forEach(t => t.classList.remove('active'));
        thumbnail.classList.add('active');

        // Add animation
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.style.transition = 'opacity 0.3s ease';
            mainImage.style.opacity = '1';
        }, 50);
    });
});

// ===== COLOR SELECTION =====
const colorOptions = document.querySelectorAll('.color-option');
let selectedColor = 'Black';

colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        colorOptions.forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        selectedColor = option.dataset.color;
        console.log(`Selected color: ${selectedColor}`);
    });
});

// ===== QUANTITY SELECTOR =====
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decreaseQty');
const increaseBtn = document.getElementById('increaseQty');

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        animateQuantity();
    }
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
        animateQuantity();
    }
});

function animateQuantity() {
    quantityInput.style.transform = 'scale(1.1)';
    setTimeout(() => {
        quantityInput.style.transition = 'transform 0.2s ease';
        quantityInput.style.transform = 'scale(1)';
    }, 100);
}

// ===== ADD TO CART =====
const addToCartBtn = document.querySelector('.add-to-cart-main');
let cartCount = 3;

addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    cartCount += quantity;

    // Update cart badge
    const cartBadge = document.querySelector('.cart-badge');
    cartBadge.textContent = cartCount;
    cartBadge.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 200);

    // Button feedback
    const originalHTML = addToCartBtn.innerHTML;
    addToCartBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Added to Cart!';
    addToCartBtn.style.background = 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 76%, 56%))';

    setTimeout(() => {
        addToCartBtn.innerHTML = originalHTML;
    }, 2000);

    console.log(`Added ${quantity} item(s) in ${selectedColor} to cart`);
});

// ===== WISHLIST =====
const wishlistBtn = document.querySelector('.wishlist-btn');
let isWishlisted = false;

wishlistBtn.addEventListener('click', () => {
    isWishlisted = !isWishlisted;

    if (isWishlisted) {
        wishlistBtn.style.color = 'var(--color-secondary)';
        wishlistBtn.querySelector('svg').style.fill = 'var(--color-secondary)';
        wishlistBtn.style.borderColor = 'var(--color-secondary)';
    } else {
        wishlistBtn.style.color = '';
        wishlistBtn.querySelector('svg').style.fill = 'none';
        wishlistBtn.style.borderColor = '';
    }

    // Animation
    wishlistBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        wishlistBtn.style.transform = 'scale(1)';
    }, 200);
});

// ===== TABS FUNCTIONALITY =====
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        // Update active button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update active pane
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(targetTab).classList.add('active');
    });
});

// ===== RENDER RELATED PRODUCTS =====
function renderRelatedProducts() {
    const relatedProductsGrid = document.getElementById('relatedProducts');

    relatedProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animation = `slideUp 0.6s ease ${index * 0.1}s backwards`;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>
                <div class="product-actions">
                    <button class="product-action-btn" aria-label="Add to wishlist">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="product-action-btn" aria-label="Quick view">
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
                // In a real app, this would pass the product ID
                window.location.reload();
            }
        });

        // Add cursor pointer style
        productCard.style.cursor = 'pointer';

        relatedProductsGrid.appendChild(productCard);
    });
}

// ===== NAVIGATION =====
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
});

// ===== MERCHANT STORE VISIT =====
document.querySelector('.visit-store').addEventListener('click', () => {
    console.log('Visiting Tech Mart BD store');
    // In a real app, this would navigate to the merchant's store page
});

// ===== REVIEW HELPFUL BUTTONS =====
document.querySelectorAll('.review-helpful button').forEach(button => {
    button.addEventListener('click', () => {
        const currentText = button.textContent;
        const match = currentText.match(/\((\d+)\)/);
        if (match) {
            const count = parseInt(match[1]) + 1;
            button.textContent = currentText.replace(/\(\d+\)/, `(${count})`);
        }

        // Disable button after click
        button.style.opacity = '0.5';
        button.style.cursor = 'not-allowed';
        button.disabled = true;
    });
});

// ===== SEARCH FUNCTIONALITY =====
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchQuery = prompt('What are you looking for?');
    if (searchQuery) {
        console.log(`Searching for: ${searchQuery}`);
    }
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    renderRelatedProducts();
    console.log('Product Details Page Loaded Successfully! 🎉');

    // Animate review bars on load
    setTimeout(() => {
        document.querySelectorAll('.bar-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
