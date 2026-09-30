//set=> set is a collection of values where each value must be unique. It is similar to an array but does not allow duplicate values. Sets are useful for storing unique items and can be used to perform operations like union, intersection, and difference.
//map => map is a collection of key-value pairs where each key must be unique. It is similar to an object but allows any type of value as a key. Maps are useful for storing data that needs to be accessed by a specific key and can be used to perform operations like adding, removing, and retrieving values based on their keys.
//date => date is a built-in object in JavaScript that represents a single moment in time. It can be used to create, manipulate, and format dates and times. The Date object provides methods for getting and setting the year, month, day, hour, minute, second, and millisecond of a date, as well as methods for comparing dates and calculating the difference between two dates.

// set

const rollNumbers = new Set();
rollNumbers.add(1);
rollNumbers.add(2);
rollNumbers.add(3);
rollNumbers.add(1); // duplicate value, will not be added
console.log(rollNumbers); 


// map (key-value pairs) (duplicate keys are not allowed, but duplicate values are allowed)
const studentGrades = new Map();
studentGrades.set("Asbab", 85); // (key: "Asbab", value: 85)
studentGrades.set("Raj", 92); // (key: "Raj", value: 92)
studentGrades.set("Sushant", 78); // (key: "Sushant", value: 78)
studentGrades.set("Asbab", 90); // updates existing value
console.log(studentGrades);

// date
const date = new Date();
console.log(date); // current date and time

//current date
const todaysDate = date.getMonth()+1;
console.log(todaysDate); // current date