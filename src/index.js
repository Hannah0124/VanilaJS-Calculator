const displayNum = document.querySelector(".js-display");
const numsBtn = document.querySelectorAll(".num-btn");
const operatorsBtn = document.querySelectorAll(".operators-btn");
const clearBtn = document.querySelector(".js-clear");

let preNum = 0;
let currNum = null;
let operator = "=";
let isCalculating = false;

function handleClear(e) {
  e.preventDefault();
  preNum = 0;
  currNum = null;
  operator = "=";
  isCalculating = false;
  displayNum.value = 0;
}

function clickNums(e) {
  e.preventDefault();
  // console.log("displayNum.value? " + displayNum.value);

  // If true
  if (isCalculating) {
    isCalculating = false;
    displayNum.value = "";
  }

  displayNum.value = parseFloat(displayNum.value + "" + this.value);
}

function clickOperators(e) {
  e.preventDefault();

  if (operator === "=") {
    preNum = displayNum.value;
  } else {
    currNum = displayNum.value;
  }

  if (preNum !== null && currNum !== null) {
    console.log("1 preNum, currNum " + preNum, currNum);
    switch (operator) {
      case "+":
        preNum = parseFloat(preNum) + parseFloat(currNum);
        break;
      case "-":
        preNum = parseFloat(preNum) - parseFloat(currNum);
        break;
      case "*":
        preNum = parseFloat(preNum) * parseFloat(currNum);
        break;
      case "/":
        preNum = parseFloat(preNum) / parseFloat(currNum);
        break;
      case "=":
        preNum = currNum;
        break;
      default:
        break;
    }
  }
  console.log("2 preNum, currNum " + preNum, currNum);
  displayNum.value = preNum;
  currNum = null;
  isCalculating = true;
  operator = this.value;
  console.log("3 preNum, currNum " + preNum, currNum);
}

function init() {
  numsBtn.forEach(function(numBtn) {
    numBtn.addEventListener("click", clickNums);
  });

  operatorsBtn.forEach(function(operatorBtn) {
    operatorBtn.addEventListener("click", clickOperators);
  });

  clearBtn.addEventListener("click", handleClear);
}

init();
