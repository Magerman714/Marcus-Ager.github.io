/**
 * FUNCTIONS
 * Functions are blocks of code that can be executed repeatedly by calling the function.
 * Most functions take in "arguments", which are pieces of data specified when the function is called
 * Most functions use a "return statement" to return a value; this will essentially set what that function call will be equal to in your program
 */

// 1 // Two phases of functions: declare and call
//a function must be declared before it can be called

function hello(){   //a function is declared with the "function" keyword followed by an optional function name, then "()" (empty in this case), and finally a code block enclosed by "{}"
    console.log("Hello world!");
}

hello();    //this is a function call: it contains the function name followed by "()" (in this case the parentheses are empty)
//calling a function executes the code written in that function's code block; the above function call would output "Hello world!" to the console.

// 2 // Parameters vs Arguments
//the function above did not include any "parameters", which are essentially variables that are entered into the "()" when the function is declared

function sum(x, y){ //in this function, "x" and "y" are the function's parameters. They act as stand-ins for whatever data is passed to the function when it is called
    return x + y;   //this function will return the sum of x and y. 
    //Obviously, the characters "x" and "y" cannot be added together, they merely represent what data will be entered into those positions when the funciton is called
}

sum(5, 10); //this is the function call for the "sum" function. You'll notice that the "()" are not empty this time! This is because the function was designed to accept pieces of data that it will use or manipulate in some way
//note that the "5" and "10" above are called "arguments", NOT "parameters". Parameters refer only to the variables that exist in the "()" when the function is declared - "arguments" are the values actually passed to these variables when the function is called.

// 3 // Named functions
//as described above, functions are usually declared with names using the following syntax:
// function keyword, followed by a name, followed by parentheses (), followed by curly braces {} enclosing the code block
//note that the name for functions is optional - functions without names are called "anonymous functions". They are usually passed directly into functions which take other functions as parameters, as it is difficult to call a function without a name otherwise

function hello2(){   //as described, a function is declared with the "function" keyword followed by an optional function name, then "()" (empty in this case), and finally a code block enclosed by "{}"
    console.log("Hello world!");
}

// 4 // Function Assignments
//while the above method of declaring functions is the most commonly used, it is also possible to declare functions as variables. Here is an example of the "hello" function above declared in this way:

var hello3 = function(){     //assigning a function to a variable like this requires a declaration keyword, var, let, or const, just like a normal variable declaration. That's followed by the function name, then "=", then the function keyword, then "()", and finally the code block enclosed in "{}"
    console.log("Hello world!");
}


// 5 // Inputs and Returns
//as shown above, some functions have parameters, variables that act as stand ins for data intended to be inputted when the function is called, and some do not.
//similarly, some functions return a value, essentially causing the function call itself to act as whatever the return value for that function is in your code, while others can accomplish their tasks without a return statement.
//the "hello" function above is an example of a function without any inputs or return values, while the "sum" function above is an example of a function with both inputs (parameters) as well as a return value.

console.log(sum(5, 10)); // => this would log "15", the result of 5 + 10, which is what the function returns, to the console; in effect, the function call "sum(5, 10)" is equal to 15.
console.log(hello());    // => while calling the function "hello" will cause "Hello world!" to be outputted to the console, that is not this function's return statement.
//thus, the console.log statement above would itself output undefined, as "hello()" has no actual value, having no return statement.

let product;
function multiply(x, y){
    product = x * y;
}
//in the function above, you'll notice there is no return statement. Instead, this function sets an outside variable, product, equal to x * y.
console.log(multiply(5, 10));   // => because there is no return statement, this outputs "undefined" just like the "hello" function did when we tried to print it to the console
console.log(product);           // => since the "multiply" function was called on the line above this one, this line of code would output "50" to the console, as that is what running the "multiply" function with the arguments "5" and "10" would set it to, since 5 * 10 = 50

function multiplyReturn(x, y){
    return x * y;
}

console.log(multiplyReturn(5, 10)); // => this line of code WOULD log "50" to the console, since the multiplyReturn function DOES return a value: the product of x and y.


// 6 // Scope
//Scope refers to what parts of your program code within a code block (such as code within a function's code block) can "see"; i.e., what parts of the program it has access to
//typically, a function's scope is its parent scope (usually comprised of its own code block), and the global scope, but the reverse is not true:
//code in the global scope cannot access code within a function's scope. This is most relevant to variable and function declarations within a function's code block

let highest = 5;
function scopeReference(x){
    let medium = x;
  return highest + medium; //even though "highest" is not within the code block of this function, it is in the global scope, so it CAN be accessed by this function
}
console.log(scopeReference(10)); //this would output 5 + 10 = 15, as it takes the globally declared "highest" variable and summs it with the function scoped "medium" variable
console.log(medium);    //this would give an error stating that "medium is not defined", because the variable "medium" cannot be accessed in the global scope where the console.log statement is being executed
//if the above console.log statement were in the code block of the "nested" function, however, it would properly "see" the value of medium and, thus, would indeed output it.


// 7 // Closures
//A closure is a function that retains access to an outer (enclosing) function’s variables even after the outer function has returned.
//Closure always and exclusively happens in the context of a function that returns another function (or one that returns something that stores another function)
//Variables that are declared within these functions can also modify and store their values using closure
//in effect, closure means that you can "save" elements (parameter values) by declaring a variable as equal to the function call with whatever parameters you want defined. 
//For example:

function multiplyBy(x){
    return function(y){
        return x * y;
    }
}
let multiplyByFive = multiplyBy(5); //this will effectively store the value "5" as "x" in the above declared function as it pertains to the variable "multiplyByFive"
console.log(multiplyByFive(10));    //running this code effectively takes multiplyByFive, a variable that is storing the "multiplyBy" function with a "5" as the argument passed to the "x" parameter, and uses it to return the function within itself.
//this effectively allows the function that multiplyBy returns to be accessed from the global scope, since the function is essentially being called to provide it; the argument "10" passed in to the multiplyByFive function is actually being used as the parameter "y" for the inner function, since x is already = 5
//note, too, that the result of running multiplyByFive(10) is the same as running multiplyBy(5)(10); the same logic is used to pass the arguments to the proper places in the nested function. Saving the function call with a value is what creates closure though, so that case would not be an example of closure.

//here's another example:

function logFavoriteFood(){
    const favoriteFood = 'Pizza'; //the variable "favoriteFood" is declared within the function scope and, thus, should not be accessible by the global scope.
    return function(){
        console.log(favoriteFood);
    }
}

var favFood = logFavoriteFood(); //here we declare a variable and assign it the value of the function call for "logFavoriteFood"; no parameters are needed for this, but because of the declaration the values of the variables within the function are effectively saved
favFood();  //since "favFood" is equal to the return value of "logFavoriteFood", it is actually equal to the function it returns, so it can be called like a function would - the "()" here refer to those of the return function, not the "logFavoriteFood" function
//even though the variable "favoriteFood" is in the function's scope and, thus, should not be accessible in the global scope, this function call will STILL output "Pizza" because the value of that variable was saved when "favFood" was made equal to logFavoriteFood() - this is due to closure
//in other words "favFood()" still "knows" what the value of favoriteFood is because it "forms a closure around that value"
