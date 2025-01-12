document.addEventListener("DOMContentLoaded", () => {
  const pricingCards =
    document.querySelectorAll<HTMLDivElement>(".pricing__card");

  if (pricingCards[1]) {
    pricingCards[1].classList.add("pricing__card--selected");
  }

  pricingCards.forEach((card, index) => {
    card.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Skip logic if clicking on <select>
      if (
        target.tagName === "SELECT" &&
        target.classList.contains("pricing__dropdown")
      ) {
        return; // Skip card selection logic
      }

      // Select the card
      pricingCards.forEach((c) =>
        c.classList.remove("pricing__card--selected")
      );

      card.classList.add("pricing__card--selected");

      console.log(`Card ${index + 1} selected.`);
    });
  });
});
