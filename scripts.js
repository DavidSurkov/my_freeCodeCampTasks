const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;

let myVar = 87;
// Only change code below this line
myVar++;

let myVar = 11;
// Only change code below this line
myVar--;

const ourDecimal = 5.7;
// Only change code below this line
var myDecimal = 3.8;

const product = 2.0 * 2.5;

const quotient = 4.4 / 2.0; // Change this line

// Остаток!!
const remainder = 11 % 3;

let a = 3;
let b = 17;
let c = 12;
// Only change code below this line
a += 12;
b += 9;
c += 7;

let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
// Change this line
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

// Quoting Strings with Single Quotes
const myStr = '<a href="http://www.example.com" target="_blank"> Link </a>'; 

// Escape Sequences in Strings
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 
/*Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

// Concatenating Strings with Plus Operator
const myStr = "This is the start. " + "This is the end."; 

// Concatenating Strings with the Plus Equals Operator
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Constructing Strings with Variables
const myName = "Dave ";
const myStr = "My name is " + myName + "and I am well!"; 

// Appending Variables to Strings
const someAdjective = "comlicated";
let myStr = "Learning to code is ";
myStr += someAdjective
console.log(myStr)

// Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//Understand String Immutability
// Setup
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

//Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = "this " + myAdverb + " " +  myNoun + " " +  myVerb + " " +  myAdjective; // Change this line
// Only change code above this line

//Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["dodo", 2];

//Nest one Array within Another Array
// Only change code below this line
const myArray = [[2, 3, 4], ["bull", "big"]];

//Access Array Data with Indexes
const myArray = [50, 60, 70];
var myData = myArray[0]
