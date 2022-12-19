// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  return arr.reduce(function(prevValue, currentValue){
      return prevValue.concat(currentValue);
  }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  if(test(val) === false){
    return;
  }
  body(val);
  val = update(val);
  loop(val, test, update, body);
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, predFunc) {
  for(let i = 0; i < arr.length; i++){
    if(predFunc(arr[i]) === false){
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return 0;
  }
  let arr = str.split("");
  let charCode = 0;
  let charDir = "";
  let tally = arr.map(function(x){
    charCode = x.codePointAt(0);
    charDir = characterScript(charCode);
    return charDir.direction;
  });
  let countLTR = 0;
  let countRTL = 0
  let countTTB = 0
  let countOther = 0;
  tally.forEach(function(x){
    if(x === "ltr"){
      countLTR++;
    }else if(x === "rtl"){
      countRTL++;
    }else if(x === "ttb"){
      countTTB++;
    }else{
      countOther++;
    }
  });
  if(countLTR > countTTB && countLTR > countRTL){
    return "ltr";
  }else if(countRTL > countTTB && countRTL > countLTR){
    return "rtl";
  }else if(countTTB > countRTL && countTTB > countLTR){
    return "ttb";
  }
    }

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
