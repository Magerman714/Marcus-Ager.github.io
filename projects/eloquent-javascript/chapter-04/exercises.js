////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1, outp=[]) {
  if(start === end || step < 1){
    return outp;
  }
  if(start < end){
    outp.push(start);
    if(start === end - step || start > end - step){
      outp.push(end);
      return outp;
    }
    return range(start + step, end, step, outp);

  }else if(start > end){
      outp.push(start);
      if(start === end + 1 || start < end + step){
        outp.push(end);
        return outp;
      }
      return range(start - step, end, step, outp);
  }
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numsArr, outp=0) {
  if(numsArr.length === 0){
    return outp;
  }
  outp += numsArr[0];
  return sum(numsArr.slice(1), outp)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let outp = [];
  for(let i = arr.length - 1; i >= 0; i--){
    outp.push(arr[i]);
  }
  return outp;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  let temp = [];
  for(let i = arr.length - 1; i >= 0; i--){
    temp.push(arr[i]);
    arr.pop();
  }
  for(let i = temp.length - 1; i >=0; i--){
    arr.unshift(temp[i]);
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//should take in an array and return a "list" (see ch.4 of Eloquent Javascript for structure of list)
/**
 * lists look like this:
 * {
 *  value: 10,
 *  rest: }
 *    value: 20,
 *    rest: }
 *      value: 30,
 *      rest: null
 *      }
 *    }
 * }
 * 
 */

 var example = {
  value: 10,
  rest: {
    value: 20,
    rest: {
      value: 30,
      rest: null
    }
  }
}


function arrayToList(array, rest={}) {
  for(let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest };
  }
  return rest;  //the first time we iterate, we will be assigning "rest" to an object that looks like: {value: 30, rest: null }
                //the second time, it'l look like this: rest = { value: 20, rest: { value: 30, rest: null } }
}

//NOTE: make SURE that arrayToList is working before you attempt listToArray! -- uhhh ok so arrayToList isn't working but listToArray is?

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//use recursion to iterate through complex objects!

function listToArray(list, output=[]) {
  if(list.rest === null){
    output.push(list.value);
    return output;
  }
  output.push(list.value);
  return listToArray(list.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//NOTE: this one will be covered in class on 12/8

function deepEqual(x, y) {
  //determine if both x and y are not objects
  if(typeof x !== 'object' && typeof y !== 'object'){
    return x === y;
  }
  //determine if EITHER x OR y are not an object
  if(typeof x !== 'object' || typeof y !== 'object'){
    return false;
  }
  //create arrays of each items keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //determine if lengths of keys are different
  if(xKeys.length !== yKeys.length){
    return false;
  }
  //iterate through xKeys array
  for(let i = 0; i < xKeys.length; i++){
    //determine if invoking this function (deepEqual) on the values of these keys would be true or false
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
      return false;
    }
  }
  return true;
}

// deepEqual({ a: 1 }, { a: 1 }); //true
// deepEqual({ a: 1 }, { a: 2 }); //false


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
