const root = document.documentElement;
const numberKeys = document.querySelectorAll('[data-num]');
const operatorKeys = document.querySelectorAll('[data-operator]');
const delKey = document.querySelector('[data-del]');
const resetKey = document.querySelector('[data-reset]');
const equalsKey = document.querySelector('[data-equals]');

let themeNumber = 1;
let equalsPressed = false;
let currentOperator = '';
let currentNumber = 0;
let memoryNumber = 0;
let screenText = '';

const setTheme = () => {
  root.style.setProperty('--switch-position', themeNumber);

  if (themeNumber === 1) {
    root.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
    root.style.setProperty('--keypad-background', 'hsl(223, 31%, 20%');
    root.style.setProperty('--toggle-background', 'hsl(223, 31%, 20%)');
    root.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
    root.style.setProperty('--key-background', 'hsl(30, 25%, 89%)');
    root.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
    root.style.setProperty('--del-key-background', 'hsl(225, 21%, 49%)');
    root.style.setProperty('--del-key-shadow', 'hsl(224, 28%, 35%)');
    root.style.setProperty('--toggle-circle-color', 'hsl(6, 63%, 50%)');
    root.style.setProperty('--equals-key-background', 'hsl(6, 63%, 50%)');
    root.style.setProperty('--equals-key-shadow', 'hsl(6, 70%, 34%)');
    root.style.setProperty('--main-text', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--key-num-text', 'hsl(221, 14%, 31%)');
    root.style.setProperty('--reset-del-text', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--equals-text', 'hsl(0, 0%, 100%)');
  } else if (themeNumber === 2) {
    root.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
    root.style.setProperty('--keypad-background', 'hsl(0, 5%, 81%)');
    root.style.setProperty('--toggle-background', 'hsl(0, 5%, 81%)');
    root.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
    root.style.setProperty('--key-background', 'hsl(45, 7%, 89%)');
    root.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
    root.style.setProperty('--del-key-background', 'hsl(185, 42%, 37%)');
    root.style.setProperty('--del-key-shadow', 'hsl(185, 58%, 25%)');
    root.style.setProperty('--toggle-circle-color', 'hsl(25, 98%, 40%)');
    root.style.setProperty('--equals-key-background', 'hsl(25, 98%, 40%)');
    root.style.setProperty('--equals-key-shadow', 'hsl(25, 99%, 27%)');
    root.style.setProperty('--main-text', 'hsl(60, 10%, 19%)');
    root.style.setProperty('--key-num-text', 'hsl(60, 10%, 19%)');
    root.style.setProperty('--reset-del-text', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--equals-text', 'hsl(0, 0%, 100%)');
  } else if (themeNumber === 3) {
    root.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
    root.style.setProperty('--keypad-background', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--toggle-background', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
    root.style.setProperty('--key-background', 'hsl(268, 47%, 21%)');
    root.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
    root.style.setProperty('--del-key-background', 'hsl(281, 89%, 26%)');
    root.style.setProperty('--del-key-shadow', 'hsl(285, 91%, 52%)');
    root.style.setProperty('--toggle-circle-color', 'hsl(176, 100%, 44%)');
    root.style.setProperty('--equals-key-background', 'hsl(176, 100%, 44%)');
    root.style.setProperty('--equals-key-shadow', 'hsl(177, 92%, 70%)');
    root.style.setProperty('--main-text', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--key-num-text', 'hsl(52, 100%, 62%)');
    root.style.setProperty('--reset-del-text', 'hsl(0, 0%, 100%)');
    root.style.setProperty('--equals-text', 'hsl(198, 20%, 13%)');
  }
};

const calc = (() => {
  const screen = document.querySelector('[data-screen]');

  const updateDisplay = input => {
    const charLimit = 13;
    if (input.length > charLimit) input = input.slice(0, charLimit);
    screen.innerText = input;
  };

  const calculate = (num1, num2, operator) => {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === 'x') return num1 * num2;
    if (operator === '/') return num1 / num2;
  };

  const reset = () => {
    operatorUsed = false;
    equalsPressed = false;
    currentOperator = '';
    currentNumber = 0;
    memoryNumber = 0;
    screenText = '';
    updateDisplay('');
  };

  return { updateDisplay, calculate, reset };
})();

numberKeys.forEach(key => {
  key.addEventListener('click', e => {
    if (e.target.innerText === '.' && screenText.includes('.')) return;
    screenText += String(e.target.innerText);
    calc.updateDisplay(screenText);
    currentNumber = parseFloat(screenText);
  });
});

operatorKeys.forEach(key => {
  key.addEventListener('click', e => {
    if (screenText.length === 0) return;
    if (equalsPressed) {
      operatorUsed = true;
      currentOperator = e.target.innerText;
    }
    if (currentOperator === '') {
      operatorUsed = true;
      currentOperator = e.target.innerText;
      memoryNumber = currentNumber;
      currentNumber = 0;
      screenText = '';
    } else {
      memoryNumber = calc.calculate(
        memoryNumber,
        currentNumber,
        currentOperator
      );
      calc.updateDisplay(memoryNumber);
      currentOperator = e.target.innerText;
      currentNumber = 0;
      screenText = '';
    }
  });
});

equalsKey.addEventListener('click', e => {
  if (!operatorUsed) return;
  memoryNumber = calc.calculate(memoryNumber, currentNumber, currentOperator);
  screenText = String(memoryNumber);
  calc.updateDisplay(screenText);
  currentOperator = '';
  currentNumber = 0;
  operatorUsed = false;
  equalsPressed = true;
});

delKey.addEventListener('click', e => {
  if (equalsPressed) {
    calc.reset();
    return;
  }
  screenText = screenText.slice(0, -1);
  currentNumber = parseFloat(screenText);
  calc.updateDisplay(screenText);
});

resetKey.addEventListener('click', () => {
  calc.reset();
});

document.addEventListener('click', e => {
  const t = e.target;
  if (
    t.getAttribute('id') === 'switch' ||
    t.getAttribute('id') === 'toggle-switch'
  ) {
    themeNumber === 3 ? (themeNumber = 1) : ++themeNumber;
    setTheme();
  }
});
