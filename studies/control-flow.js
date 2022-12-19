/**
 * CONTROL FLOW
 * 0: there are many ways in Javascript to execute code based on whether certain conditions are true or not. These are often central to getting your program to do what you want.
 * 
 */


// 1 // If
//If statements will execute code if and only if the test statement enclosed within parentheses prior to the code block returns true

if(5 > 2){  
    console.log("It is bigger!"); //the code contained with the if statement's code block will only execute if the if statement is true. In this case, 5 is greater than 2, so it will print the listed string to the console.
}

if(5 < 2){
    console.log("It is smaller!"); //in this case nothing would print to the console, as 5 is not less than two - the code block containing this console.log would not fire.
}

// 2 // Else-If
//it is possible to add an "else if" statement after an if statement, which will also contains parentheses with a test case followed by a code block. 
//The code in an "else if" code block will only fire if the test case in the "else if" statement is true AND the initial if statement's test failed!

if(5 < 2){
    console.log("It is smaller!");
}else if(5 > 2){
    console.log("It is bigger!");
}   
//in the case of the above code, the "5 < 2" test would be run first. Since 5 is not less than 2, it would proceed to the else-if statement "5 > 2". Since 5 is greater than 2, the console.log code within that code block would fire.

// 3 // Else

if(2 < 2){
    console.log("It is smaller!");
}else if(2 > 2){
    console.log("It is bigger!"); //in this if-else chain, both tests failed, since 2 is equal to, not greater than or less than, 2. In cases like this, it can help to have an "else" statement to use as a catchall.
}else{
    console.log("They are equal!"); //this console.log code will fire if both the "if" and "else-if" tests fail - the "else" statement therefore provides a default code block to execute in the case that none of the statements in the if-else chain return true
}
//note that while we could have ended the above if-else chain with "else if(2 === 2){console.log("They are equal!");}", it would effectively do the same thing, since we can conclude by process of elimination that the numbers must be equal given the failure of the first two tests

// 4 // Switch
//switch statements are another way to control which blocks of code your program executes. A switch statement will evaluate the expression it is passed, then test the value of that expression against a series of test cases, executing the code block for the one that passes.

let text = "";
switch (1) {    //the code within the "()" is the test case. These can be anything that would normally be storable in a variable. In this case, we're using the simple test case of "1"
  case 0:       //if the test case in the "()" above equalled "0" (the case value for this code), then the code after the "case: <test case>" statement would fire, right up until a new case statement is encountered. 1 != 0, so this code doesn't fire.
    text = "No";
    break;      //the "break" keyword tells the Switch statement to stop, without it it will continue to search for cases that match the test case and will execute the code blocks in those cases as well 
  case 1:       //in this case, the test value (1) is indeed equal to the test case at the start of the switch statement! This block of code would therefore fire
    text = "Yes";
    break;
  default:      //the "default" keyword at the end of a switch statement is similar to the "else" statement for an If-Else statement chain, as discussed above: it provides a block of code that will execute if the test case is not = to any of the case values in the Switch statement
    text = "Error";
}

