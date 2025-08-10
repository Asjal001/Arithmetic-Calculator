
  let calculation = '';
  function performCalculation(button) {
    calculation += button;
    document.querySelector('.screen').innerHTML = calculation;
  }
  function calculateResult() {
    try {
      if (/(\.\.|[+\-*/]{2,}|^[*/.]|[+\-*/.]$)/.test(calculation)) {
        document.querySelector('.screen').innerHTML = "ERROR";
        calculation = '';
        return;
      }
      calculation = eval(calculation).toString();
      document.querySelector('.screen').innerHTML = calculation;
    } catch {
      document.querySelector('.screen').innerHTML = "ERROR";
      calculation = '';
    }
  }
  function clearScreen() {
    calculation = '';
    document.querySelector('.screen').innerHTML = '';
  }

  document.addEventListener('keydown', (e) => {
    const validKeys = '0123456789.+-*/';
    if (validKeys.includes(e.key)) {
      performCalculation(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      calculateResult();
    } else if (e.key === 'Backspace') {
      calculation = calculation.slice(0, -1);
      document.querySelector('.screen').innerHTML = calculation;
    } else if (e.key === 'Escape') {
      clearScreen();
    }
  });