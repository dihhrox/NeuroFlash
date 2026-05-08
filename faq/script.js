const faqItems = Array.from(document.querySelectorAll(".faq-item"));

const getFaqParts = (item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) {
    return null;
  }

  return { button, answer };
};

const setItemOpenState = (item, isOpen) => {
  const parts = getFaqParts(item);

  if (!parts) {
    return;
  }

  item.classList.toggle("is-open", isOpen);
  parts.button.setAttribute("aria-expanded", String(isOpen));
  parts.answer.style.maxHeight = isOpen ? `${parts.answer.scrollHeight}px` : "0px";
};

const closeOtherItems = (activeItem) => {
  faqItems.forEach((item) => {
    if (item !== activeItem) {
      setItemOpenState(item, false);
    }
  });
};

const syncFaqHeights = () => {
  faqItems.forEach((item) => {
    setItemOpenState(item, item.classList.contains("is-open"));
  });
};

faqItems.forEach((item) => {
  const parts = getFaqParts(item);

  if (!parts) {
    return;
  }

  parts.button.addEventListener("click", () => {
    const shouldOpen = !item.classList.contains("is-open");

    closeOtherItems(item);
    setItemOpenState(item, shouldOpen);
  });
});

window.addEventListener("load", syncFaqHeights);
window.addEventListener("resize", syncFaqHeights);
