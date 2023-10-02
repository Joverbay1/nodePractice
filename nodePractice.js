// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1);
const lastName = getInput(2);
const fullName = firstName + " " + lastName;
//str[0];
// can do cont firstInitial = firstName[0].toUpperCase() instead of the way i have it as well.
const firstInitial = firstName[0]
const lastInitial = lastName[0]

console.log('Hello, ' + fullName);
console.log(fullName.toUpperCase() + ' have you capitalize your full name');
console.log(firstInitial.toUpperCase() + '. ' + lastInitial.toUpperCase() + '. ');
console.log(firstInitial.toLowerCase() + lastName.toLowerCase() + '1.prsvr@gmail.com');
