// ES6 Refresher ----> Doing some practice again es6
let x = 5;
let y = 6;
console.log(x+y);
const myName = "jaberjabed";
console.log(myName);

function num(name){
    let num2 = name*2;
    console.log(num2);
}
num(6);

const numMul = num => console.log(num*2);
numMul(5);

const numMul2 = (num,num2) => console.log(num*num2);
numMul2(5,6);

import { hello } from "./sell.js";
hello();
import person from "./customer.js";
console.log(person);

// import {text, setText} from './myModule.js';
// console.log(text);
// setText("Good Bye From ES6");
// console.log(text);
// setText("Welcome Back by Jaberjabed");
// import {message} from './myModule.js';
// console.log(message);
// import person from './myModule.js';
// console.log(person);