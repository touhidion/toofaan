// ===== SHARED CART FUNCTIONALITY =====
// This file contains cart functions used by both index.html and product-details.html

let cart = JSON.parse(localStorage.getItem('toofaanCart')) || [];

function saveCart() {
    localStorage.setItem('toofaanCart', JSON.stringify(cart));
}

function updateCartBadge() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartCount;

        // Add animation
        cartBadge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartBadge.style.transform = 'scale(1)';
        }, 200);
    }
}

function addToCart(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadge();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateCartItemQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartBadge();
            renderCart();
        }
    }
}

function renderCart() {
    const cartModalBody = document.getElementById('cartModalBody');
    const cartModalFooter = document.getElementById('cartModalFooter');

    if (!cartModalBody || !cartModalFooter) return;

    if (cart.length === 0) {
        cartModalBody.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon">🛒</div>
                <div class="cart-empty-text">Your cart is empty</div>
                <button class="btn btn-primary" onclick="closeCartModal()">Continue Shopping</button>
            </div>
        `;
        cartModalFooter.innerHTML = '';
        return;
    }

    // Render cart items
    cartModalBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">৳${item.price.toLocaleString()}</div>
                <div class="cart-item-quantity">
                    <button class="cart-qty-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">🗑️</button>
        </div>
    `).join('');

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Render footer
    cartModalFooter.innerHTML = `
        <div class="cart-total">
            <span class="cart-total-label">Total:</span>
            <span class="cart-total-amount">৳${total.toLocaleString()}</span>
        </div>
        <button class="cart-checkout-btn" onclick="checkout()">Proceed to Checkout</button>
    `;
}

function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('active');
        renderCart();
    }
}

function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('active');
    }
}

function checkout() {
    alert(`Proceeding to checkout with ${cart.length} item(s)!\nTotal: ৳${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}`);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();

    // Cart button click handler
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }

    // Close modal when clicking overlay
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        const overlay = cartModal.querySelector('.cart-modal-overlay');
        const closeBtn = cartModal.querySelector('.cart-modal-close');

        if (overlay) {
            overlay.addEventListener('click', closeCartModal);
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeCartModal);
        }
    }
});
