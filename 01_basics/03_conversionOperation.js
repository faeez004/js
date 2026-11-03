let score = "33abc";
let score2 = null;

let valueInNumber = Number(score); //converted successfully to number, but with a catch
// console.log(valueInNumber);// the catch is it becomes NaN
// console.log(typeof(valueInNumber));// type of NaN = number

let valueInNumber2 = Number(score2); //converted successfully to number, but with a catch
// console.log(valueInNumber2);// the catch is it becomes 0
// console.log(typeof(valueInNumber2));

//"33" => 33
//"33abc" => NaN
//"true" => 1 ; "false" => 0

let isLoggedIn = "faeez";
let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(booleanisLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "faeez" => true

let someNumber = 21;
let stringsomeNumber = String(someNumber);
console.log(stringsomeNumber);
console.log(typeof(stringsomeNumber));