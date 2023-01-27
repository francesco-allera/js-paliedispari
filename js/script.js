// check if an input ia a single not-numeric word
function isAValidString(input) {
    if (typeof input !== 'string')
        return false;
    if (!isNaN(input))
        return false;
    if (input.length <= 2)
        return false;
    if (input.trim().includes(' '))
        return false;

    return true;
}

// check if an input is a valid number (min/max optional)
function isAValidNumber(num, min, max) {
    var numParsed = parseInt(num);

    if (isNaN(numParsed))
        return false;
    if (min && numParsed < min)
        return false;
    if (max && numParsed > max)
        return false;

    return true;
}

// given a string, check if every letters are specular
function isPalindrome(str) {
    var palindrome = true;

    if (!isAValidString(str)) {
        palindrome = false;

    } else {
        var strLow = str.toLowerCase();

        for (var i = 0; i < str.length && palindrome; i++) {
            if (strLow[i] !== strLow[strLow.length -1 -i])
                palindrome = false;
        }
    }

    return palindrome;
}

// checks if an input coincides with 'pari' or 'dispari'
function isPariDispari(input) {
    var inputLow = input.toLowerCase();

    if (inputLow !== 'pari' && inputLow !== 'dispari')
        return false;

    return true;
}

// capitalize the first letter, lower the others
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// get random integer between min and max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// cycle a prompt if the input isn't correct
function askingInput(question, error, condition, ...args) {
    do {
        var input = prompt(question).trim();

        if (!condition(input, ...args))
            alert(error);
    } while (!condition(input, ...args));

    return input;
}


/* variables */
var output = document.querySelectorAll('#app h2');
var minNum = 1, maxNum = 5, result = 'Hai perso!';
var userWord, userChoice, userNum, pcNum, sum;


// asking for a word
userWord = askingInput('Inserisci una parola per vedere se è palindroma', 'Input sbagliato, riprova', isAValidString);

// check if 'userWord' is palindrome
output[0].innerHTML = '"<em>' + capitalize(userWord) + '</em>"' + (isPalindrome(userWord) ? '' : ' non') + ' è palindroma.';


// ask for insert 'pari'/'dispari'
userChoice = askingInput('Scegli tra \'pari\' o \'dispari\'', 'Riprova inserendo solo o \'pari\' o \'dispari\'', isPariDispari).toLowerCase();

// ask for insert a number between 'minNum' and 'maxNum'
userNum = parseInt(askingInput('Ora scegli un numero tra ' + minNum + ' e ' + maxNum, 'Inserisci un numero valido', isAValidNumber, minNum, maxNum));

// set a random number for the pc + sum the numbers
pcNum = randomNumber(minNum, maxNum);
sum = userNum + pcNum;

// checking if the user won
if ((userChoice === 'pari' && sum % 2 === 0) || (userChoice === 'dispari' && sum % 2 !== 0)) {
    result = 'Hai vinto!'
}

// print the result
output[1].innerHTML = 'Hai scelto ' + userChoice + ' e ' + userNum + '<br>La nostra AI ha invece scelto ' + pcNum + '<br><u>' + result + '</u>';