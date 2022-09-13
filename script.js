function add(x, y){
    return x + y;
}

function substract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x, y, func){
    return func(x, y);
}

// Const for display
const display = document.querySelector("#display");

// Mechanism for getting number values from the HTML
var ancestor = document.getElementById("numbers");
var descendents = ancestor.getElementsByTagName("*");
var numberList = Array.from(descendents);

function extractText(element){
    return element.innerText;
}

function extractID(element){
    return element.id;
}
var trueNumberList = numberList.map(extractText);

let displayValue;
let firstValue;
let secondValue;
let reset = true;

// Mechanism for listening through the numbers in the HTML and storing the display value.

for (let i = 0; i < trueNumberList.length; i++) {

    const numberRead = document.querySelector(`#${extractID(numberList[i])}`);
    numberRead.addEventListener('click', function(){
    if (pressed){
        display.textContent = `${numberRead.innerText}`;
        pressed = false;
        firstValue = parseFloat(display.textContent);
        secondValue = 0;
    }
    else {
    if (!operator){
    display.textContent = `${display.textContent + numberRead.innerText}`;

    firstValue = parseFloat(display.textContent);
    }
    else {
    if (operatorPressed){
        display.textContent = '';
        reset = false;
    }
    display.textContent = `${display.textContent + numberRead.innerText}`;
    secondValue = parseFloat(display.textContent);
    operatorPressed = false;
    }
    console.log(secondValue);
    pressed = false;
    }
})
}

let operatorPressed = false;
// CE button
const erase = document.querySelector('#CE');
erase.addEventListener('click', ()=> {
    pressed = false;
    display.textContent = '';
    firstValue = 0;
    secondValue = 0;
    operator = 0;
})

let operator;

// + button
const plusButton = document.querySelector('#PLUS');
plusButton.addEventListener('click', ()=> {
    if (display.textContent){
    if (operator) {
        display.textContent = `${Number(operate(firstValue, secondValue, operator).toFixed(3))}`
        firstValue = parseFloat(display.textContent);
    }
    operatorPressed = true;
    operator = add;
    }
    pressed = false;
});

// - button
const minusButton = document.querySelector("#MINUS");
minusButton.addEventListener('click', ()=> {
    if (display.textContent){
    if (operator) {
        display.textContent = `${Number(operate(firstValue, secondValue, operator).toFixed(3))}`
        firstValue = parseFloat(display.textContent);
    }
    operatorPressed = true;
    operator = substract;
    }
    pressed = false;
});

// * button
const multiplyButton =  document.querySelector("#MULTIPLY")
multiplyButton.addEventListener('click', ()=> {
    if (display.textContent){
    if (operator) {
        display.textContent = `${Number(operate(firstValue, secondValue, operator).toFixed(3))}`
        firstValue = parseFloat(display.textContent);
    }
    operatorPressed = true;
    operator = multiply;
}
pressed = false;
});

// / button
const divideButton =  document.querySelector("#DIVIDE")
divideButton.addEventListener('click', ()=> {
    if (display.textContent){
    if (operator) {
        display.textContent = `${Number(operate(firstValue, secondValue, operator).toFixed(3))}`
        firstValue = parseFloat(display.textContent);
    }                                                                                         
    operatorPressed = true;
    operator = divide;
    }
    pressed = false;
});

// = button
let pressed = false;

const equalButton = document.querySelector("#EQUAL");
equalButton.addEventListener('click', ()=> {
    if (!pressed) {
    let result = Number(operate(firstValue, secondValue, operator).toFixed(3));
    if (!isFinite(result)) {
        display.textContent = "lol, lmao even"
        pressed = true;
    }
    else {display.textContent = result;
    pressed = true;
    firstValue = result;
    secondValue = 0;
    }
    reset = true;
    }
    operator = 0;
})

// 0 button
const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener('click', ()=> {
    pressed = false;
    if (!operator){
    display.textContent = `${display.textContent + zeroButton.innerText}`;

    firstValue = parseFloat(display.textContent);
    }
    else {
    if (operatorPressed){
        display.textContent = '';
        reset = false;
    }
    display.textContent = `${display.textContent + zeroButton.innerText}`;
    secondValue = parseFloat(display.textContent);
    operatorPressed = false;
    }
    console.log(secondValue);
})

// +/- button
const signButton = document.querySelector("#SIGN");
signButton.addEventListener("click", ()=> {
    if(display.textContent) {
        if(display.textContent[0] == "-"){
            display.textContent = display.textContent.replace("-", "");
            firstValue = parseFloat(display.textContent);
        }
        else if (display.textContent == 0){

        }
        else {
            display.textContent = "-".concat(display.textContent);
            firstValue = parseFloat(display.textContent);
        }
    }
})

// . button
const pointButton = document.querySelector("#POINT");
pointButton.addEventListener("click", ()=> {
    if (!display.textContent || pressed) {
        display.textContent = "0."
        firstValue = parseFloat(display.textContent);
        if (pressed){
            pressed = false;
        }
    }
    else if (!display.textContent.includes(".") && !operatorPressed) {
        display.textContent = display.textContent + ".";
    }
    else if (operatorPressed) {
    display.textContent = `0.`;
    secondValue = parseFloat(display.textContent);
    operatorPressed = false;
    }
})