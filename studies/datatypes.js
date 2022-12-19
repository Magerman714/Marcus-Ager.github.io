/**
 * DATA TYPES:
 * 0: Data is stored as a specific type in Javascript, which can affect how those data are stored and interacted with.
 * These are the various data types in Javascript:
 * 
 * 1. number
 * 2. string 
 * 3. Boolean
 * 4. Array
 * 5. Object
 * 6. Function
 * 7. undefined
 * 8. null
 * 9. NaN
 * 10. Infinity and -Infinity
 * 
 * 11. simple vs complex data types: 
 *      Objects (including arrays, which are a type of object) are complex data types, whereas all others are simple. One of the main differences is that complex data types store multiple values whereas simple ones store only one
 * 12. primitive values vs complex values; copy by value vs copy by reference: 
 *      The main difference of these values is in assignment.
 *      Primitive values are simple data types, and if a variable is assigned one that variable simply becomes equal to it
 *      Complex values are complex data types (objects/arrays), if a variable is assigned one then that variable will point to the same location that those values are stored at, rather than just copying all the values into a new object/array
 * 
 */



// 1 // Number
// these can be any numerical value
var x = 1; //whole numbers
var y = 1.5; //decimals
var z = -55; //negative numbers
var sum = 5 + 2; // => this would assign '7' to 'sum'

// 2 // string
// these are anything that is put within a pair of "". Typically they are letters/words, but they can be any character. Examples include:
var char1 = "A";
var char2 = "a full sentence";
var char3 = "12345"; // this is still considered a string even though it's made up entirely of numbers
var char4 = "$%&^#";

// 3 // Boolean
// this is explicitly the values "true" and "false"
var bool = true; //note that this is declared WITHOUT quotes; if it were with quotes it would be a string
var boolTest = 3 >= 5; //the result of logical operators such as this one is also a boolean value; this would assign "false" to "boolTest" as 3 is not >= 5

// 4 // array
//this contains a string of entries - you can think of it as essentially several different variables in a list
var arr = [1, 2, 3, 4, 5]; //this is an array of numbers 1 - 5. Note that each value in the array is separated by a comma (","). No comma is needed for the last value
var arrDiff = [true, "hello", 55]; //the values inside the array do not need to be the same data type
var arrOfArrs = [[1, 2,], [3], [4, 5, 6]]; //you can even have arrays contained within an array!

// 5 // Object
//this is similar to an array, however instead of each value being stored in an ordered list each value will have a "key", which is a specific code that identifies it
var obj = {     //object declarations look like this
    first: "1st",   //this is a key-value pair: the key is "first", the value it stores is "1st". The syntax is "<key>: <value>," (colon after key, comma after value if there are more key-value pairs in the object) Like the array, you separate these with a comma
    second: 2,
    wumbo: ["he wumbos", "she wumbos", "we wumbo"],  //keys can be any collection of characters, and values can be any value you could normally declare - you can have arrays or even other objects as values!
    last: 0     //no comma is needed for the final key value pair
}

// 6 // function
//these are bundled blocks of code that can be executed later by calling them;

function firstFunc(){   //this is how a function is declared: first the function keyword, then the name you are giving your function, then "()", and finally "{}" with the code you want to execute written within.
    console.log("Hello world!");    //this is the code this function will execute when it is called
}

firstFunc();    //this is a function call - you type only the function name and always include the parentheses; in this case, this would log "Hello world!" to the console

function funcWithParams(x, y){ //you can also declare functions with "parameters" within the "()". These are essentially variables you can use within the function
    let sum = x + y;
    return sum;     //a return statement is what the function will essentially be equal to upon completion. This function would take two parameters, "x" and "y", and output their sum.
}

funcWithParams(1, 2); // => this would be equal to 3, the sum of 1 and 2. Note that "1" and "2" in this case are "arguments" - that's the term for the data that is passed to the parameters of the function. 
//Essentially, they take the place of "x" and "y" in the function's code block. Note, too, that this line of code wouldn't obviously do anything, it just is equal to 3.
var funcResult = funcWithParams(1, 2); // => this would set "funcResult" equal to 3, the result of running "funcWithParams" with the arguments "1" and "2".

// 7 // undefined
//undefined is what will output for anything that does not have a value
var blah;
console.log(blah); // => this would log "undefined" to the console, as "blah" has not been assigned a value yet.

// 8 // null
// this data type expresses a lack of identification - it indicates that a variable doesn't point to anything. Basically what this means is that null is only ever assigned to a variable to indicate it has no value, whereas undefined is the 
//default value of any variable that has been declared, but not yet assigned a value; null is an intentional declaration whereas undefined is a default one
var noth = null; //this would generally be done to indicate to a program that "noth" was intentionally given no value (rather than simply not assigned a value yet)

