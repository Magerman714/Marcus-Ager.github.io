
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles() {
  let post = "#";
for(let i = 1; i <= 7; i++){
console.log(post);
post += "#";
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(let i = 1; i <= 100; i++){
    if(i % 3 !== 0 && i % 5 !== 0){
      console.log(i);
    }else if (i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }else if (i % 3 === 0){
      console.log("Fizz");
    }else{
      console.log("Buzz");
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard() {
  let pos1 = " # # # #\n";
  let pos2 = "# # # # \n";
  for(let i = 1; i < 8; i++){
    if(i % 2 !== 0){
      console.log(pos1);
    }else{
      console.log(pos2);
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
