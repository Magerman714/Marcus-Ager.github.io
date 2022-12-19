'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Function takes in any input value and returns input values unchanged
 * 
 * @param { Any value }: Function takes in any input value. 
 * @return {Any value}: The function 
 */

function identity(value){
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: takes a value and outputs the datatype of that value
 * @param {Any value}: a piece of data which can be of any data type 
 * @returns {string}: returns a string identifying the data type of whatever data was passed to the function 
 */

function typeOf(value){
    if(typeof value === "object"){
        if(value === null){
            return "null";
        }else if(Array.isArray(value)){
            return "array";
        }else if(value instanceof Date){
            return "date";
        }else{
            return "object";
        }
    }else{
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: takes an array and returns the first <number> items in it (or an empty array if input is not an array)
 * @param {array}: an array of items  
 * @param {number}: the number of items you want to return from the passed array
 * @returns {array}: an array containing the first <number> items in the array passed to the function - outputs an empty array if no array is passed, and outputs the first element in the array if no number is provided
 */

function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    }else if(number === undefined || typeof number !== "number"){
        return array[0];
    }else if(number > array.length){
        return array;
    }else{
        return array.slice(0,number);
    }
}
module.exports.first = first;

/**
 * last: takes an array and returns the last <number> items in it (or an empty array if input is not an array)
 * @param {array}:  an array of items  
 * @param {number}:  the number of items you want to return from the passed array
 * @returns {array}: an array containing the last <number> items in the array passed to the function - outputs an empty array if no array is passed, and outputs the last element in the array if no number is provided
 */

function last(array, num){
    if(!Array.isArray(array) || num < 0){
        return [];
    }else if(num === undefined || typeof num !== "number"){
        return array[array.length - 1];
    }else if(num > array.length){
        return array;
    }else{
        return array.slice(array.length - num, array.length);
    }
}
module.exports.last = last;

/**
 * indexOf: returns the index pertaining to the first occurance of <value> in passed <array>
 * @param {array}: an array of values
 * @param {value}: the value you're searching for  
 * @returns {number}: a number pertaining to the index at which the first instance of <value> was found in <array>
 */

function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: returns true if <value> is found in <array>
 * @param {array}: an array of values  
 * @param {value}: a value being searched for  
 * @returns {Boolean}: returns true if <value> exists in <array>, otherwise returns false
 */

function contains(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
        return false;
}

module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: removes duplicates from array
 * @param {array}:  an array of values
 * @returns {array}: the array passed to the function with all its duplicates removed
 */

function unique(array){
    let outp = [];
    for(let i = 0; i < array.length - 1; i++){
        if(_.indexOf(outp, array[i]) === -1){
            outp.push(array[_.indexOf(array, array[i])])
        }
    }
    return outp;
}
module.exports.unique = unique;

/**
 * filter: returns array containing only the values that passed the test function
 * @param {array}: an array of values
 * @param {function}: a function that will return a Boolean value
 * @returns {array}: an array containing only the values for which the passed function returned true
 */

function filter(array, funct){
    let outp = [];
    for(let i = 0; i <= array.length - 1; i++){
        if(funct(array[i], i, array) === true){
            outp.push(array[i]);  
    }
    }
    return outp;
}
module.exports.filter = filter;

/**
 * reject: returns array containing only the values that failed the test function
 * @param {array}: an array of values 
 * @param {function}:  a function that will return a Boolean value
 * @returns {array}: an array containing only the values for which the passed function returned false
 */

function reject(array, funct){
    let outp = [];
    for(let i = 0; i <= array.length - 1; i++){
        if(funct(array[i], i, array) === false){
            outp.push(array[i]); 
        }
    }
    return outp;
}
module.exports.reject = reject;

/**
 * partition: returns an array w/ 2 sub arrays, one of which contains all array elements that returned true from the test function, the other containing all elements that returned false instead
 * @param {array}: an array of values  
 * @param {function}:   a function that will return a Boolean value
 * @returns {array}: an array containing 2 sub arrays, one of which contains the values for which the passed function returned true with the other containing the values for which the passed function returned false
 */

function partition(array, funct){
    let outp = [];
    let outp1 = [];
    let outp2 = [];
    for(let i = 0; i <= array.length - 1; i++){
        if(funct(array[i], i, array) === true){
            outp1.push(array[i]); 
        }else{
            outp2.push(array[i]); 
        } 
    }
    outp = [outp1, outp2];
    return outp;
}

module.exports.partition = partition;

/**
 * map: returns the result of running each array element or key-value pair value through the provided function
 * @param {array or object}:  an array or object containing values
 * @param {function}:  a function that will manipulate the array elements or key-value pair values in some way
 * @returns {array}: an array containing the result of running the provided function for each element in the array or value in the key-value pair
 */

function map(collection, func){
    let arr = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            arr.push(func(collection[i], i, collection));
            
        }
    }else{
        for(let key in collection){
        arr.push(func(collection[key], key, collection));
        }
    }
    return arr;
}
module.exports.map = map;


