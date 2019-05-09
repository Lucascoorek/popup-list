const button = document.querySelector(".button");
const buttonClose = document.querySelector(".modal_wrapper .button");
const modalWrapper = document.querySelector(".modal_wrapper");

button.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
});

buttonClose.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});
