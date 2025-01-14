"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const pricingCards = document.querySelectorAll(".pricing__card");
    // Set the second card as selected by default
    if (pricingCards[1]) {
        pricingCards[1].classList.add("pricing__card--selected");
    }
    pricingCards.forEach((card, index) => {
        // Handle card click
        card.addEventListener("click", (event) => {
            const target = event.target;
            // Skip logic if clicking on the dropdown or its children
            if (target.closest(".custom-dropdown")) {
                return; // Exit if the click is within the dropdown
            }
            // Remove "selected" class from all cards
            pricingCards.forEach((c) => c.classList.remove("pricing__card--selected"));
            // Add "selected" class to the clicked card
            card.classList.add("pricing__card--selected");
            console.log(`Card ${index + 1} selected.`);
        });
        // Handle dropdown interactions within each card
        const dropdown = card.querySelector(".custom-dropdown");
        if (dropdown) {
            const button = dropdown.querySelector(".custom-dropdown__button");
            const menu = dropdown.querySelector(".custom-dropdown__menu");
            const items = dropdown.querySelectorAll(".custom-dropdown__item");
            // Toggle dropdown menu
            button.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent card selection on button click
                const isOpen = menu.classList.contains("open");
                if (isOpen) {
                    menu.classList.remove("open");
                    button.classList.remove("open");
                }
                else {
                    menu.classList.add("open");
                    button.classList.add("open");
                }
            });
            // Handle dropdown item selection
            items.forEach((item) => {
                item.addEventListener("click", (event) => {
                    event.stopPropagation(); // Prevent card selection on item click
                    // Remove "selected" class from all items in this dropdown
                    items.forEach((i) => i.classList.remove("selected"));
                    // Add "selected" class to the clicked item
                    item.classList.add("selected");
                    // Update the button text with the selected item's text
                    button.innerHTML = `${item.textContent} <span class="custom-dropdown__icon"></span>`;
                    // Close the dropdown menu
                    menu.classList.remove("open");
                    button.classList.remove("open");
                });
            });
            // Close the dropdown when clicking outside
            document.addEventListener("click", (event) => {
                if (!dropdown.contains(event.target)) {
                    menu.classList.remove("open");
                    button.classList.remove("open");
                }
            });
        }
    });
    // Modal
    const modal = document.getElementById("payment-modal");
    const openButtons = document.querySelectorAll(".pricing__btn");
    const closeModalButton = modal.querySelector(".modal__close");
    const modalOverlay = modal;
    // Open modal
    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.classList.add("open");
        });
    });
    // Close modal
    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("open");
    });
    // Close modal when clicking outside the content
    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            modal.classList.remove("open");
        }
    });
});
