const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const direction = this.dataset.action;
    const inp = document.querySelector("#value");
    const currentValue = +inp.textContent;
    let newValue;

    if (direction === "increment") {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1;
    }
    inp.textContent = newValue;
  });
});
