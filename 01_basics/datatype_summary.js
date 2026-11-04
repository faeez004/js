// Primitive datatypes : 7 -> String, Number, Boolean, null, undefined, Symbol, BigInt

// Non-primitive datatypes : 3 -> Array, objects, functions

// JS is dynamically typed

// Symbol datatype makes a value unique
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false

const people = ["Armin","Mikasa","Jean"];

let peopleType = {
    'eren' : 'kyojin',
    'erwin' : 'ningen',
};

const myFunction = function (){
    console.log("Aa gaye meri mout ka tamasha dekhne");
};

console.log(typeof null); //object *** INTERVIEW QUESTION ***
console.log(typeof myFunction);
console.log(typeof people);