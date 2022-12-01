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

function valuesToString(object) {
    let outp = "";
    let arr = objectValues(object);
    for(let i = 0; i <= arr.length - 2; i++){
        //if value is string datatype, add to outp
        outp = outp + arr[i] + " ";
    }
    outp += arr[arr.length - 1];
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

//the way to do this is to check every "friends" array and adding it to output array if the "name" argument is not in that array.

function nonFriends(name, array) {
    let outp = [];
    let index = 0;
    let test = 0;
    //find the index in the array for the name that was passed to the function and pass it to "index" variable
    for(let i = 0; i <= array.length - 1; i++){
        if(array[i].name === name){
            index = i;
        }
    }
    //
    for(let i = 0; i <= array[index].friends.length - 1; i++){
        if(array[index].name[i] !== name){
            for(let z = 0; z <= array[index].friends.length - 1; z++){
                if(array[index].friends[z] !== name){
                    test = 1; //need different variable for each name?
                }else{
                    test = 0;
                }
            }
            if(test = 1){
                outp.push(array[i].name);
            }
        }
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

//start uncommenting out one function at a time to find syntax error

function removeProperties(object, array) {
    // for(let i = 0; 1 < array.length; i++){
    //     if (object.hasOwnProperty(array[i])){
    //         delete object[array[i]];
    //     }
    // }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//"dedup() : Should take an array and return an array with all the duplicates removed"

function dedup(array) {
    // let outp = [""];
    // for(let i = 0; i < array.length; i++){
    //     for(let z = 0; z < outp.length; z++){
    //         if(array[i] !== outp[z]){
    //             outp.push(array[i])
    //         }
    //     }
    // }
    // outp.shift();
    // return outp;
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