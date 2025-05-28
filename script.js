//! Select the elements

const btn1El = document.querySelector('.btn1');
const btn2El = document.querySelector('.btn2');
const titleEl = document.querySelector('.title');
const resetEl = document.querySelector('.reset');
const bodyEl = document.querySelector('body');

//! Add event listeners to the buttons
btn1El.addEventListener('click', () => {
  bodyEl.style.backgroundColor = 'blue'; 
});

//using anonymous function
btn2El.addEventListener('click', function() {
  titleEl.style.fontSize = '50px';
});

resetEl.addEventListener('click', () => {
  bodyEl.style.backgroundColor = "";
  titleEl.style.fontSize = "";
});