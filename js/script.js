/*
Crea una funzione per capire se la parola è palindroma.
L'utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto.
*/

/* ----- Functions ----- */

// Checks if input is a single word => boolean
function isString(input) {
   // typeof isn't string => false
   if (typeof input !== 'string') return false;
   // number => false
   if (!isNaN(input)) return false;
   // length shorter than 1 letter => false
   if (input.length <= 1) return false;
   // written with spaces => false
   if (input.includes(' ')) return false;

   return true;
}

// It reverse a string => string/false
function reversingString(string) {
   var reversedString = '';

   //If it's a string => reversed it
   if (isString(string)) {
      for (var i = string.length - 1; i >= 0; i--) {
         reversedString += string[i];
      }
      return reversedString;

   // If it's not a string => false
   } else {
      return false;
   }
}

// Validation for numbers => boolean
function validNumber(num, min, max) {
   // If it's not a numeric => false
   if (isNaN(num)) return false;
   // If there is a minimun, and it's not above => false
   if (min && num < min) return false;
   // If there is a maximum, and it's above => false
   if (max && num > max) return false;

   return true;
}

// => integer between min and max
function randomNumber(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}

// => string in lowercase, but the first letter is in uppercase
function firstLetterCapitalize(output) {
   return output[0].toUpperCase() + output.slice(1).toLowerCase();
}


/* ----- Variables ----- */

var palindrome = document.getElementById('palindrome');
var oddEven = document.getElementById('odd-even');
var minNum = 1;
var maxNum = 5;
var pcNumber = randomNumber(minNum, maxNum);
var result = 'Hai perso!';

var userWord, userChoice, userNumber, sum;


/* ----- Palindrome ----- */

// Asking for a single word
do {
   userWord = prompt('Inserisci una parola per vedere se è palindroma');

   // If it isn't a word => alert + redo loop
   if (!isString(userWord)) alert('Input sbagliato, riprova!');
} while (!isString(userWord));

// Checking if the prompt word is palindrome => printing the result in HTML
if (userWord === reversingString(userWord)) {
   palindrome.innerText = 'La parola ' + userWord + ' è palindroma';
} else {
   palindrome.innerText = 'La parola ' + userWord + ' non è palindroma';
}


/* ----- Odds and Even ----- */

// Asking between 'pari' or 'dispari'
do {
   userChoice = prompt('Scegli tra pari o dispari').toLowerCase();

   // If the input is uncorrected => alert + redo cycle
   if (userChoice !== 'pari' && userChoice !== 'dispari') alert('Parola sbagliata');
} while (userChoice !== 'pari' && userChoice !== 'dispari');

// Asking for a number between minNum and maxNum
do {
   userNumber = parseInt(prompt('Inserisci un numero tra ' + minNum + ' e ' + maxNum));

   // If the number is not valid => alert + redo cycle
   if (!validNumber(userNumber, minNum, maxNum)) alert('Inserisci un numero valido');
} while (!validNumber(userNumber, minNum, maxNum));

// Doing the sum before checking
sum = userNumber + pcNumber;

// Checking if the user has won
if ((sum % 2 === 0 && userChoice === 'pari') || (sum % 2 !== 0 && userChoice === 'dispari')) {
   result = 'Hai vinto!';
}

// Printing the inputs and result in HTML
oddEven.innerHTML = 'Hai scelto ' + userChoice + ' e tirato ' + userNumber + ',<br>il pc ha tirato ' + pcNumber + '.<br>' + result;