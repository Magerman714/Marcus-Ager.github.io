/**
 * VARIABLES: 
 * 
 * 0: Variables are named containers for data in Javascript. To declare variables...
 * 
 * 1: Declaration and Assignment
 *      a. Declaration: Declaration occurs when we declare a variable with a declarative keyword.
 *      b. Assignment: Assignment occurs when we use the assignment operator to "assign" a value
 * 
 * 2: Var, Let, Const
 *      a: Var
 *      b: Let
 *      C: Const 
 * 
 * 3: Hoisting
 *      a: A process where the interpreter loads variable and function declarations into memory during the compile phase before executing the code (it essentially “prepares” them before running the code) 
 *      b: only declarations are hosted, not assignments
 *      c: variables are hoisted to the top of the code block they exist in (global for var, for const and let it's the scope they're bound to) - can't access these until they're declared in the code block they're bound to
 */

// 1a // Declaration
var age; // declares a variable called age
console.log(age); // => undefined

// 1b // Assignment
age = 35; // assigns the value 35 to the variable "age"
console.log(age); // => this now outputs 35, as this is the current value of "age"

// 2a // Var
//declaring a variable using the "var" keyword will set it to the global scope - this means that under normal circumstances it can be accessed by any code within the program
if(true){
    var firstName;   //this declares the variable "firstName", which is declared in the global scope; it is accessible even outside of the if statement's code block
}
firstName = "Marcus"; //this sets the value of "firstName" to the string "Marcus"

// 2b // Let
//declaring a variable using the "let" keyword will lock it to the scope of whereever it was declared - generally this means it can only be accessed by code within the curly braces that enclose it, if any. This is called "block scoped"
//variables declared with "let" cannot be redeclared, but can be reassigned.

if(true){
    let str;            //declares the variable "str" within the scope of this if statement
    str = "it is true";  //sets "str" to equal string "it is true"
    console.log(str);   // => will output "it is true"
}
console.log(str);   // => will output "undefined", as it cannot access the "str" variable since it's not within the if statement that variable was declared in

// 2c // Const
//declaring a varaible with the "const" keyword is like doing so with "let" but with a few more constraints - variables declared with "const" cannot be declared without an initial value, and cannot be reassigned. Otherwise, they operate like variables declared with "let"

/* const problem; */  // this code would cause an error, as it is declaring a variable without an initial value using "const"
const num = 0;
num = 1;   // this would also cause an error, as it is attempting to reassign a variable declared with "const"

// 3 // Hoisting
// variables are hoisted to the top of their respective code blocks BEFORE any code is run, however only their declarations are hoisted, not their values; there will be errors if you try to access a variable before it is declared in the code


console.log(ex1); // => using a variable declared with "let" before it is declared in the code block will result in a reference error
console.log(ex2); // => using a variable declared with "const" before it is declared in the code block will result in a syntax error; the code will not run
console.log(glob); // => this will output "undefined", as the variable has been declared but not yet assigned

var glob = "global";
let ex1 = 1;
const ex2 = 2;

