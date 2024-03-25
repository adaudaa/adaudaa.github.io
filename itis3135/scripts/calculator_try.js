window.onload = function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calc-btn');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonValue = button.textContent;
  
        if (button.classList.contains('number')) {
          display.value += buttonValue;
        } else if (button.classList.contains('operator')) {
          display.value += buttonValue;
        } else if (button.classList.contains('decimal')) {
          if (!display.value.includes('.')) {
            display.value += '.';
          }
        } else if (button.classList.contains('clear')) {
          display.value = '';
        } else if (button.classList.contains('equal')) {
          try {
            const result = eval(display.value);
            display.value = result;
          } catch (error) {
            display.value = 'Error';
          }
        }
      });
    });
  }