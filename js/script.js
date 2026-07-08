document.addEventListener("DOMContentLoaded", () => {
    const subscribeButtons = document.querySelectorAll(".subscribe-button");
    subscribeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Thank you for subscribing.");
        });
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Item added to the cart.");
        });
    });

    const clearCartButton = document.querySelector("#clear-cart");
    if (clearCartButton) {
        clearCartButton.addEventListener("click", () => {
            alert("Cart cleared.");
        });
    }

    const processOrderButton = document.querySelector("#process-order");
    if (processOrderButton) {
        processOrderButton.addEventListener("click", () => {
            alert("Thank you for your order.");
        });
    }

    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for your message.");
        });
    }
});
