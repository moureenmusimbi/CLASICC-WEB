//let firstname = "Mary"
/*let secondname = "wambui"
console.log(firstname + "" + secondname)


// calculator
let fnumber = 100;
let ssnumber = 10;
let addition = fnumber + ssnumber;
let multiply = fnumber * ssnumber;
let divide = fnumber / ssnumber;

console.log("addition", addition);
console.log("multiply", multiply);
console.log("divide", divide);*/




let a; //declaring a varible
a = 5; // ASSIGNING A VALUE TO THE VARIABLE

let age = 20; //declared and instantiate/assigned a value to the variable.

var b = 34;

const d = 6;

console.log("a", a);
console.log("b", b)

console.log("d", d)

// Data Types of Variables 

// 1. Numbers 
//     -integers eg. 5
//     - float 5.67989898
//     - double 56.65
// 2. Strings (words)
//     - eg. "names", "welcome"


// Decalaring variables
// 1. var 
// 2. let 
// 3. const


// name is the varible
// name is the variable of type string
let firstName = "Jame"


// myAge is a varibel of type integer
let myAge = 30;

// KEY WORDS

console.log("Hello World");

console.log(firstName);

console.log(myAge);

console.log("My name is", firstName, "I am ", myAge, "yeas old")

let lastName = "Wanjiku"
console.log(lastName);


console.log("You full name is ", firstName + " " + lastName)


// Develop a program that ask th user to enter their names and check of they are 
// valid for an ID card

let fname;
let sname;
let userAge;

fname = prompt("Please enter you first name");
sname = prompt("Please enter you last name");
userAge = prompt("Please enter you age");

console.log("You full naem is ", fname + " " + sname)
console.log("You are ", userAge, "years old");

if (userAge > 18) {
    console.log("Congratulations !! You are qualified to apply for an ID")
} else {
    console.log("Sorry, You are not qualified for an ID application");
}