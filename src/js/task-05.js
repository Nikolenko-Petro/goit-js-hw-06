const input = document.querySelector("#name-input");
const nameText = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value === ""
    ? (nameText.textContent = "Anonymous")
    : (nameText.textContent = event.currentTarget.value);
}
