const containerEl = document.querySelector(".container");
const showBtnEl = document.querySelector(".btn");
const popupContainerEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");

showBtnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  containerEl.classList.remove("active");
  popupContainerEl.classList.add("active");
});
