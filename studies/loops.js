/**
 * LOOPS
 * 0: loops allow us to perform the same function over and over again with possible minor changes each iteration
 * One common use of this is to do something to all of the values in an array or object, such as modifying them in a specific way or testing them against a condition
 * The types of loops we will be covering here are while loops, for loops, and for-in loops
 */

const { arrayToList } = require("../projects/eloquent-javascript/chapter-04/exercises");

// 1 // While, for, and for-in loops
// 1a // While loops
//these loops run the code written within their code blocks over and over again, repeating from the beginning so long as a set condition remains true
var i = 0;
while(i < 10){  //the code in the "()" is the conditional statement. This is evaluated at the end of each loop. If it is still true, it runs the code again.
    console.log(i);
    i++;        //note that the While loop does not have a built in functionality to control its stop condition like other loops, so you'll need to ensure one is in the code block
    //if the above "i++" (or some other way of changing whatever variable or state the test condition is testing for) were not there, this loop would fire infinitely, causing an error!
}

// 1b // for loops
//a for loop has three separate statements within its "()", each separated by a ";", and each of which all serve a specific and necessary purpose
//the first initializes the counting variable (usually "i") and sets its value; this code is run once before the first loop starts and is not run again
//the second sets the condition that the loop checks for at the end of each loop to determine if the loop will fire again, similar to the While loop's condition statement described above
//the third is code that will always run at the end of the loop BEFORE the stop condition is checked for truth; this is generally used to modify the counting variable in some way, or otherwise to ensure the loop does not go infinite

for(let i = 0; i <= 10; i++){   //based on what was said above, we can see that the first statement "let i = 0" initializes "i" as a counting variable, the second means that this loop will run until i is 11 or more,
    //and the third statement means that the value of i will increase by 1 each iteration
    console.log(i); //all code within the "{}" (code block) will run each loop. In this case, this loop would print the values from 0 to 10 to the console.
}

for(let i = 2; i <= 20; i += 2){  //note that all of these can be modified based on what you want to do. For instance, this loop would print all even numbers between 2 and 20 because of where i starts and how it iterates!
    console.log(i);
}

// 1c // for-in loops
//these loops are used specifically to iterate through all of the key-value pairs of an object. They will run the code in their code blocks once for each key-value pair in the object they are passed, then stop.

let obj = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    thatsEnough: "done"
}

//the syntax of a for-in loop is "for(<variable representing the key of the key-value pair the loop is currently on> in <object you want to iterate through>){code block}" For example:
for(key in obj){    //this loop will iterate through all of the key-value pairs in the object "obj"
    console.log(key);   //"key" is a stand-in for the value at whatever key-value pair the loop is currently on. Therefore, this being in the code block means that this loop would log the keys of each key-value pair of obj to the console.
    console.log(obj[key]);  //if you wanted to log the values instead of the keys, you would need to reference them like this. 
    //Note that you MUST use bracket notation in these cases, or else it will log only the value of the key-value pair whose key is specifically "key"; it will not substitute whatever the current key is if dot notation is used!
}


// 2 // looping limits
//we are able to use a variety of different tricks and techniques to loop in different ways. Here are some of those!

// 2a // looping any number of times
//while we do generally need to specify start and end numbers for our counter variables (or something similar), it is possible for these numbers to be based on other values rather than hard coded.
function printNums(n){  //for instance, we can use a function in order to allow for the number of iterations to be specified when said function is called.
    for(let i = 0; i <= n; i++){    //this for loop looks similar to the first one we did above, but you'll note that we've substituted the variable "n" in place of the specific number we'd used before
        console.log(i); //this will log all numbers from 0 to n to the console, meaning that the number of loops it goes through will vary based on what is passed as n during the function call!
    }
}

// 2b // forwards and backwards
//we've already seems some examples of looping forwards or "counting up" (see the previous for loop examples), but we can also loop BACKWARDS if we want!

for(let i = 10; i >= 0; i--){   //as you can see, instead of starting at 0, ending at 10, and adding one to i each iteration as we did in our first example, we've reversed it in this one.
    //this loop begins at 10, runs so long as i isn't below 0, and subtrats one to i each iteration!
    console.log(i); //this will therefore result in printing the numbers 10 to 0 in that order, starting at ten and counting down to 0!
}

// 3 // Looping over Arrays
//one of the most common uses of loops is to loop over collections of data, such as arrays, either to take and/or modify that data in some way or to run tests on all data in the array.

var arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){    //as you can see, we have constructed this loop similarly to the printNums function we did before in that the stop state is not hard coded as a number, but rather is set based on an external source
    //in this case, we want this loop to iterate through each element of the array "arr", so we've made the stop condition related to the array's length. That way we won't accidentally iterate too far!
    console.log(arr[i]);    //this will log all of the elements of the array to the console, in this case the numbers from 1 to 5 in that order. 
    //Note that this loop will stop if i = array.length. This is because array indexes begin counting at 0, meaning that their last value is actually held at the index one less than the number of elements in the array
    //we could have also have written the stop statement as "i <= arr.length - 1" to account for this.
}
//the above loop iterates through an array starting at the first element and ending at the last one, but we can iterate backwards too! All we need to do is switch some of these statements around

for(let i = arr.length - 1; i >= 0; i--){ //now "i" will start at 1 - the length of the array, which will be the last element that appears in the array. "i" will then iterate down from there
    console.log(arr[i]);    //this code therefore means that this loop will print all of the values of the array in reverse order; it will start with the last element (5 in this case) and end with the first (1, which is at array index 0)
}

// 4 // Looping over Objects
//as mentioned above, the for-in loop structure is tailor made for objects. It allows you access to all of that object's keys and, by firtue of that, the values attached to those keys.

for(key in obj){ //we will use the object already declared in section 1c for this example. As you'll recall, this loop as written will iterate through each key-value pair stored in the object
    if(typeof obj[key] === "string"){   //here, we're using an if statement to control what is done on each iteration. In this case, we want to log the key to the console for all keys whose values are strings
        console.log(key);
    }else{
        console.log(obj[key]);  //if the key's value is not a string, we will simply output the value instead!
    }
}   // => this would therefore log "1, 2, 3, 4, "thatsEnough"" to the console
//keep in mind, then, that using a for-in loop you will have access to both the values AND the keys of the object you're looping through; this can therefore be an easy way to get the key for a particular value in an object.
