const root = document.documentElement;
const screen = document.querySelector("#screen");

let themeNumber = 1;
let operatorUsed = false;
let currentOperator = "";
let currentNumber = 0;
let memoryNumber = 0;
let screenText = "";

const setTheme = () => {
  root.style.setProperty("--switch-position", themeNumber);

  if (themeNumber === 1) {
    root.style.setProperty("--main-background", "hsl(222, 26%, 31%)");
    root.style.setProperty("--keypad-background", "hsl(223, 31%, 20%");
    root.style.setProperty("--toggle-background", "hsl(223, 31%, 20%)");
    root.style.setProperty("--screen-background", "hsl(224, 36%, 15%)");
    root.style.setProperty("--key-background", "hsl(30, 25%, 89%)");
    root.style.setProperty("--key-shadow", "hsl(28, 16%, 65%)");
    root.style.setProperty("--del-key-background", "hsl(225, 21%, 49%)");
    root.style.setProperty("--del-key-shadow", "hsl(224, 28%, 35%)");
    root.style.setProperty("--toggle-circle-color", "hsl(6, 63%, 50%)");
    root.style.setProperty("--equals-key-background", "hsl(6, 63%, 50%)");
    root.style.setProperty("--equals-key-shadow", "hsl(6, 70%, 34%)");
    root.style.setProperty("--main-text", "hsl(0, 0%, 100%)");
    root.style.setProperty("--key-num-text", "hsl(221, 14%, 31%)");
    root.style.setProperty("--reset-del-text", "hsl(0, 0%, 100%)");
    root.style.setProperty("--equals-text", "hsl(0, 0%, 100%)");
  } else if (themeNumber === 2) {
    root.style.setProperty("--main-background", "hsl(0, 0%, 90%)");
    root.style.setProperty("--keypad-background", "hsl(0, 5%, 81%)");
    root.style.setProperty("--toggle-background", "hsl(0, 5%, 81%)");
    root.style.setProperty("--screen-background", "hsl(0, 0%, 93%)");
    root.style.setProperty("--key-background", "hsl(45, 7%, 89%)");
    root.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)");
    root.style.setProperty("--del-key-background", "hsl(185, 42%, 37%)");
    root.style.setProperty("--del-key-shadow", "hsl(185, 58%, 25%)");
    root.style.setProperty("--toggle-circle-color", "hsl(25, 98%, 40%)");
    root.style.setProperty("--equals-key-background", "hsl(25, 98%, 40%)");
    root.style.setProperty("--equals-key-shadow", "hsl(25, 99%, 27%)");
    root.style.setProperty("--main-text", "hsl(60, 10%, 19%)");
    root.style.setProperty("--key-num-text", "hsl(60, 10%, 19%)");
    root.style.setProperty("--reset-del-text", "hsl(0, 0%, 100%)");
    root.style.setProperty("--equals-text", "hsl(0, 0%, 100%)");
  } else if (themeNumber === 3) {
    root.style.setProperty("--main-background", "hsl(268, 75%, 9%)");
    root.style.setProperty("--keypad-background", "hsl(268, 71%, 12%)");
    root.style.setProperty("--toggle-background", "hsl(268, 71%, 12%)");
    root.style.setProperty("--screen-background", "hsl(268, 71%, 12%)");
    root.style.setProperty("--key-background", "hsl(268, 47%, 21%)");
    root.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)");
    root.style.setProperty("--del-key-background", "hsl(281, 89%, 26%)");
    root.style.setProperty("--del-key-shadow", "hsl(285, 91%, 52%)");
    root.style.setProperty("--toggle-circle-color", "hsl(176, 100%, 44%)");
    root.style.setProperty("--equals-key-background", "hsl(176, 100%, 44%)");
    root.style.setProperty("--equals-key-shadow", "hsl(177, 92%, 70%)");
    root.style.setProperty("--main-text", "hsl(52, 100%, 62%)");
    root.style.setProperty("--key-num-text", "hsl(52, 100%, 62%)");
    root.style.setProperty("--reset-del-text", "hsl(0, 0%, 100%)");
    root.style.setProperty("--equals-text", "hsl(198, 20%, 13%)");
  }
};

const add = (n1, n2) => n1 + n2;
const minus = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;

document.addEventListener("click", (e) => {
  console.log(e);
  const t = e.target;
  if (
    t.getAttribute("id") === "switch" ||
    t.getAttribute("id") === "toggle-switch"
  ) {
    themeNumber === 3 ? (themeNumber = 1) : ++themeNumber;
    setTheme();
  } else if (t.classList.contains("key-num")) {
    screenText += t.innerText;
    screen.innerText = screenText;
  } else if (t.classList.contains("key-operator")) {
    if (screenText.length === 0) return;
    operatorUsed = true;
    currentOperator = t.innerText;
    // You're here!
  } else if (t.getAttribute("id") === "key-del") {
    screenText = screenText.slice(0, -1);
    screen.innerText = screenText;
  }
});

document.addEventListener("keydown", (e) => {
  console.log(e);
});
