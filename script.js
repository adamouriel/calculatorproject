let firstNumber
let secondNumber
let step = 0
let operation
let result = 0
let numArray = []
let numArray2 = []
const keys = {
    107: '+',
    189: '-',
    56: '*',
    191: '/',
    187: '=',
    8: 'delete',
};

const powerLight = document.querySelector('.power-light');

function turnOn() {
  powerLight.classList.add('on');
}
document.addEventListener('keydown', handleInput);
document.addEventListener('keydown', handleKeys);

function handleInput(e) {
    if (!isNaN(e.key)) {
        getNum(e.key)
    }
}

function handleKeys(e) {
    let key = keys[e.keyCode];
    if (key === 'delete') {
      let currentVal = display.value;
      currentVal = currentVal.slice(0, -1);  
      display.value = currentVal;
    } else if (key === '=') {
      calcEq();
    } else {
        console.log(numArray)
        console.log(numArray2)
    //   getOp(key);  
      operate(key);
    }
  }

function operate(oper) {
    if (oper === '+') {
        result = firstNumber + secondNumber
        display.value = result
    } else if (oper === '-') {
        // console.log(oper)
        // console.log(step)
        // // console.log(operation)
        // // step = 2
        // operation=oper
        result = firstNumber - secondNumber
        display.value = result
    } else if (oper === '*') {
        result = firstNumber * secondNumber
        display.value = result
    } else if (oper === '/') {
        result = firstNumber / secondNumber
        display.value = result
    }
}

const display = document.getElementById('display')

function getNum(num) {
    if (step === 0 || step === 1) {
        numArray.push(num)
        step = 1
        firstNumber = Number(numArray.join(''))
        display.value = firstNumber
    } else if (step === 2) {
        numArray2.push(num)
        secondNumber = Number(numArray2.join(''))
        display.value = secondNumber
        // console.log(numArray2, secondNumber)
    }
}

function getOp(op) {
    if (op === 'del') {
        let currentVal = display.value
        currentVal = currentVal.slice(0, -1)
        display.value = currentVal
    } else {
        console.log(operation)
        step = 2
        operation = op
        
    }
}

function allClear() {
    display.value = ''
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0
    numArray = []
    numArray2 = []
}

function calcEq() {
    // if (operation === 'del') {
    //     let currentVal = display.value
    //     currentVal = currentVal.slice(0, -1)
    //     display.value = currentVal
    // } else
    if (operation === '+') {
        result = firstNumber + secondNumber
        display.value = result
    } else if (operation === '-') {
        result = firstNumber - secondNumber
        display.value = result
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
        display.value = result;
    } else if (operation === "/") {
        result = firstNumber / secondNumber;
        display.value = result;
    }
}