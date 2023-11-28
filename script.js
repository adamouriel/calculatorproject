let firstNumber
let secondNumber
let step = 0
let operation
let result = 0
let numArray = []
let numArray2 = []
const keys = {
    '+': 107,
    '-': 109,
    '*': 106,
    '/': 111,
    '=': 13,
    'delete': 8,
};

const powerLight = document.querySelector('.power-light');

document.addEventListener('click', turnOn);
document.addEventListener('keydown', turnOn);

function turnOn() {
  powerLight.classList.add('on');
}

const display = document.getElementById('display')

document.addEventListener('keydown', handleInput);
document.addEventListener('keydown', handleKeys);

function handleInput(e) {
    if (!isNaN(e.key)) {
        getNum(e.key)
    }
}

function handleKeys(e) {
    let key = keys[e.keyCode];
    if (key == 'delete') {
        let currentVal = display.value
        currentVal = currentVal.slice(0, -1)
        display.value = currentVal
    } else if (key == '=') {
        calcEq();
    } else {
        operate(key);
    }
}

function operate(oper) {
    if (oper == '+') {
        result = firstNumber + secondNumber
        display.value = result
    } else if (oper == '-') {
        result = firstNumber - secondNumber
        display.value = result
    } else if (oper == '*') {
        result = firstNumber * secondNumber
        display.value = result
    } else if (oper == '/') {
        result = firstNumber / secondNumber
        display.value = result
    }
}

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
    }
}

function getOp(op) {
    if (op === 'del') {
        let currentVal = display.value
        currentVal = currentVal.slice(0, -1)
        display.value = currentVal
    } else {
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
    if (operation === 'del') {
        let currentVal = display.value
        currentVal = currentVal.slice(0, -1)
        display.value = currentVal
    } else if (operation === '+') {
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