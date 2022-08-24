// number
export const age = 29;

// string
export const myName = 'Ezechiele';

//array
export const genres = ['Action', 'Horror'];

// object
export const person = {
    age: age,
    name: myName
}

//arrow function
export const sayHi = () => {
    console.log('hi');
}

//function
const sayHi2 = function(){
    console.log('hi 2');
}

// another way to write function
export function sayHi3(){
    console.log('hi 3');
}


const alex = 'Alessandro';

export default alex;

// OTHER FILE IN WHICH YOU WANT TO USE THESE EXPORTS -----------------------------------------------------

/* named export

export const age = 29;
-----------------------
import { age } from './data';

*/

/* default export
const age = 29;
export default age;
-----------------------------
import pippo from './data';

*/

// check data.js for the usage of both of them

// import all (named export + default export from './data' and put it in dataFile)
//import * as dataFile from './data';
