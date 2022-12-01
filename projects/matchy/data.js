/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// creating a variable named animal and assigning to an empty object
var animal = {};
// add a key of species and a value of an animals species to animal object using dot notation
animal.species = 'Canine';
// add a key of name and a value of a name to the animal object using bracket notation
animal['name'] = 'Rolo';
// add a key of noises with a value of an empty array to the animal object
animal.noises = [];
// print animal object to the console usinging console.log
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
// use bracket notation to add a string of the noise the animal makes
noises[0] = 'Roof';
// using a function add a noise to the end of noise
function addNoise(noise){
  noises.push(noise);
};
// calling the function
addNoise('Bark');
// add an element to the begining of noises
noises.unshift('Woof');
// using bracket notation to add to the end of the noises array
noises[noises.length] = 'Bowow';
// console log the length of noises
console.log(noises.length);
// console log the last element in noises array
console.log(noises[noises.length - 1]);
// console log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises;
animal.noises.push("Howl");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      assignment, dot notation, and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *      assignment and bracket notation (no dot notation allowed)
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create animals array

var animals = [];
animals.push(animal);

console.log(animals);

//add duck object to animals

var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
}
animals.push(duck);
console.log(animals);

//add 2 new animal objects

var cat = { 
  species: 'feline', 
  name: 'Garfield', 
  noises: ['meow', 'hiss', 'purr'] 
}

var horse = { 
  species: 'equine', 
  name: 'Seabiscut', 
  noises: ['neigh', 'whinney', 'clop'] 
}

//push both new animal objects to the animals array
animals.push(cat);
animals.push(horse);

//console log 'animals' and the length of 'animals'
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//we chose arrays, as this will contain only a list of names and there are more methods that can be used with it

var friends = []; //Create a variable called `friends` and assign it to the data structure that you chose.
//create getRandom function that outputs a random number between 0 and inputted array length - 1
function getRandom(array){{
    let max = array.length - 1;
    return Math.floor(Math.random() * max);
  }
}

//get a random animal

var randan = animals[getRandom(animals)];

//get the name of the random animal

var randnam = randan.name;

//add that name to "friends"

friends.push(randnam);

//`console.log` `friends`.

console.log(friends);

//Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array

horse["friends"] = friends;
console.log(horse.friends);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}