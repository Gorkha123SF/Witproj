const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    currentInput += button.getAttribute('data-value');
    display.value = currentInput;
  });
});

equals.addEventListener('click', () => {
  try {
    display.value = eval(currentInput);
    currentInput = display.value;
  } catch {
    display.value = 'Error';
    currentInput = '';
  }
});

clear.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});
