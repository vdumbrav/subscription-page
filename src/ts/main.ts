document.addEventListener("DOMContentLoaded", () => {
  // Pricing Cards
  const pricingCards =
    document.querySelectorAll<HTMLDivElement>(".pricing__card");

  if (pricingCards.length > 1) {
    pricingCards[1].classList.add("pricing__card--selected");
  }

  pricingCards.forEach((card, index) => {
    card.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      console.log(`Card ${index + 1} clicked.`);

      if (!target.closest(".custom-dropdown")) {
        pricingCards.forEach((c) =>
          c.classList.remove("pricing__card--selected")
        );
        card.classList.add("pricing__card--selected");
        console.log(`Card ${index + 1} selected.`);
      }
    });

    const dropdown = card.querySelector(".custom-dropdown");

    if (dropdown) {
      const button = dropdown.querySelector<HTMLButtonElement>(
        ".custom-dropdown__button"
      );
      const menu = dropdown.querySelector<HTMLUListElement>(
        ".custom-dropdown__menu"
      );
      const items = dropdown.querySelectorAll<HTMLLIElement>(
        ".custom-dropdown__item"
      );

      if (button && menu) {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          const isOpen = menu.classList.contains("open");
          menu.classList.toggle("open", !isOpen);
          button.classList.toggle("open", !isOpen);
        });

        items.forEach((item) => {
          item.addEventListener("click", (event) => {
            event.stopPropagation();
            items.forEach((i) => i.classList.remove("selected"));
            item.classList.add("selected");
            button.innerHTML = `${item.textContent} <span class="custom-dropdown__icon"></span>`;
            menu.classList.remove("open");
            button.classList.remove("open");
          });
        });

        document.addEventListener("click", (event) => {
          if (!dropdown.contains(event.target as Node)) {
            menu.classList.remove("open");
            button.classList.remove("open");
          }
        });
      }
    }
  });

  // Modal Logic
  const modal = document.getElementById("payment-modal");
  if (modal) {
    const openButtons = document.querySelectorAll(".pricing__btn");
    const closeModalButton =
      modal.querySelector<HTMLButtonElement>(".modal__close");

    openButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.add("open");
      });
    });

    if (closeModalButton) {
      closeModalButton.addEventListener("click", () => {
        modal.classList.remove("open");
      });
    }

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });
  }

  // Form Toggle Buttons
  const toggleButtons = document.querySelectorAll(".form__toggle");
  toggleButtons.forEach((button) => {
    const input = button.previousElementSibling as HTMLInputElement | null;

    if (input) {
      button.addEventListener("click", () => {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        button.classList.toggle("visible");
      });
    }
  });

  const radioInputs =
    document.querySelectorAll<HTMLInputElement>(".radio__input");

  // Function to handle selected state
  const handleRadioSelection = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const radios = document.querySelectorAll<HTMLLabelElement>(".radio");

    radios.forEach((radio) => {
      radio.classList.remove("radio--selected");
    });

    const parent = target.closest(".radio");
    if (parent) {
      parent.classList.add("radio--selected");
    }
  };

  // Add event listeners to all radio inputs
  radioInputs.forEach((input) => {
    input.addEventListener("change", handleRadioSelection);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let swiperInstance: any = null;

  const initSwiper = () => {
    const isMobile = window.innerWidth <= 992;

    const swiperContainer = document.querySelector(".swiper");

    if (swiperContainer) {
      if (isMobile && !swiperInstance) {
        swiperInstance = new (window as any).Swiper(".swiper", {
          slidesPerView: 1,
          spaceBetween: 16,
          initialSlide: 1, // start from the second slide
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      } else if (!isMobile && swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }

    console.log(`Swiper initialized: ${isMobile}`);
  };

  // Initialize Swiper on page load and resize
  window.addEventListener("load", initSwiper);
  window.addEventListener("resize", initSwiper);

  // ---------------------------- //
  // Window frame
  const pricingOptions =
    document.querySelectorAll<HTMLDivElement>(".pricing-option");
  const pricingCards =
    document.querySelectorAll<HTMLDivElement>(".pricing__card");

  if (pricingOptions.length > 0 && pricingCards.length > 0) {
    pricingOptions[0].classList.add("pricing-option--selected");
    pricingCards[0].classList.add("pricing__card--visible");
  }

  pricingOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
      pricingOptions.forEach((o) =>
        o.classList.remove("pricing-option--selected")
      );
      pricingCards.forEach((card) =>
        card.classList.remove("pricing__card--visible")
      );

      option.classList.add("pricing-option--selected");
      pricingCards[index].classList.add("pricing__card--visible");
    });
  });
});
