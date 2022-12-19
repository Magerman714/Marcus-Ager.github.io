/**
 * STRING MANIPULATION
 * Strings are collections of characters enclosed in "". In some ways they can operate like arrays with each character corresponding to a different index based on their order in the string, however strings are still simple data types
 * Strings can therefore be manipulated, modified, and accessed in a variety of different ways
 */

// 1 // With Operators
//there are two operators that can be used on strings: + and +=

var str = "first string" + "second string"; //the + or "concatenate" operator will essentially combine two strings, attaching the second to the end of the first. 
//Note that it will not automatically place a space in between; the above code would therefore set str to = "first stringsecond string", which looks a little ugly!

str += " and a third string with a space this time!"; //this works similarly to how it does with numbers: it sets the string on its left equal to itself with the string on the right added on to the end.
//the above code would therefore set str = "first stringsecond string and a third string with a space this time!"

// 2 // With String Methods
//there are a variety of methods that can be called on strings with various results. These can include the following:

var testStr = "testing 1 2";
var testStr2 = "Here is some more text!";

testStr.charAt(0); //the .charAt() method will output the character at the designated index of the string, similarly to how referencing elements of an array works. This would output "t", which is the character at index 0 of the string (the first character) 

testStr.length; //the .length method will output the number of characters in the string in question; in this case it outputs 11. Note that this is the only method that does NOT require parentheses at the end!

var firstWord = testStr.slice(0, 7); //the .slice() method will make a copy of the values starting at the index for the first number passed into it (0 in this case) and ending just before the index of the second number passed to it (7). 
//so the above code would set firstWord = "testing", since that is the characters from 0 to just before 7; if it were testStr.slice(0, 6) then it would only output "testin", as it would not copy the character at its endpoint (index 6)
var firstWordBackwards = testStr.slice(-3, 11); //note that negative numbers used in .slice will essentially count backwards from the end of the string; "-3" in this context means that the slice will start 3 characters before the end of the string
//note that the method .substring() behaves similarly to .slice() with the following differences: it will treat negative values as 0, and if you omit the 2nd element it will take everything from the first element to the end of the string
//note that the method .substr() behaves similarly to .slice() except that the second parameter specifies the length of the extraction (i.e. the number of characters to extract) rather than an index

var replaced = testStr.replace("testing", "counting");  //the .replace() method searches for a pattern of characters specified in the first element and replaces the first one found with the second element; this would result in "counting 1 2"
//note that you can put an empty string "" as the second element to effectively delete the first instance of the first element in the string the method is acting on

var replaced2 = testStr.replaceAll(/ /g, "-"); //this will replace all of the characters contained within the "/ /" with the second argument passed. In this case, it would result in "testing-1-2"
//regarding syntax, the "//g" must be the first argument (including the "g"); any character or pattern placed between the "//" will be replaced. If you want to replace multiple characters, you can use brackets and place all characters you want to replace inside
//for instance: testStr.replaceAll(/[ 51]/g, "-") would replace all instances of "5", "1", and " " (space) with "-"; it would not look specifically for "51" for instance.

var upper = testStr.toUpperCase(); //this will change all letters within the given string to upper case. The method .toLowerCase() works the same way, but changes all letters to their lowercase counterparts

var conCatted = testStr.concat(" ", testStr2); //this method combines two strings, adding whatever is given as the first parameter in between them; this would output "testing 1 2 Here is some more text!"
//similar use to the "+" operator

"      spaced      ".trim(); //this method removes all spaces from the beginning and end of a string; it would result to "spaced"
//note that the .trimStart() method works the same, but only on the spaces at the beginning of the string. Similarly, the .trimEnd() method only removes spaces at the end

testStr.split(" "); //the .split() method will convert the string it's used on into an array, with each element separated by whatever pattern is inputted as the element for the method (in this case a space); this would output: ["testing", "1", "2"]
//note that if you do not pass an element, this method will still create an array, but the entire string will be said array's only element








