/**
 * OPERATORS
 * these are essentially things we can do to data, either altering that data, assigning data, or applying tests to it and outputting the result
 * 
 */


// 1 // Assignment operators
//these are operators that assign values to their left operand based on the value of the right operand

var num = 15; // "=" is the simplest assignment operator; it makes the variable on the left equal to the value on the right

num += 10; // for numerical data, any basic mathmatical operation can be paired with "=" to make the value on the left equal to its current value with the operation performed on the value to the right. In this case, num now = 25 (15 + 10)

num &&= 5; //this is a logical assignment operator - essentially it will assign the value to the right (5) to the value on the left (num) if and only if the value to the left is "truthy". In this case num = a positive number, so it would assign "5" to num

num ||= 20; //this is essentially the inverse of &&=; it will assign the value to the right if and only if the value to the left is falsy. In this case, num is a positive value, which is not falsy, so no assignment is done; num remains = 5

// 2 // Arithmatic operators
//these are operators that perform some mathmatical arithmatic operation on numerical values.

var arith = (50 + 2 - 12) / (2 * 10); // the standard arithmatic operators +, -, *, and / all fall into this category, and are used just like the mathmatical operations normally would be, including use of parentheses to control order of operations; this outputs 2

var remain = 50 % 2;    //the remainder operator "%" will output the remainder of dividing the number on the left by the number on the right; in this case it would generate "0" as 50 / 2 has no remainder

remain++;   //the increment operation will add one to whatever value it is being performed on. In this case, "remain" was equal to 0, so now it is equal to 0 + 1 = 1. Note that the decrement operator -- acts the same way, but subtracts 1 rather than adding

var toNeg = -remain;    //the unary negation operator - will return the negation of its operand; in this case toNeg is equal to -1, which is the negative of remain (which was = 1)

var expo = 2 ** 3;      //the exponent operator returns the value to the left taken to the power to the value to the right; this would therefore return 2 to the third power (2^3), which = 2 * 2 * 2 = 8

// 3 // Comparison operators
//these compare data types and output Boolean values based on the result of the comparison - they essentially test for certain traits or relations for these data

var comp = 3 > 4; // this tests whether the value on the left is greater than the one on the right; this would output false as three is not greater than four. Note that the operator "<" is the reverse, testing if the value on the left is less than the one on the right
var gOrEq = 5 >= 5; // note that you can also test if a value is greater than OR equal to (or less than or equal to) another - this would output "true" since while 5 is not >5, 5 IS equal to 5
var equaliT = "this" === "this"; // the operator "===" tests if the data on the left is "strictly equal" to the data on the right. In this case, both data are identical in every way, so this would return true
var notStrictEq = 1 == "1"; //this tests whether the values of the data to the left and right of the operator are equal, but does not test other things such as data type. In this case, both values are 1, so this would return true even though one is a string
var numStrict = 1 === "1";  //unlike the above example, this returns false because although both data are equal to 1, the data type of the first is numerical while the data type of the second is a string, therefore they are NOT strictly equal
var testNo = 1 != "1";  //this tests whether the values to the right and left of the operator are NOT equal (and is not a strict comparison). This would actually output false, as 1 == "1", however if it were 1 !== "1" instead then it would be 
//testing STRICT equality and, thus, would return true since 1 === "1" is false!

// 4 // Logical operators
//these essentially allow for multiple statements of truth or falsehood to be tested for and evaluated at once under different rules based on the operator, or for a Boolean value to be flipped

if(true && true){   //the "&&" ("and") operator will test if both the statement to the left and the statement to the right of it are true; if they are it returns true, but if even one is false it will return false
    console.log("true");    //"true" will therefore be logged to the console
}

if(true || false){  //the "||" ("or") operator will test if either the statement to the left or the statement to the right of it are true; if either are it returns true, even if one is false - both must be false for it to return false
    console.log("true"); //"true" will therefore be logged to the console
}

var trooth = true;
var notTrooth = !trooth;    //the "!" ("logical not") operator will flip the boolean statement of whatever it is to the left of. In this case, notTrooth will equal false, as it essentially is equal to "not" the value of trooth (so "not true")


// 5 // Unary operators (!, typeOf, -)
//these are operators that affect only one operand. The "!" and "-" operators described above are both examples of a unary operator, as they only affect one operand

var num = 1;
var whatIsType = typeof num; //the typeof operator will return the data type of the operand to its right. In this case, it would return "number", as num = 1, which is a number
//there are some pitfalls to note for the typeof operator. Most notably, while it will output "object" when used on an object, it will also output "object" when used on an array (which is a type of object), or anything with the "null" data type

var obj = {
    keyGood: "good",
    keyBad: "bad!"
}
delete obj.keyBad; //this will delete the key-value pair with key "keyBad" from obj, removing it from the object entirely
//note that while delete can technically be used on individual elements of arrays as well, it generally should not be as it will leave the array with a "blank" element - the length will not be affected


// 6 // Ternary operator (a ? b : c)
//a Ternary operator evaluates a condition and executes a block of code based on that condition; it operates similarly to an if-else statement

let grade = 90;

let passingG = (grade >= 70) ? "you passed!" : "you failed =("; //this would run the test in the parentheses, then output whatever is to the left of the ":" if that test is true, and whatever is to the right of ":" if false. 
//In this case, it sets passingG = "you passed!"
