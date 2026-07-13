document.addEventListener("DOMContentLoaded", () => {

    // Product pricing
    const productPrices = {
        "Group Kickboxing": 30,
        "Group Pilates": 28,
        "Group Yoga": 25,
        "Individual Kickboxing": 75,
        "Individual Pilates": 65,
        "Individual Yoga": 60,
        "ABC Fitness T-Shirt": 20,
        "Water Bottle": 18,
        "Yoga Mat": 35
    };

    // ---------------- Subscribe ----------------
    const subscribeButtons = document.querySelectorAll(".subscribe-button");

    subscribeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Thank you for subscribing.");
        });
    });

    // ---------------- Shopping Cart ----------------
    const viewCartButton = document.querySelector("#view-cart");
    const cartModal = document.querySelector("#cart-modal");
    const cartItems = document.querySelector("#cart-items");
    const cartTotal = document.querySelector(".cart-total");
    const closeCartButton = document.querySelector("#close-cart");
    const clearCartButton = document.querySelector("#clear-cart");
    const processOrderButton = document.querySelector("#process-order");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    function updateCartUI() {
        cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        if (viewCartButton) {
            const cartLabel = viewCartButton.querySelector(".cart-button-label");
            const cartBadge = viewCartButton.querySelector(".cart-count");

            if (cartLabel) {
                cartLabel.textContent = "View Cart";
            }

            if (cartBadge) {
                cartBadge.textContent = cart.length;
            }
        }
    }

    function renderCart() {
        cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        if (!cartItems) {
            return;
        }

        cartItems.innerHTML = "";

        if (cart.length === 0) {
            cartItems.innerHTML = "<li>Your cart is empty.</li>";

            if (cartTotal) {
                cartTotal.innerHTML = "";
            }

            return;
        }

        cart.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${item.name}</span><span>$${Number(item.price || 0).toFixed(2)}</span>`;
            cartItems.appendChild(li);
        });

        if (cartTotal) {
            const total = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);
            cartTotal.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
        }
    }

    function openCart() {
        renderCart();

        if (cartModal) {
            cartModal.hidden = false;
        }
    }

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.parentElement.querySelector("h2").textContent;
            const price = productPrices[product] || 0;

            cart.push({ name: product, price: price });
            sessionStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();

            alert("Item added to the cart.");
        });
    });

    if (viewCartButton) {
        viewCartButton.addEventListener("click", openCart);
    }

    if (closeCartButton) {
        closeCartButton.addEventListener("click", () => {
            if (cartModal) {
                cartModal.hidden = true;
            }
        });
    }

    if (clearCartButton) {
        clearCartButton.addEventListener("click", () => {
            cart = [];
            sessionStorage.removeItem("cart");
            updateCartUI();
            renderCart();
            alert("Cart cleared.");
        });
    }

    if (processOrderButton) {
        processOrderButton.addEventListener("click", () => {
            cart = [];
            sessionStorage.removeItem("cart");
            updateCartUI();
            renderCart();
            alert("Order placed successfully! Thank you for shopping with ABC Fitness Studio.");
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && cartModal && !cartModal.hidden) {
            cartModal.hidden = true;
        }
    });

    updateCartUI();

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const customerInformation = {
                firstName: contactForm.querySelector("#first-name")?.value || "",
                lastName: contactForm.querySelector("#last-name")?.value || "",
                email: contactForm.querySelector("#email")?.value || "",
                phone: contactForm.querySelector("#phone")?.value || "",
                message: contactForm.querySelector("#message")?.value || ""
            };

            localStorage.setItem(
                "customerInformation",
                JSON.stringify(customerInformation)
            );

            alert("Thank you for your message.");
        });
    }
});