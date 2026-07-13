document.addEventListener("DOMContentLoaded", () => {
    const subscribeButtons = document.querySelectorAll(".subscribe-button");

    subscribeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Thank you for subscribing.");
        });
    });

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName =
                button.closest("td")?.querySelector("h2")?.textContent.trim();

            if (!productName) {
                return;
            }

            cart.push(productName);
            sessionStorage.setItem("cart", JSON.stringify(cart));

            alert("Item added to the cart.");
        });
    });

    const viewCartButton = document.querySelector("#view-cart");
    const cartModal = document.querySelector("#cart-modal");
    const cartItems = document.querySelector("#cart-items");
    const closeCartButton = document.querySelector("#close-cart");

    const displayCart = () => {
        if (!cartItems || !cartModal) {
            return;
        }

        cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        cartItems.innerHTML = "";

        if (cart.length === 0) {
            const emptyItem = document.createElement("li");
            emptyItem.textContent = "Your cart is empty.";
            cartItems.appendChild(emptyItem);
        } else {
            cart.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                cartItems.appendChild(listItem);
            });
        }

        cartModal.hidden = false;
    };

    if (viewCartButton) {
        viewCartButton.addEventListener("click", displayCart);
    }

    if (closeCartButton && cartModal) {
        closeCartButton.addEventListener("click", () => {
            cartModal.hidden = true;
        });
    }

    const clearCartButton = document.querySelector("#clear-cart");

    if (clearCartButton) {
        clearCartButton.addEventListener("click", () => {
            cart = [];
            sessionStorage.removeItem("cart");

            if (cartItems) {
                cartItems.innerHTML = "<li>Your cart is empty.</li>";
            }

            alert("Cart cleared.");
        });
    }

    const processOrderButton = document.querySelector("#process-order");

    if (processOrderButton) {
        processOrderButton.addEventListener("click", () => {
            cart = [];
            sessionStorage.removeItem("cart");

            if (cartItems) {
                cartItems.innerHTML = "<li>Your cart is empty.</li>";
            }

            alert("Thank you for your order.");
        });
    }

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