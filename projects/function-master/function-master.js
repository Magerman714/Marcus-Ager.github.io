//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// const { isUndefined } = require("lodash");

function objectValues(object) {
    let objArr = [];
    for (let key in object){
    objArr.push(object[key]);
    }
    return objArr;


} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let outp = "";
    let arr = Object.keys(object);
    for(let i = 0; i <= arr.length - 2; i++){
    outp = outp + arr[i] + " ";
    }
    outp += arr[arr.length - 1];
    return outp;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object and return all its string values in a string each separated with a space

function valuesToString(object) {
    let outp = ""; //initialize a variable to hold the string which will be returned by this function
    let arr = Object.values(object); //create an array containing all of the values of the object argument
    for(let i = 0; i <= arr.length - 1; i++){
        //if value is string datatype, add to outp and add a space afterwards
        if(typeof arr[i] === "string"){
        outp = outp + arr[i] + " ";
        }
    }
    if(outp[outp.length - 1] === " "){ //if the last character is a space, delete it; there should be no space at the end
    outp = outp.trimEnd();
    }
    return outp;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true){
        return 'array';
    }else{
        return 'object';
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
} 

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let arr = string.split(" ");
    let outp;
    for(i = 0; i <= arr.length - 1; i++){
        arr[i] = capitalizeWord(arr[i]);
    }
     outp = arr.join(" ");
     return outp;
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let outp = "Welcome ";
    let nam = object.name;
    outp = outp + capitalizeWord(nam) + "!";
    return outp;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let spec = capitalizeWord(object.species);
    let nam = capitalizeWord(object.name);
    let outp = nam + " is a " + spec;
    return outp;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
 
    if(Array.isArray(object.noises) && object.noises.length > 0){
        let noi = object.noises.join(" ");
        return noi; 
    }else{
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let arr = string.split(" ");
    return arr.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.hasOwnProperty("friends")){
        return object.friends.includes(name);
    }else{
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and a list of people, and return a list of all the names that <name> is not friends with

//the way to do this is to check every "friends" array and add it to output array if the "name" argument is not in that array.

function nonFriends(name, array) {
    let outp = [];
    let test = true;
        for(let i = 0; i < array.length; i++){
            for(let z = 0; z < array[i].friends.length; z++){
                if(array[i].friends[z] === name){
                    test = false;
                }
            }
            if(test !== false && array[i].name !== name){
                outp.push(array[i].name);
            }
            test = true;
        }
    return outp;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;  //I assume the problem here has to do with assigning values to complex data types?
    return object; //you need to return something lol, that's the problem
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

//start uncommenting out one function at a time to find syntax error

function removeProperties(object, array) {
    for(let i = 0; i < array.length; i++){
        if(object.hasOwnProperty(array[i])){
            delete object[array[i]];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//"dedup() : Should take an array and return an array with all the duplicates removed"

function dedup(array){
    let outp = [];
    let test = true;
    for(let i = 0; i < array.length; i++){
        for(let z = 0; z < outp.length; z++){
            if(array[i] === outp[z]){
                test = false;
            }
        }
        if(test === true){
            outp.push(array[i]);
        }
        test = true;
    }
    return outp;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}