// 3d parallax fx

// Element that we apply effect to
const skewItemContainer = document.querySelector(':root');

const skewItem = document.querySelector('#promo-item-wrap').getBoundingClientRect();
const imageCenterX = skewItem.left + skewItem.width / 2;
const imageCenterY = skewItem.top + skewItem.height / 2;

// On mouse move
// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
skewItemContainer.addEventListener('mousemove', function (e) {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const xCalculation = (clientX - imageCenterX) * 0.01;
  const yCalculation = (clientY - imageCenterY) * 0.01;

  // CSSStyleDeclaration: setProperty() method
  // setProperty(propertyName, value, priority)
  skewItemContainer.style.setProperty('--x-translate', `${xCalculation}`);
  skewItemContainer.style.setProperty('--y-translate', `${yCalculation}`);
  // console.log(xCalculation, yCalculation);
  const yPos =  document.documentElement.scrollTop;
  console.log('here is my third attempt', yPos);
});

window.addEventListener('scroll', function() {
  // console.log('user is scrolling');
  const yScrollPosition = this.window.scrolltop;
  console.log(yScrollPosition);
})

// window.addEventListener('scroll', function() {
//   let scrollPosition = window.pageYOffset;
//   if (scrollPosition >= 30) {
//     headerContainer.classList.add('lg:bg-green-lightest');
//   } else {
//     headerContainer.classList.remove('lg:bg-green-lightest');
//   }
// });

// window.addEventListener("click", () => {
//   let value = window.scrollTop;
//   console.log(value);
// });

document.getElementById('uView').addEventListener('click', printLocation);

// alway returns 0 because the data is recorder on page load only no update loop
function printLocation() {
  // const viewLocation = document.querySelector('.user-view').getBoundingClientRect();
  // console.log('here is the view location coordinate: ', viewLocation);
  // const yPos =  document.documentElement.scrollTop;
  // console.log('here is my third attempt', yPos);
}

if (window.scrollY > 400) {
  window.scroll(0, 0);
}
// document.documentElement.scrollTop || document.body.scrollTop