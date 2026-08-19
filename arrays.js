// // const myArr = [0 ,1,2,3,4,2,3,4]
// // console.log(myArr)

// // const Heroes = ["Hulk" ," Loki" , "hawkwye"]
// // console.log(Heroes[0])

// // const myArr2 = new Array(1,1,4,3,5,3,7,6,8)
// // console.log(myArr2[3])

// // myArr2.push(10)
// // console.log(myArr2)

// // myArr2.pop()
// // console.log(myArr2) // output: [1, 1, 4, 3, 5, 3, 7, 6, 8]

// // const Arr3 = new Array(1,2,3,4,5,6,7,8,9)
// // console.log(Arr3)

// // console.log(Arr3.length) // output: 9   

// // // slice splice method
// // const Arr4 = [1,2,3,4,5,6,7,8,9]
// // console.log(Arr4.slice(2,5)) // output: [3, 4, 5]

// // const Arr5 = [1,2,3,4,5,6,7,8,9]
// // console.log(Arr5.splice(2,5)) // output: [3, 4, 5, 6, 7]
// // console.log(Arr5) // output: [1, 2, 8, 9]


// //////////////////////////////////////////////////////////////////////////////

// const MarvelHeroes = ["Ironman", "Thor", "Hulk", "Black Panther", "Captain America"]
// const DCHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]

// MarvelHeroes.push(DCHeroes)

// console.log(MarvelHeroes) // output: ["Ironman", "Thor", "Hulk", "Black Panther", "Captain America", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]
// //  const all_new_Heroes= MarvelHeroes.concat(DCHeroes)
// // console.log(all_new_Heroes) // output: ["Ironman", "Thor", "Hulk", "Black Panther", "Captain America", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]

// const all_new_Heroes2 = [...MarvelHeroes, ...DCHeroes]
// console.log(all_new_Heroes2) // output: ["Ironman", "Thor", "Hulk", "Black Panther", "Captain America", "Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]






const anotherArr = [1,2,3,4,5,6,7,8,9,[10,11,12,13,14,15],[16,17,18,19,20,[21,22,23,24,25]]]
const real_anotherArr = anotherArr.flat(Infinity)
console.log(real_anotherArr); // flattening the array to a single level



console.log(Array.isArray("Aryan")) // output: false
console.log(Array.from("Aryan")) // output: ["A", "r", "y", "a", "n"]
console.log(Array.from({name: "Aryan"})) // output: [undefined]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.from([score1, score2, score3])); // output: [100, 200, 300]