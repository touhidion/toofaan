// ===== COMPLETE PRODUCT DATABASE =====
const allProducts = {
    1: {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 3500,
        originalPrice: 4500,
        rating: 4.8,
        reviews: 234,
        merchant: "Tech Mart BD",
        merchantAvatar: "TM",
        verified: true,
        badge: "Sale",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop"
        ],
        description: "Experience premium sound quality with our Premium Wireless Headphones. Designed for audiophiles and everyday users alike, these headphones deliver crystal-clear audio with deep bass and crisp highs. The active noise cancellation technology blocks out ambient noise, allowing you to immerse yourself in your music, podcasts, or calls. With up to 30 hours of battery life, you can enjoy uninterrupted listening throughout your day.",
        features: [
            "Active Noise Cancellation",
            "30 Hours Battery Life",
            "Premium Sound Quality",
            "Comfortable Over-Ear Design",
            "Bluetooth 5.0 Connectivity"
        ],
        specs: {
            "Brand": "Premium Audio",
            "Model": "PA-WH500",
            "Type": "Over-Ear Wireless",
            "Bluetooth Version": "5.0",
            "Battery Life": "Up to 30 hours",
            "Charging Time": "2 hours",
            "Driver Size": "40mm",
            "Frequency Response": "20Hz - 20kHz",
            "Impedance": "32 Ohms",
            "Weight": "250g",
            "Warranty": "1 Year"
        }
    },
    2: {
        id: 2,
        name: "Cotton Casual T-Shirt",
        price: 650,
        originalPrice: 900,
        rating: 4.6,
        reviews: 156,
        merchant: "Fashion Hub",
        merchantAvatar: "FH",
        verified: true,
        badge: "New",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop"
        ],
        description: "Comfortable and stylish cotton casual t-shirt perfect for everyday wear. Made from 100% premium cotton fabric that's soft, breathable, and durable. Available in multiple colors and sizes. Perfect for casual outings, gym sessions, or lounging at home.",
        features: [
            "100% Premium Cotton",
            "Breathable Fabric",
            "Available in Multiple Colors",
            "Machine Washable",
            "Comfortable Fit"
        ],
        specs: {
            "Brand": "Fashion Hub",
            "Material": "100% Cotton",
            "Fit": "Regular Fit",
            "Sleeve": "Short Sleeve",
            "Neck": "Round Neck",
            "Care": "Machine Wash",
            "Available Sizes": "S, M, L, XL, XXL",
            "Colors": "Black, White, Navy, Grey",
            "Weight": "180g",
            "Country of Origin": "Bangladesh",
            "Warranty": "30 Days Exchange"
        }
    },
    3: {
        id: 3,
        name: "Smart Watch Series 5",
        price: 8900,
        originalPrice: 12000,
        rating: 4.9,
        reviews: 445,
        merchant: "Tech Mart BD",
        merchantAvatar: "TM",
        verified: true,
        badge: "Sale",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop"
        ],
        description: "Stay connected and track your fitness with the Smart Watch Series 5. Features include heart rate monitoring, sleep tracking, GPS, and smartphone notifications. Water-resistant design perfect for swimming and workouts. Long-lasting battery life keeps you going all day.",
        features: [
            "Heart Rate Monitor",
            "GPS Tracking",
            "Water Resistant (50m)",
            "7-Day Battery Life",
            "Smartphone Notifications"
        ],
        specs: {
            "Brand": "SmartTech",
            "Model": "SW-500",
            "Display": "1.4 inch AMOLED",
            "Resolution": "454 x 454",
            "Battery": "7 days typical use",
            "Water Resistance": "5 ATM (50m)",
            "Connectivity": "Bluetooth 5.0",
            "Sensors": "Heart Rate, GPS, Accelerometer",
            "Compatibility": "iOS & Android",
            "Weight": "45g",
            "Warranty": "1 Year"
        }
    },
    4: {
        id: 4,
        name: "Decorative Table Lamp",
        price: 1200,
        originalPrice: 1800,
        rating: 4.7,
        reviews: 89,
        merchant: "Home Luxe",
        merchantAvatar: "HL",
        verified: true,
        badge: "Sale",
        images: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1550985616-10810253b84d?w=800&h=800&fit=crop"
        ],
        description: "Elegant decorative table lamp that adds warmth and style to any room. Features adjustable brightness settings and energy-efficient LED bulb. Modern minimalist design complements any interior decor. Perfect for bedroom, living room, or office.",
        features: [
            "Adjustable Brightness",
            "Energy-Efficient LED",
            "Modern Design",
            "Durable Construction",
            "Easy to Clean"
        ],
        specs: {
            "Brand": "Home Luxe",
            "Type": "Table Lamp",
            "Light Source": "LED",
            "Power": "12W",
            "Brightness Levels": "3 Levels",
            "Material": "Metal & Fabric",
            "Height": "45cm",
            "Base Diameter": "15cm",
            "Color": "White/Gold",
            "Cable Length": "1.5m",
            "Warranty": "6 Months"
        }
    },
    5: {
        id: 5,
        name: "Leather Backpack",
        price: 2400,
        originalPrice: 3200,
        rating: 4.8,
        reviews: 178,
        merchant: "Fashion Hub",
        merchantAvatar: "FH",
        verified: true,
        badge: "New",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=800&h=800&fit=crop"
        ],
        description: "Premium leather backpack combining style and functionality. Features multiple compartments for laptop, books, and accessories. Padded shoulder straps ensure comfortable carrying. Water-resistant leather protects your belongings. Perfect for work, travel, or daily use.",
        features: [
            "Genuine Leather",
            "Laptop Compartment (15 inch)",
            "Multiple Pockets",
            "Padded Straps",
            "Water Resistant"
        ],
        specs: {
            "Brand": "Fashion Hub",
            "Material": "Genuine Leather",
            "Capacity": "25 Liters",
            "Laptop Size": "Up to 15 inches",
            "Dimensions": "45 x 30 x 15 cm",
            "Weight": "850g",
            "Compartments": "3 Main + 2 Side",
            "Closure": "Zipper",
            "Color": "Brown/Black",
            "Strap Type": "Adjustable Padded",
            "Warranty": "1 Year"
        }
    },
    6: {
        id: 6,
        name: "Organic Skincare Set",
        price: 1850,
        originalPrice: 2500,
        rating: 4.9,
        reviews: 312,
        merchant: "Beauty Bliss",
        merchantAvatar: "BB",
        verified: true,
        badge: "Sale",
        images: [
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=800&fit=crop"
        ],
        description: "Complete organic skincare set for radiant, healthy skin. Includes cleanser, toner, serum, and moisturizer. Made with natural ingredients, free from harmful chemicals. Suitable for all skin types. Dermatologically tested and cruelty-free.",
        features: [
            "100% Organic Ingredients",
            "Paraben Free",
            "Cruelty Free",
            "Suitable for All Skin Types",
            "Dermatologically Tested"
        ],
        specs: {
            "Brand": "Beauty Bliss Organics",
            "Set Includes": "Cleanser, Toner, Serum, Moisturizer",
            "Cleanser": "100ml",
            "Toner": "100ml",
            "Serum": "30ml",
            "Moisturizer": "50ml",
            "Ingredients": "Organic & Natural",
            "Skin Type": "All Types",
            "Certification": "Organic Certified",
            "Shelf Life": "24 Months",
            "Country": "Bangladesh",
            "Warranty": "Satisfaction Guarantee"
        }
    },
    7: {
        id: 7,
        name: "Running Shoes Pro",
        price: 4200,
        originalPrice: 5500,
        rating: 4.7,
        reviews: 267,
        merchant: "Sports Zone",
        merchantAvatar: "SZ",
        verified: true,
        badge: "New",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop"
        ],
        description: "Professional running shoes designed for maximum performance and comfort. Features advanced cushioning technology, breathable mesh upper, and durable rubber outsole. Perfect for marathon training, jogging, or gym workouts. Available in multiple sizes and colors.",
        features: [
            "Advanced Cushioning",
            "Breathable Mesh Upper",
            "Durable Rubber Sole",
            "Lightweight Design",
            "Arch Support"
        ],
        specs: {
            "Brand": "ProRunner",
            "Type": "Running Shoes",
            "Upper Material": "Breathable Mesh",
            "Sole Material": "Rubber",
            "Cushioning": "EVA Foam",
            "Weight": "280g (per shoe)",
            "Available Sizes": "UK 6-12",
            "Colors": "Black, Blue, Red, White",
            "Closure": "Lace-up",
            "Suitable For": "Running, Training, Gym",
            "Warranty": "6 Months"
        }
    },
    8: {
        id: 8,
        name: "Ceramic Coffee Mug Set",
        price: 890,
        originalPrice: 1200,
        rating: 4.6,
        reviews: 134,
        merchant: "Home Luxe",
        merchantAvatar: "HL",
        verified: true,
        badge: "Sale",
        images: [
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&h=800&fit=crop"
        ],
        description: "Beautiful set of 4 ceramic coffee mugs perfect for your morning coffee or tea. High-quality ceramic construction ensures heat retention. Elegant design adds style to your kitchen. Dishwasher and microwave safe. Makes a great gift for coffee lovers.",
        features: [
            "Set of 4 Mugs",
            "High-Quality Ceramic",
            "Dishwasher Safe",
            "Microwave Safe",
            "Heat Retention"
        ],
        specs: {
            "Brand": "Home Luxe",
            "Material": "Ceramic",
            "Quantity": "4 Pieces",
            "Capacity": "350ml each",
            "Dimensions": "10cm height x 8cm diameter",
            "Weight": "300g each",
            "Color": "White with Gold Rim",
            "Care": "Dishwasher & Microwave Safe",
            "Design": "Modern Minimalist",
            "Package": "Gift Box Included",
            "Warranty": "3 Months"
        }
    }
};

