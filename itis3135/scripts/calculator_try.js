const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;

    if (button.classList.contains('number')) {
      appendNumber(buttonValue);
    } else if (button.classList.contains('operator')) {
      appendOperator(buttonValue);
    } else if (button.classList.contains('decimal')) {
      appendDecimal();
    } else if (button.classList.contains('clear')) {
      clearDisplay();
    } else if (button.classList.contains('equal')) {
      calculateResult();
    }
  });
});

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}