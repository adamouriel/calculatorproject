let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let numArray2 = []

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
    step = 2
    operation = op
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

const calcEq = () => {
    if (operation === '+') {
        result = firstNumber + secondNumber;
        display.value = result;
    } else if (operation === '-'){
        result = firstNumber - secondNumber;
        display.value = result;
    } else if (operation === '*'){
        result = firstNumber * secondNumber;
        display.value = result;
    } else if (operation === "/"){
        result = firstNumber / secondNumber;
        display.value = result;
    }
}