// 3d parallax fx

const skewItemContainer = document.querySelector(':root');
const skewItem = document.querySelector('#promo-item-wrap').getBoundingClientRect();
const imageCenterX = skewItem.left + skewItem.width / 2;
const imageCenterY = skewItem.top + skewItem.height / 2;

// for mouse move
skewItemContainer.addEventListener('mousemove', function (e) {
  const clientX = e.clientX;
  const clientY = e.clientY;
  const xCalculation = (clientX - imageCenterX) * 0.01;
  const yCalculation = (clientY - imageCenterY) * 0.01;

  skewItemContainer.style.setProperty('--x-translate', `${xCalculation}`);
  skewItemContainer.style.setProperty('--y-translate', `${yCalculation}`);
  // console.log(xCalculation, yCalculation);
  const yPos =  document.documentElement.scrollTop;
  console.log('here is my third attempt', yPos);
});

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