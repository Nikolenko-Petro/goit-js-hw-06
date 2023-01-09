const mainUl = document.querySelector("#categories");

const allItem = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${allItem} `);

const firstLi = mainUl.firstElementChild;
const firstLiTitle = firstLi.querySelector("h2");
console.log(`Category: ${firstLiTitle.textContent}`);

console.log(`Elements: ${firstLi.querySelectorAll("li").length}`);

const secondLi = mainUl.children[1];
const secondLiTitle = secondLi.querySelector("h2");
console.log(`Category: ${secondLiTitle.textContent}`);

console.log(`Elements: ${secondLi.querySelectorAll("li").length}`);

const lastLi = mainUl.lastElementChild;
const lastLiTitle = lastLi.querySelector("h2");
console.log(`Category: ${lastLiTitle.textContent}`);

console.log(`Elements: ${lastLi.querySelectorAll("li").length}`);
console.log();
