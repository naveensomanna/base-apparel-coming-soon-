input = document.getElementById("emialInput");
form = document.getElementById("emailform");
submitBtn = document.getElementById("btn");

const validation = (event) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(input.value) || input.value === "") {
    event.preventDefault();
    form.classList.add("content_invalid");
  } else {
    form.submit();
    form.classList.remove("content_invalid");
  }
};

submitBtn.addEventListener("click", (e) => validation(e));

form.addEventListener("keydown", (e) => {
  const enterKeyCode = 13;
  e.keyCode === enterKeyCode ? (e.preventDefault(), validation(e)) : false;
});
