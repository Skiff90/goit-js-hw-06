const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');

counterValue = 0;

buttonDecrement.addEventListener('click', () => {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
});

buttonIncrement.addEventListener('click', () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
});

// help create random color for counter text
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//add getRandomHexColor to buttonIncrement and buttonDecrement
buttonDecrement.addEventListener(
  'click',
  () => {
    document.querySelector('#value').style.color = getRandomHexColor();
  },
  false
);

buttonIncrement.addEventListener(
  'click',
  () => {
    document.querySelector('#value').style.color = getRandomHexColor();
  },
  false
);

//help create random background color whis random gradient with simple random animation for body when click on buttonIncrement and buttonDecrement

buttonDecrement.addEventListener(
  'click',
  () => {
    document.querySelector(
      'body'
    ).style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
  },
  false
);

buttonIncrement.addEventListener(
  'click',
  () => {
    document.querySelector(
      'body'
    ).style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
  },
  false
);

// add random font size for counter text when click on buttonIncrement and buttonDecrement

buttonDecrement.addEventListener(
  'click',
  () => {
    document.querySelector('#value').style.fontSize = `${Math.floor(
      Math.random() * 100
    )}px`;
  },
  false
);

buttonIncrement.addEventListener('click', () => {
  document.querySelector('#value').style.fontSize = `${Math.floor(
    Math.random() * 100
  )}px`;
});

// add rabdom border size color radius for counter text when click on buttonIncrement and buttonDecrement

// buttonDecrement.addEventListener(
//   'click',
//   () => {
//     document.querySelector('#b1').style.border = `${Math.floor(
//       Math.random() * 100
//     )}px solid ${getRandomHexColor()}`;
//   },
//   false
// );

// buttonIncrement.addEventListener(
//   'click',
//   () => {
//     document.querySelector('#b2').style.border = `${Math.floor(
//       Math.random() * 100
//     )}px solid ${getRandomHexColor()}`;
//   },
//   false
// );
