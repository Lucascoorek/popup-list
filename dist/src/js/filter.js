const form = document.querySelector(".filter_form");
const list = document.querySelector(".filter_list");

const filter = term => {
  Array.from(list.children)
    .filter(li => !li.textContent.toLocaleLowerCase().includes(term))
    .forEach(li => li.classList.add("filter_item--hide"));
  Array.from(list.children)
    .filter(li => li.textContent.toLocaleLowerCase().includes(term))
    .forEach(li => li.classList.remove("filter_item--hide"));
};

form.addEventListener("submit", e => {
  e.preventDefault();
  filter(form.text.value.toLowerCase().trim());
  form.reset();
});