// ===== RELATED PRODUCTS DATA =====
// Get 4 random products from the main database for related products
function getRelatedProducts(currentProductId) {
    const productIds = Object.keys(allProducts).map(Number).filter(id => id !== currentProductId);
    const shuffled = productIds.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4).map(id => allProducts[id]);
}

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
let currentProduct = null; // Will be set when product loads

addToCartBtn.addEventListener('click', () => {
    if (!currentProduct) return;

    const quantity = parseInt(quantityInput.value);

    // Add to cart using shared cart.js function
    addToCart(currentProduct, quantity);

    // Button feedback
    const originalHTML = addToCartBtn.innerHTML;
    addToCartBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Added to Cart!';
    addToCartBtn.style.background = 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 76%, 56%))';

    setTimeout(() => {
        addToCartBtn.innerHTML = originalHTML;
        addToCartBtn.style.background = '';
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
function renderRelatedProducts(currentProductId = 1) {
    const relatedProductsGrid = document.getElementById('relatedProducts');
    const relatedProducts = getRelatedProducts(currentProductId);

    relatedProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animation = `slideUp 0.6s ease ${index * 0.1}s backwards`;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0].replace('w=800&h=800', 'w=500&h=500')}" alt="${product.name}" loading="lazy">
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
                window.location.href = `product-details.html?id=${product.id}`;
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

// ===== LOAD PRODUCT DETAILS DYNAMICALLY =====
function loadProductDetails() {
    // Get product ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1; // Default to product 1

    const product = allProducts[productId];

    if (!product) {
        console.error('Product not found');
        return;
    }

    // Update page title
    document.title = `${product.name} - TOOFAAN`;

    // Update breadcrumb
    document.querySelector('.breadcrumb .current').textContent = product.name;

    // Update main image
    mainImage.src = product.images[0];

    // Update thumbnail images
    const thumbnailContainer = document.querySelector('.thumbnail-images');
    thumbnailContainer.innerHTML = '';
    product.images.forEach((img, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.src = img.replace('w=800&h=800', 'w=200&h=200');
        thumbnail.alt = `View ${index + 1}`;
        thumbnailContainer.appendChild(thumbnail);
    });

    // Re-attach thumbnail click events
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src.replace('w=200&h=200', 'w=800&h=800');
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.transition = 'opacity 0.3s ease';
                mainImage.style.opacity = '1';
            }, 50);
        });
    });

    // Update merchant info
    document.querySelector('.merchant-avatar').textContent = product.merchantAvatar;
    document.querySelector('.merchant-name').innerHTML = `${product.merchant} <span class="verified">✓</span>`;

    // Update product title
    document.querySelector('.product-title').textContent = product.name;

    // Update rating
    document.querySelector('.rating-text').textContent = `${product.rating} out of 5`;
    document.querySelector('.review-count').textContent = `(${product.reviews} reviews)`;

    // Update prices
    document.querySelector('.price-main').textContent = `৳${product.price.toLocaleString()}`;
    document.querySelector('.price-original').textContent = `৳${product.originalPrice.toLocaleString()}`;
    const savings = product.originalPrice - product.price;
    const savingsPercent = Math.round((savings / product.originalPrice) * 100);
    document.querySelector('.price-discount').textContent = `Save ৳${savings.toLocaleString()} (${savingsPercent}%)`;

    // Update badge
    document.querySelector('.product-badge').textContent = `${savingsPercent}% OFF`;
    document.querySelector('.product-badge').className = `product-badge ${product.badge.toLowerCase()}`;

    // Update features
    const featuresList = document.querySelector('.product-highlights ul');
    featuresList.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = `✓ ${feature}`;
        featuresList.appendChild(li);
    });

    // Update description
    document.querySelector('#description p').textContent = product.description;

    // Update specifications
    const specsTable = document.querySelector('.specs-table');
    specsTable.innerHTML = '';
    Object.entries(product.specs).forEach(([key, value]) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${key}</td><td>${value}</td>`;
        specsTable.appendChild(row);
    });

    // Update reviews summary
    document.querySelector('.score-number').textContent = product.rating;
    document.querySelector('.score-text').textContent = `Based on ${product.reviews} reviews`;

    // Store current product for cart functionality
    currentProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
    };

    return productId; // Return the product ID for related products
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    const productId = loadProductDetails(); // Load product data first
    renderRelatedProducts(productId); // Pass product ID to show different related products
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
