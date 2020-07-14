let lengthEl = document.getElementById(`passwordLength`);
let upperEl = document.getElementById(`upper`);
let lowerEl = document.getElementById(`lower`);
let numbersEl = document.getElementById(`numbers`);
let symbolsEl = document.getElementById(`symbols`);
let generateEl = document.getElementById(`generate`);
let textarea = document.querySelector(`#password`)

let lower = 'abcdefghijklmnopqrstuvwxyz';
let upper = lower.toUpperCase();
let numbers = "1234567890";
let special = "!@#$%^&*(){}][-_+=?/"
let segment = "";
let generatedPassword = "";

generateEl.addEventListener(`click`, () => {
    segment = "";
    generatedPassword = "";
    let hasLower = lowerEl.checked;
    let hasUpper = upperEl.checked; 
    let hasNumber = numbersEl.checked; 
    let hasSymbol = symbolsEl.checked;  
    hasLower ? segment+= lower : "";
    hasUpper ? segment+= upper : "";
    hasNumber ? segment+= numbers : "";
    hasSymbol ? segment+= special : "";
    lengthPass();
    textarea.placeholder=generatedPassword;
});

function lengthPass(){
    for (let i = 0; i < lengthEl.value; i++){
       generatedPassword += segment[Math.floor(Math.random()*segment.length)]
    }
}