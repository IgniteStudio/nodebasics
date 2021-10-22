// const xyz = require('./people');
const { people, ages} = require('./people');

// console.log(xyz);
// console.log(people); 
// gives an error when people.js is not exported

// console.log(xyz.people, xyz.ages);
console.log(people, ages);

const os = require('os'); // built into node
// os operating system
console.log(os.platform(), os.homedir());





