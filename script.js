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

// Mechanism for listening through the numbers in the HTML and storing the display value

for (let i = 0; i < trueNumberList.length; i++) {

    const numberRead = document.querySelector(`#${extractID(numberList[i])}`);
   numberRead.addEventListener('click', function(){
    display.textContent = `${display.textContent + numberRead.innerText}`;
    displayValue = display.textContent;
    console.log(displayValue);
})
}

const erase = document.querySelector('#CE');
erase.addEventListener('click', ()=> {
    display.textContent = '';
})
// Variable for storing display value



