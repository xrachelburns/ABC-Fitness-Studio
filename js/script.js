document.addEventListener("DOMContentLoaded", () => {

    // ---------------- Subscribe ----------------
    const subscribeButtons = document.querySelectorAll(".subscribe-button");
    subscribeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Thank you for subscribing.");
        });
    });

    // ---------------- Shopping Cart ----------------
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {

            const product =
                button.parentElement.querySelector("h2").textContent;

            cart.push(product);

            sessionStorage.setItem("cart", JSON.stringify(cart));

            alert("Item added to the cart.");
        });
    });

    // View Cart
    const viewCartButton = document.querySelector("#view-cart");

    if (viewCartButton) {

        viewCartButton.addEventListener("click", () => {

            const cartItems = document.querySelector("#cart-items");

            cartItems.innerHTML = "";

            cart = JSON.parse(sessionStorage.getItem("cart")) || [];

            if (cart.length === 0) {

                cartItems.innerHTML = "<li>Your cart is empty.</li>";

            } else {

                cart.forEach((item) => {

                    const li = document.createElement("li");

                    li.textContent = item;

                    cartItems.appendChild(li);

                });

            }

            document.querySelector("#cart-modal").hidden = false;

        });

    }

    // Close Cart
    const closeCartButton = document.querySelector("#close-cart");

    if (closeCartButton) {

        closeCartButton.addEventListener("click", () => {

            document.querySelector("#cart-modal").hidden = true;

        });

    }

    // Clear Cart
    const clearCartButton = document.querySelector("#clear-cart");

    if (clearCartButton) {

        clearCartButton.addEventListener("click", () => {

            cart = [];

            sessionStorage.removeItem("cart");

            alert("Cart cleared.");

        });

    }

    // Process Order
    const processOrderButton = document.querySelector("#process-order");

    if (processOrderButton) {

        processOrderButton.addEventListener("click", () => {

            cart = [];

            sessionStorage.removeItem("cart");

            alert("Thank you for your order.");

        });

    }

    // ---------------- Contact Form ----------------
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const formData = {
                firstName: document.querySelector('input[name="first-name"]')?.value || "",
                lastName: document.querySelector('input[name="last-name"]')?.value || "",
                email: document.querySelector('input[name="email"]')?.value || "",
                phone: document.querySelector('input[name="phone"]')?.value || "",
                message: document.querySelector('textarea[name="message"]')?.value || ""
            };

            localStorage.setItem(
                "contactForm",
                JSON.stringify(formData)
            );

            alert("Thank you for your message.");

        });

    }

});
