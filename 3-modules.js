// CommonJS - every file is a module (by default)
//  Modules - Encapsulated code (only share minimum)

const names = require("./4-names"); // imports object from 4-names module in a variable
const sayHi = require("./5-utils"); // imports sayHi function from 5-utils module in a variable
const data = require("./6-alternative-export");
console.log(names); // logs names object
sayHi(names.firstName);
sayHi(names.lastName);
console.log(data); // logs objects from 6-alternative-export.js module
require("./7-mind-grenade"); //did not export anything from 7-mind-grenade.js module but function got executed