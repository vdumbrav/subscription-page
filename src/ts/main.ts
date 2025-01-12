document.addEventListener("DOMContentLoaded", () => {
  const pricingCards =
    document.querySelectorAll<HTMLDivElement>(".pricing__card");

  if (pricingCards[1]) {
    pricingCards[1].classList.add("pricing__card--selected");
  }

  pricingCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      pricingCards.forEach((c) =>
        c.classList.remove("pricing__card--selected")
      );

      card.classList.add("pricing__card--selected");

    //   setTimeout(() => {
    //     alert(`Subscription ${index + 1} selected!`);
    //   }, 300);
    });
  });
});
