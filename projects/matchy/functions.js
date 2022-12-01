/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(arr, str){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === str){
            return arr[i];
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    for(let i = 0; i < animals.length; i++){
    if(animals[i].name === name){
        if(i === 0){
            animals.shift();
            animals.splice(0, 1, replacement);
        }else if(i === animals.length - 1){
            animals.pop();
            animals.splice(animals.length - 2, i, replacement);
        }else{
            animals.splice(i, i - 1, replacement);
        }
    }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            if(i === 0){
                animals.shift();
            }else if(i === animals.length - 1){
                animals.pop();
            }else{
                animals.splice(i, i - 1);
            }
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */

function add(animals, animal){
    let dup = false;
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === animal.name){
            dup = true;
        }
    }
    if(animal.name.length > 0 && animal.species.length > 0 && dup !== true){
        animals.push(animal);
    }
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
