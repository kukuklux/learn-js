//let(modern variable declaration)
//let message;

message = 'Hello'; // store the string 'Hello' in the variable named message

//multiline variant
let user = 'John';
let age = 25;
//let message = 'Hello';

//using var istead of let(old school variable declaration)
var message = 'Hello';

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

//constants are used do declare an unchanging variable
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

//working with variables
let admin, name; // can declare two variables at once

name = "John";

admin = name;

console.log( admin ); // "John"

//