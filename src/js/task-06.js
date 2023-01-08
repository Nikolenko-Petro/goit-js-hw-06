const input = document.querySelector("#validation-input");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.length === 6
    ? (input.style.borderColor = "#4caf50")
    : (input.style.borderColor = "#f44336");
}
