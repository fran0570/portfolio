// 3d parallax fx

const skewItemContainer = document.querySelector("#wrap");
const skewItem = document.querySelector("#item-wrap").getBoundingClientRect();
const imageCenterX = skewItem.left + skewItem.width / 2;
const imageCenterY = skewItem.top + skewItem.height / 2;

skewItemContainer.addEventListener("mousemove", function (e) {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const xCalculation = (clientX - imageCenterX) * 0.05;
  const yCalculation = (clientY - imageCenterY) * 0.05;

  skewItemContainer.style.setProperty("--x-translate", `${xCalculation}`);
  skewItemContainer.style.setProperty("--y-translate", `${yCalculation}`);
  console.log(xCalculation, yCalculation);
});
