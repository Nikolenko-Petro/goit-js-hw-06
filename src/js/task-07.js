const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.oninput = function () {
  console.log(this.value);
  textEl.style.fontSize = this.value + "px";
};
