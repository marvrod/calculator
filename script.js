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
    pressed = false;
    if (!operator){
    display.textContent = `${display.textContent + numberRead.innerText}`;

    firstValue = parseInt(display.textContent);
    }
    else {
    if (display.textContent == "+" || display.textContent == "-" || display.textContent == "*" 
    || display.textContent == "/" || reset == true){    
        display.textContent = '';
        reset = false;
    }
    display.textContent = `${display.textContent + numberRead.innerText}`;
    secondValue = parseInt(display.textContent);
    }
    console.log(secondValue);
})
}
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
    display.textContent = `+`;
    operator = add;
});

// - button
const minusButton = document.querySelector("#MINUS");
minusButton.addEventListener('click', ()=> {
    display.textContent = "-";
    operator = substract;
});

// * button
const multiplyButton =  document.querySelector("#MULTIPLY")
multiplyButton.addEventListener('click', ()=> {
    display.textContent = "*";
    operator = multiply;
});

// / button
const divideButton =  document.querySelector("#DIVIDE")
divideButton.addEventListener('click', ()=> {
    display.textContent = "/";
    operator = divide;
});

// = button
let pressed = false;

const equalButton = document.querySelector("#EQUAL");
equalButton.addEventListener('click', ()=> {
    if (!pressed) {
    let result = operate(firstValue, secondValue, operator);
    display.textContent = result;
    pressed = true;
    firstValue = result;
    secondValue = 0;

    reset = true;
    }
})

