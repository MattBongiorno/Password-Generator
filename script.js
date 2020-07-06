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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);