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

//Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData = myArray[2][1];

  /*Manipulate Arrays With push()
An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.*/
// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3]);

/*Manipulate Arrays With pop()
Another way to change the data in an array is with the .pop() function.
.pop() is used to pop a value off of the end of an array. We can store this popped off value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.*/
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

/*Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.*/
// Setup
const myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray = myArray.shift()

/*Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.
.unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
Example:*/
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

/*Shopping List
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.*/
const myList = [
  ["ur mom", 20],
  ["my mom", 10000000],
  ["ur dad", 1],
  ["coco", 45],
  ["cici", 455],
];

/* Write Reusable JavaScript with Functions
In JavaScript, we can divide up our code into reusable parts called functions.
Here's an example of a function: */
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()

/* Passing Values to Functions with Arguments
Parameters are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "passed") into a function when it is called are known as arguments.
Here is a function with two parameters, param1 and param2: */
function functionWithArgs(firstPar, secondPar) {
  console.log(firstPar + secondPar)
}
functionWithArgs(1, 2),
functionWithArgs(7, 9)

/* Return a Value from a Function with Return
We can pass values into a function with arguments. You can use a return statement to send a value back out of a function.
Example */
function timesFive(num) {
  return num * 5;
}
timesFive(5),
timesFive(2),
timesFive(0)

/* Global Scope and Functions
In JavaScript, scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const. */
// Declare the myGlobal variable below this line
let myGlobal = 10

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
/* Local Scope and Functions
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function. */
function myLocalScope() {
  // Only change code below this line
  let myVar = "pizza"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/* Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
In this example: */
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

/* Understanding Undefined Value returned from a Function
A function can include the return statement but it does not have to. In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
Example */
// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();

/* Assignment with a Returned Value
If you'll recall from our discussion of Storing Values with the Assignment Operator, everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable. */
// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7) ;

/* "Stand in Line"
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed. */
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  return arr.shift(testArr);
  // Only change code above this line
}
// Setup
const testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* Understanding Boolean Values
Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is on and false is off. These two states are mutually exclusive.
Note: Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked. */
function welcomeToBooleans() {
  return true; // Change this line
}

/* Use Conditional Logic with If Statements
if statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.
When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute. */
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
trueOrFalse(true);
trueOrFalse(false);

/* Comparison with the Equality Operator
There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left. */
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

/* Comparison with the Strict Equality Operator
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.
If the values being compared have different types, they are considered unequal, and the strict equality operator will return false. */
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

/* Practice comparing different values
In the last two challenges, we learned about the equality operator (==) and the strict equality operator (===). Let's do a quick review and practice using these operators some more.
If the values being compared are not of the same type, the equality operator will perform a type conversion, and then evaluate the values. However, the strict equality operator will compare both the data type and value as-is, without converting one type to the other.
Examples
3 == '3' returns true because JavaScript performs type conversion from string to number. 3 === '3' returns false because the types are different and type conversion is not performed. */
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

/* Comparison with the Inequality Operator
The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing. */
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

/* Comparison with the Strict Inequality Operator
The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. The strict inequality operator will not convert data types. */
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

/* Comparison with the Greater Than Operator
The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.
Like the equality operator, the greater than operator will convert data types of values while comparing. */
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

/* Comparison with the Greater Than Or Equal To Operator
The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
Like the equality operator, the greater than or equal to operator will convert data types while comparing. */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

/* Comparison with the Less Than Operator
The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing. */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

/* Comparison with the Less Than Or Equal To Operator
The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, the less than or equal to operator converts data types. */
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

/* Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.
The same effect could be achieved by nesting an if statement inside another if: */
function testLogicalAnd(num) {
  if (num > 5) {
    if (num < 10) {
      return "Yes";
    }
  }
  return "No";
}
// Same as
function testLogicalAnd(num) {
  if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";
}

/* Comparisons with the Logical Or Operator
The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

The logical or operator is composed of two pipe symbols: (||). This can typically be found between your Backspace and Enter keys.
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside. */
function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

/* Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed. */
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } 
  else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

/* Introducing Else If Statements
If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements. */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}
testElseIf(7);

/* Logical Order in If Else Statements
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first: */

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
// And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
// While these two functions look nearly identical if we pass a number to both we get different outputs.

foo(0)
bar(0)
// foo(0) will return the string Less than one, and bar(0) will return the string Less than two.

/* Chaining If Else Statements
if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements: */
function testSize(num) {
if (num < 5) {
  return "Tiny"
}
else if (num < 10) {
  return "Small"
}
else if (num < 15) {
  return "Medium"
}
else if (num < 20) {
  return "Large"
}
  else {
  return "Huge"
}
}

testSize(7);

/* Golf Code
In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience. */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  }
  else if (strokes <= par - 2) {
    return names[1]
  }
  else if (strokes == par - 1) {
    return names[2]
  }
  else if (strokes == par) {
    return names[3]
  }
  else if (strokes == par + 1) {
    return names[4]
  }
  else if (strokes == par + 2) {
    return names[5]
  }
  else {
    return names[6]
  }

}

golfScore(5, 4);

/* Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement: */
function caseInSwitch(val) {
  let answer = "";
switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}

caseInSwitch(1);

/* Adding a Default Option in Switch Statements
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case. */
function switchOfStuff(val) {
  let answer = "";
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}
  return answer;
}

switchOfStuff("a");

/* Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High */
function sequentialSizes(val) {
  let answer = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}
  return answer;
}

sequentialSizes(1);