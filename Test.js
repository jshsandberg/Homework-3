function randLetter() {
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter = letters[Math.floor(Math.random() * letters.length)];
return letter
}

let generatePass = `placeholder`

let gen = document.querySelector(`#generate`);



gen.addEventListener(`click`, () => {
    document.getElementsByName(`password`)[0].generatePass=`You Idiot!`;
}) 