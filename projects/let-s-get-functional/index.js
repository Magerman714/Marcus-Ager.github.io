// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./Marcus-Ager.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER above with your actual github folder name that is in your workspace.
 */

//Most useful methods from Underpants: filter, map, reduce, each

var maleCount = function(array) {
//you can start by making sure you find only the male customers in the customer array, using the filter method
    let males = _.filter(array, function(customer){
        return customer.gender === 'male';
    }); // [{male}, {male}]
    return males.length;
};

var femaleCount = function(array){ // constraint: need to use the reduce method for this one
    let females = _.reduce(array, function(accumulator, current){
        //determine if current object has a gender of female
        if(current.gender === 'female'){ //if true, add 1 to accumulator
            return accumulator + 1;
        }else{
            return accumulator;
        }
            
    }, 0);
    return females; // note that you could also just return this instead of declaring the variable; i.e. you can replace "let females =" with "return"
};

/**
 * Here's what the logic will look like, i.e. what the program will be doing at each step
 * invoke reduce
 *      result = 0
 *      iterate through array
 *          0
 *              result = 1
 *          1
 *              result = funct(result, array[i], 0, [...])
 */         

var oldestCustomer = function(array){ //return the name of the oldest custumer in the customers array
    let outp = '';
    let oldest = _.reduce(array, function(accumulator, current){
        //determine if the accumulator is older than the current customer
        if(accumulator.age > current.age){
            return accumulator;
        }else{
            outp = current.name;
            return current;
        }
    });  //note that since no seed was given, it will automatically be set to the first element in the array
    return outp;
}; 

/**
 * invoke reduce
 *      result = { name: 'Adele Mullin' }
 *      iterate at 1 index
 *          1
 *              result = { name: 'Adele Mullin' }
 *          2
 *              result = { name: 'Adele Mullin' }
 *          [...]
 */

var youngestCustomer = function(array){
    let outp = '';
    let youngest = _.reduce(array, function(accumulator, current){
        //determine if the accumulator is older than the current customer
        if(accumulator.age < current.age){
            return accumulator;
        }else{
            outp = current.name;
            return current;
        }
    });  //note that since no seed was given, it will automatically be set to the first element in the array
    return outp;
};

var averageBalance = function(array){
    let balanceNums = _.map(array, function(element){
          return parseFloat(element.balance.replace(/[$,]/g, ""));
      });
      let total = _.reduce(balanceNums, function(accumulator, current){
          return current + accumulator;
      }, 0);
    return parseFloat(total / array.length);
};

var firstLetterCount = function(array, letter){
    let numNames = _.filter(array, function(x){
        if(x.name.charAt(0).toUpperCase() === letter.toUpperCase()){
            return true;
        }else{
            return false;
        }
    });
    return numNames.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    let outp = [];
    let numNames = _.each(array, function(element){
        if(element.name === customer){
            outp = _.filter(element.friends, function(x){
                if(x.name.charAt(0).toUpperCase() === letter.toUpperCase()){
                    return true;
                }else{
                    return false;
                }
            });
        }
    });
    return outp.length;
};

var friendsCount = function(array, name){
    let outp = [];
    let posTest = _.filter(array, function(x){
        //if name is in friends list, return array.name
        return _.reduce(x.friends, function(accumulator, current, i){
          if(x.friends[i].name === name){
            outp.push(x.name);
                return true;
            }
        }, false);
    });
    return outp;
};

var topThreeTags = function(array){
    let outp = ["", "", ""];
    let outpVals = [0, 0, 0];
      let holder = {};
      _.each(array, function(x){
          _.each(x.tags, function(x){
              if(holder[x] === undefined){
                  holder[x] = 0;
              }
              holder[x]++;
          });
      });
    let holdKeys = Object.keys(holder);
    let holdVals = Object.values(holder);
    _.each(holder, function(x, i){
      if(x > outpVals[0] || x > outpVals[1] || x > outpVals[2]){
        if(outpVals[0] === 0){
          outpVals[0] = x;
          outp[0] = i;
        }else if(outpVals[1] === 0){
          outpVals[1] = x;
          outp[1] = i;
        }else if(outpVals[2] === 0){
          outpVals[2] = x;
          outp[2] = i;
        }else{
          if(x >= outpVals[2]){
            if(x >= outpVals[1]){
              if(x >= outpVals[0]){
                outpVals[2] = outpVals[1];
                outp[2] = outp[1];
                outpVals[1] = outpVals[0];
                outp[1] = outp[0];
                outpVals[0] = x;
                outp[0] = i;
              }else{
                outpVals[2] = outpVals[1];
                outp[2] = outp[1];
                outpVals[1] = x;
                outp[1] = i;
              }
            }else{
              outpVals[2] = x;
              outp[2] = i;
            }
          }
        }
      }
    });
      return outp;
  };

var genderCount = function(array){
    let outp = {};
    let gendersArr = _.map(array, function(x){
    return x.gender;
});
  _.each(gendersArr, function(x){
    if(outp[x] === undefined){
      outp[x] = 0;
    }
    outp[x]++;
  });
  return outp;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
