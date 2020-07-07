// Select generate button
const generateBtn = document.querySelector('#generate');

//Select password parameters elements
const lengthBox = document.querySelector('#length');
const lowerBox = document.querySelector('#lowercase');
const upperBox = document.querySelector('#uppercase');
const numbersBox = document.querySelector('#numbers');
const specialCharBox = document.querySelector('#special-char');

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector('#password');
    passwordText.value = password;
}
// Logic to randomly generate password
function generatePassword() {

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

    // Validate that a length of appropriate size was input
    if (passChoices.length) {
        if (pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {
            alert('Please enter a password length between 8 and 128 characters.');
            return '';
        } else {
            // Choose random characters to add to password
            for (let i = 0; i < pswdLength; i++) {
                let randChar = Math.floor(Math.random() * passChoices.length);
                passBuilder.push(passChoices[randChar]);
            }

            // Create string of final password and return it
            let password = passBuilder.join('');
            return password;
        }
    } else {
        // Make sure at least one parameter is checked
        alert('Please check at least one character type.');
        return '';
    }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);