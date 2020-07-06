// Select generate button
const generateBtn = document.querySelector("#generate");

//Select password parameters elements
const lengthBox = document.querySelector('#length');
const lowerBox = document.querySelector('#lowercase');
const upperBox = document.querySelector('#uppercase');
const numbersBox = document.querySelector('#numbers');
const specialCharBox = document.querySelector('#special-char');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Password parameter element arrays
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers = '0123456789'.split('');
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('');

// Initialize password character array
let passChoices = [];

// Initialize array for generated password
let passBuilder = [];

// Obtain length from form
let pswdLength = parseInt(lengthBox.value);

// Add password characters to password array
if (lowerBox.checked) {
    passChoices = passChoices.concat(lowerLetters);
}
if (upperBox.checked) {
    passChoices = passChoices.concat(upperLetters);
}
if (numbersBox.checked) {
    passChoices = passChoices.concat(numbers);
}
if (specialCharBox.checked) {
    passChoices = passChoices.concat(specialChars);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);