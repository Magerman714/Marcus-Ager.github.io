// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

//note that the "contact list" is just a list of "contact" objects that 
//contain the keys "id" (a number), nameFirst, and nameLast -- see the contact.json file in "data" for these

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact = {
        "id": id,
        "nameFirst": nameFirst,
        "nameLast": nameLast,
    };
    return contact;
} 
//make sure you pass all the tests for the above function before you move on to the one below - all the tests
//for the function below are based on the function above, so if the above function doesn't pass the other also won't

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    let contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            //use the push method to send the new contact entered in for the function to the "contacts" array
            contacts.push(contact);
        }, 
        findContact: function(fullName){
            //split the string into an array with first name at index 0 and last name at index 1
            let nameSplit = fullName.split(" ");
            //iterate through the contacts array of objects to find if one matches the firstName/lastName pair
            for(let i = 0; i < contacts.length; i++){
                if(nameSplit[0] === contacts[i].nameFirst && nameSplit[1] === contacts[i].nameLast){
                    //if it does, return the contact object
                    return contacts[i];
                    //else return undefined
                }
                }  
                return undefined;                  
        },
        removeContact: function (contact){
            for(let i = 0; i < contacts.length; i++){ //loop through the contacts array to find the index that contains the "contact" object
                if(contact === contacts[i]){ //if this is the correct index, then we will remove it
                    if(i === 0){             //if this is the first element in the array, we can use the shift method to remove
                        contacts.shift();
                    }else if(i === contacts.length - 1){ //if this is the last element in the array, we can use the pop method to remove
                        contacts.pop();
                    }else{                   //if this is neither the first element in the array nor the last one, we need to use the splice method to remove
                        contacts.splice(i, i - 1);
                    }
                }
            }
        },
        printAllContactNames: function(){
            //create a variable to hold the string that will be outputted
            let outp = "";
            //iterate through all contacts in the "contacts" array
            for(let i = 0; i < contacts.length - 1; i++){ //not using "<=" because we don't want this loop to include the final index
                //for each contact except the last, add the first name and last name separated by a space and followed by a line break to the output string
                outp = outp + contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
            }
            outp = outp + contacts[contacts.length - 1].nameFirst + " " + contacts[contacts.length - 1].nameLast;
            console.log(outp);
            return outp;
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
