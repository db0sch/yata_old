const listenTaskCheckbox = () => {
  console.log("hello")
  const forms = document.querySelectorAll(".edit_item");
  forms.forEach((form) => {
    console.log(form)
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

