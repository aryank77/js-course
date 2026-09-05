// function sum(a, b){
//     console.log(a + b);
// }
// sum(2,4)

// function addTwoNumbers(num1, num2){
//     let result = num1 + num2;
//     return result;
// }
// let result =addTwoNumbers(5, 10);
// console.log(result);


function loginUserMessage(username){
    if(!username) throw 'Username is required';
    return `${username} just logged in`;
}
console.log(loginUserMessage('sammy'));