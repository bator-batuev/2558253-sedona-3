const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".hotel-search__btn");

openModalBtn.addEventListener("click", () => {
  modal.showModal();
})

modal.addEventListener("click", (evt) => {
  if (evt.target === modal) {
    modal.closest();
  }
})
