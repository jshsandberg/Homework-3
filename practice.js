// Generator Function

let lengthEl = document.getElementById(`passwordLength`);
let upperEl = document.getElementById(`upper`);
let lowerEl = document.getElementById(`lower`);
let numbersEl = document.getElementById(`numbers`);
let symbolsEl = document.getElementById(`symbols`);
let generateEl = document.getElementById(`generate`);


console.log(lengthEl)


let randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

generateEl.addEventListener(`click`, () => {
    let lengthPassword = parseInt(lengthEl.value);
    let hasLower = lowerEl.checked;
    let hasUpper = upperEl.checked; 
    let hasNumber = numbersEl.checked; 
    let hasSymbol = symbolsEl.checked;  

    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
});
    
generateEl.addEventListener(`click`, () => {
  a = getRandomLower();
  b = getRandomUpper();
  c = getRandomNumber();
  d = getRandomSymbol();  
  console.log(a, b, c, d);
}) 


 

function getRandomLower(a) {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}
    

console.log(getRandomLower());


function getRandomUpper(b) {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
}


//console.log(getRandomUpper());


function getRandomNumber(c) {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);
}

function getRandomSymbol(d) {
    symbols = '!@#$%^&*(){}[]=<>/,.' 
    return symbols[Math.floor(Math.random() * symbols.length)];
}