/**
 * pluck: takes an array of objects and searches out the values of a specific property of all of those objects
 * @param {array}: an array of objects  
 * @param {string}: a string representing an object property  
 * @returns {array}: returns an array containing all of the values of <property> in each object in the array
 */

function pluck(array, property){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i][property]);
    }
    return result;
}
module.exports.pluck = pluck;


/**
 * every: tests to see if every array element or key-value pair value returns true when the test function is run on them
 * @param {array or object}: an array or object containing values
 * @param {function}: a function that returns a Boolean
 * @returns {Boolean}: returns true if all array elements or key-value pair values return true when the test function is run on them
 */

function every(collection, test){
    if(Array.isArray(collection)){
        if(test === undefined){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){ 
                    return false;
                }
            }
        }else{
            for(let i = 0; i < collection.length; i++){
                if(test(collection[i], i, collection) === false){
                    return false;
                }
            }
        }
    }else{ 
        if(test === undefined){
            for(let key in collection){
                if(!collection[key]){ 
                    return false;
                }
            }
    }else{
    for (let key in collection){
        if(test(collection[key], key, collection) === false){
            return false;
        }
    }
}
    }
return true;
}

module.exports.every = every;


/**
 * some: tests to see if any array element or key-value pair value returns true when the test function is run on them
 * @param {array or object}:  an array or object containing values
 * @param {function}:  a function that returns a Boolean
 * @returns {Boolean}: returns true if any array elements or key-value pair values return true when the test function is run on them; returns false if all returned false
 */

function some(collection, test){
    if(Array.isArray(collection)){
        if(test === undefined){
            for(let i = 0; i < collection.length; i++){
                if(!collection[i]){ 
                    return false;
                }
            }
            return true;
        }else{
            for(let i = 0; i < collection.length; i++){
                if(test(collection[i], i, collection) === true){
                    return true;
                }
            }
            return false;
        }
    }else{ 
        if(test === undefined){
            for(let key in collection){
                if(!collection[key]){ 
                    return false;
                }
            }
        return true;
        }else{
            for (let key in collection){
                if(test(collection[key], key, collection) === true){
                 return true;
                }
            }
            return false;
        }
    }
}
module.exports.some = some;

/**
 * reduce: calls <function> for every element in the array, updating the seed value with the result of every function return
 * @param {array}: an array of values
 * @param {function}: a function with parameters representing previous result, element, and index; the return value of this is passed to the next function as the "previous result" argument
 * @param {seed}:  the value that will be used as the "previous result" for the first iteration - if one is not specified it will default to the value at index 0 of the passed array
 * @returns {value}: returns the return value of the final function call, which will be a compilation of all the previous returns plus that one
 */

function reduce(array, func, seed){
    let result;
    if(seed === undefined){ 
        result = array[0]; 
        for(let i = 1; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }else{ 
        result = seed;
        for(let i = 0; i < array.length; i++){
            result = func(result, array[i], i, array);
        }
    }
    return result;
}
module.exports.reduce = reduce;

/**
 * extend: copies into the first object all properties from the second object and any other objects passed as arguments
 * @param  {any number of objects}: at least two objects; more objects can be passed if desired
 * @returns {object}: the first object passed into the function with all of the parameters of all of the other objects passed into the function added in - this is done in order, so some properties could be overwritten
 */

function extend(...obj1){
    let args = Array.prototype.slice.call(arguments, 0);
    for(let i = 1; i < args.length; i++){
        for(let key in args[i]){
            args[0][key] = args[i][key];
        }
    }
    return args[0];
}
module.exports.extend = extend;


