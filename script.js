const faqItems = document.querySelectorAll(".faq-item");

const syncFaqHeights = () => {
  faqItems.forEach((item) => {
    const answer = item.querySelector(".faq-answer");

    if (item.classList.contains("is-open")) {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    } else {
      answer.style.maxHeight = "0px";
    }
  });
};

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((currentItem) => {
      currentItem.classList.remove("is-open");
      currentItem.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }

    syncFaqHeights();
  });
});

window.addEventListener("load", syncFaqHeights);
window.addEventListener("resize", syncFaqHeights);
