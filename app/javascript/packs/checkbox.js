const listenTaskCheckbox = () => {
  const forms = document.querySelectorAll(".edit_item");
  forms.forEach((form) => {
    submitFormOnChecked(form);
  })
}

const submitFormOnChecked = (form) => {
  const checkbox = form.querySelector('input[type="checkbox"]')
  checkbox.addEventListener("change", (event) => {
    form.submit();
  });
};

listenTaskCheckbox();

