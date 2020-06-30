// Generator Function

let lengthEl = document.getElementById(`passwordLength`);
let upperEl = document.getElementById(`upper`);
let lowerEl = document.getElementById(`lower`);
let numbersEl = document.getElementById(`numbers`);
let symbolsEl = document.getElementById(`symbols`);
let generateEl = document.getElementById(`generate`);

//Have no idea how to implement the length of the password into the program I have built. Was thinking of making the button run the function multiple times until it hit the target length; however, could not figure it out with the syntax but I think my psuedocode was correct
//console.log(lengthEl)
let lower = 'abcdefghijklmnopqrstuvwxyz';
let upper = lower.toUpperCase();
let numbers = "1234567890";
let special = "!@#$%^&*(){}][-_+=?/"
//trying to figure out how to add to the array instead of replacing the randomly chosen numbers
let segment = "";
let generatedPassword = "";

//Was trying to creat an object that would make running the function smoother but could not figure this out
let randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

fun1()
//This was going to allow me to check to see if boxes were checked to be true with the event on line 38
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
    console.log(generatedPassword)
});

//I am getting the correct array of numbers; however, I do not know how to put it on the website without using console.log

function lengthPass(){
    for (let i = 0; i < lengthEl.value; i++){
       generatedPassword += segment[Math.floor(Math.random()*segment.length)]
    }
}

//was trying to create a function so when I would run line 38, I could just put the function in instead of putting the whole thing in, could not figure it out with the syntax, kept messing up with the parentheses and curly brackets
//I feel like if I could figure how to implement this function into the event on line 38, it would allow me to create multiple arrays much easier
function getPassword() {
    segment.push(getRandomLower(),getRandomUpper(), getRandomNumber(),getRandomSymbol())
} 
 
//creating the functions to get the numbers, symbols, and letters were pretty easy. I tried doing an array but remebered bryan brought up the charcode so checked that out and made this step much easier
function getRandomLower(a) {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);
}
    

//console.log(getRandomLower());


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

function fun1(){
    console.log("YAY WORKS!")
}