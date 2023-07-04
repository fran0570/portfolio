// 3d parallax fx

const skewItemContainer = document.querySelector(":root");
const skewItem = document.querySelector("#promo-item-wrap").getBoundingClientRect();
const imageCenterX = skewItem.left + skewItem.width / 2;
const imageCenterY = skewItem.top + skewItem.height / 2;

// for mouse move
skewItemContainer.addEventListener("mousemove", function (e) {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const xCalculation = (clientX - imageCenterX) * 0.01;
  const yCalculation = (clientY - imageCenterY) * 0.01;

  skewItemContainer.style.setProperty("--x-translate", `${xCalculation}`);
  skewItemContainer.style.setProperty("--y-translate", `${yCalculation}`);
  console.log(xCalculation, yCalculation);
});



const skewItemContainer2 = document.querySelector(":root");
const skewItem2 = document.querySelector("#item-poster").getBoundingClientRect();
const imageCenterX2 = skewItem2.left + skewItem2.width / 2;
const imageCenterY2 = skewItem2.top + skewItem2.height / 2;

// for mouse move
skewItemContainer2.addEventListener("mousemove", function (e) {
  const clientX2 = e.clientX;
  const clientY2 = e.clientY;
  const xCalculation2 = (clientX2 - imageCenterX2) * 0.01;
  const yCalculation2 = (clientY2 - imageCenterY2) * 0.01;

  skewItemContainer2.style.setProperty("--x-translate", `${xCalculation2}`);
  skewItemContainer2.style.setProperty("--y-translate", `${yCalculation2}`);
  console.log(xCalculation2, yCalculation2);
});

// for scrolling or touche
// skewItemContainer.addEventListener("ontouchmove", function (e) {
//   const clientX = e.clientX;
//   const clientY = e.clientY;
//   const xCalculation = (clientX - imageCenterX) * 0.01;
//   const yCalculation = (clientY - imageCenterY) * 0.01;

//   skewItemContainer.style.setProperty("--x-translate", `${xCalculation}`);
//   skewItemContainer.style.setProperty("--y-translate", `${yCalculation}`);
//   console.log(xCalculation, yCalculation);
// });