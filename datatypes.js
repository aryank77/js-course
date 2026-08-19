// //Array
// const sum = null;
// const sum1 = undefined;
// const sum2 = true; // or false
// const sum3 = 5;
// let heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Aquaman"];
// {
//     console.log(heroes[0]);
//     console.log(heroes[1]);
//     console.log(heroes[2]);
//     console.log(heroes[3]);
//     console.log(heroes[4]);
// }


// console.log(typeof sum); //// output: object 
// console.log(typeof sum1); //// output: undefined
// console.log(typeof sum2); //// output: boolean
// console.log(typeof sum3); //// output: number


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap (non primitive)

// concatenation
let name = "John";
let lastName = "Doe";

console.log(`Hello, ${name} ${lastName}!`); // output: Hello, John Doe!



const gameName = new String("Chess");
console.log(typeof gameName); // output: object

console.log(gameName); // output: [String: 'Chess']
console.log(gameName.charAt(0)); // output: C
console.log(gameName.indexOf("h")); // output: 1


const name1 = "   John   ";
console.log(name1); // output:    John
console.log(name1.trim()); // output: John( removes whitespace from both ends of a string)

const url = "https://www.example.com";
console.log(url.replace("https", "http")); // output: http://www.example.com
console.log(url.includes("example")); // output: true

console.log(name1.split(" ")); // output: [ '', '', '', 'John', '', '', '' ] (splits the string into an array of substrings based on the specified separator)