// 9 // NaN
// "NaN" stands for "Not a Number". Like undefined, NaN is essentially a default value meant to indicate that certain issues have occurred. Those issues are:
// a - failed number conversion

var failNum = Math.abs("this is not a number!"); // => this would equal NaN, as it attempts to use a mathmatical method on a string

// b - math operation where the result is not a real number

var failOper = Math.sqrt(-1); // => this equals NaN as it is attempting an impossible mathematical operation - you cannot take the square root of a negative number

// c - indeterminate form

var infinityPlusOne = infinity + 1; // => this equals NaN since it is attempting to apply mathematical operations to infinity

// d - a method or expression whose operand is or gets coerced to NaN (note that this means that NaN is contagious!)

var mathWithNaN = 5 * "four"; // => this would equal NaN, as it is attempting to apply a mathematical operation to a string

var nanny = 0 < NaN; // => nanny is equal to false; if NaN is one of the operands in a relational comparison, the result is always false

var nannyTruth = NaN === NaN; //even this would result to false!

if(NaN){    //NaN is "falsy"; this if statement therefore wouldn't fire
    console.log("it works?");
}


// e - any other case where an invalid value is to be represented as a number

var date = new Date("not a date!"); // => this is equal to NaN as it does not follow the date formating, which should be numeric

// 10 // Infinity and -Infinity
//as one might expect, "Infinity" is equal to infinity (and "-Infinity" is equal to negative infinity). It does behave slightly differently than mathmatical infinity, however.

var toInfinity = 50 * Infinity; // => any positive value multiplied by positive infinity equals positive infinity (this would be equal to Infinity)

var negInfin = -10 * Infinity; // => any negative value multiplied by positive infinity (Infinity) equals negative infinity (-Infinity)

var dividedInfin = 20 / Infinity; // => any positive value divided by Infinity = positive 0

var dividedInfinNeg = -20 / Infinity; // => any negative value divided by Infinity = negative 0

var infiniZero = 0 * Infinity; // => zero * Infinity = NaN; this is also what NaN * Infinity would equal

var dividedInfini = Infinity / 12; // => Infinity divided by any positive non-Infinity value equals Infinity (if divided by a negative non-Infinity value it equals -Infinity instead)

var InfiniDivision = Infinity / -Infinity; // => Infinity divided by Infinity, regardless of if either or both are positive or negative, will always equal NaN

var InfiniGreater = Infinity > 93284739827492387; // => Infinity is considered greater than any number; this statement would return true



// 11 // simple vs complex data types
// complex data types are ones that hold multiple values, simple data types hold only one

var sim = "this is still only one value even though it iss many words"; // this string is a simple data type, as it is essentially stored as a single entry of data

var complX = ["this", "is", "complex", "since", "each", "word", "is", "stored", "separately"]; //this is an example of a complex data type because of how it is stored

var notSimple = ["this is only one value, but it is still an array and therefore complex"]; //just what the string says =)

var complX2 = {     //objects are also complex data types, as they are capable of storing multiple entries of data in their key-value pairs
    here: 1,
    there: "over the hill",
    everywhere: true
}

// 12a // Primitive vs Complex values
//similar to simple vs complex data types, primitive values are singular data entries whereas complex values can contain multiple data entries

var compliCate = {  //objects are examples of complex data types
    its: "complicated",
    but: "do not worry",
    arr: [5, 10, 15, 20] //arrays are too! Note that a complex data type can contain both simple and complex data types within
}

// 12b // Copy by Value vs Copy by Reference
//simple data types (primitive values) are Copy by Value - this means that if such a value/data type is assigned to a variable, that variable will become equal to a copy of that value

var simpleCopy = "here is some simple data"; // => this sets "simpleCopy" equal to the string "here is some simple data"; that is now what this variable points to

var objExample = {
    key1: 1,
    key2: 2,
    key3: 3
}

var complexCopy = objExample; // => in this case, "complexCopy" does not become a new object with all of the key-value pairs copied over from objExample. Instead, it now points to the same places that objExample is STORING that data

complexCopy.key1 = 10; // this will set the value of the pair with "key1" as its key to 10
console.log(objExample.key1); // => this will output 10, because even though it was complexCopy that had its "key1" key's value set to 10, it was actually simply pointing to the same location as objExample was for that piece of data, so BOTH are changed!

//the main takeaway to remember here is that setting a variable equal to a piece of complex data will NOT create an independent copy, it will only allow that variable to reference the same key-value pairs as the original it was copied from.

