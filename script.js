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
    if (!powerLight.classList.contains('on')) {
      powerLight.classList.add('on');
      display.classList.add('game-background-animation');
    } else {
      powerLight.classList.remove('on');
      display.classList.remove('game-background-animation');
    }
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
       let currentVal = display.value
        currentVal = currentVal.slice(0, -1)
        if (step===0 || step===1){
            numArray = numArray.slice(0, -1)
            firstNumber = numArray.join('')
        } else if (step===2){
            numArray2 = numArray2.slice(0, -1)
            secondNumber = numArray2.join('')
        }
        display.value = currentVal
    } else if (key === '=') {
      calcEq();
    } else {
      operate(key);
    }
  }

function operate(oper) {
    if (oper === '+' || oper === '-'|| oper === '*'|| oper === '/') {
        step = 2
        operation=oper
        display.value = ''
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
    }
}

function getOp(op) {
    if (op === 'del') {
        let currentVal = display.value
        currentVal = currentVal.slice(0, -1)
        if (step===0 || step===1){
            numArray = numArray.slice(0, -1)
            firstNumber = numArray.join('')
        } else if (step===2){
            numArray2 = numArray2.slice(0, -1)
            secondNumber = numArray2.join('')
        }
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
    if (operation === '+') {
        result = Number(firstNumber) + Number(secondNumber);
        display.value = result
    } else if (operation === '-') {
        result = Number(firstNumber) - Number(secondNumber);
        display.value = result
    } else if (operation === '*') {
        result = Number(firstNumber) * Number(secondNumber);
        display.value = result;
    } else if (operation === "/") {
        result = Number(firstNumber) / Number(secondNumber);
        display.value = result;
    }
}