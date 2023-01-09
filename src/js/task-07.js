const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.oninput = function () {
  textEl.style.fontSize = this.value + "px";
};
