// ES6 Refresher - Doing some practice again es6
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

import * as duble from "./sell.js";
duble.hello();
console.log(duble.data);

import {text, setText} from './myModule.js';
console.log(text);
setText("Good Bye From ES6");
console.log(text);
setText("Welcome Back by Jaberjabed");
import {message} from './myModule.js';
console.log(message);
import person1 from './myModule.js';
console.log(person1);

class Customer{
    constructor(n){
        this.name = n;
    }
    age = 25;
    buy(){
        console.log("Helloooooooo.......")
    }
}

class GuestCustomer extends Customer{
    hello(){
        console.log("Hello");
    }
}

let customer2 = new GuestCustomer("Jaberjabed");
console.log(customer2);

let customer1 = new Customer("Jaberjabed");
console.log(customer1);
customer1.buy();

let list = ["iPhone", "OnePlus", "Xiaomi", "Realme"];
let newList = ["Vivo", ...list];
console.log(newList);

let perSon = {
    name : "jaberjabed",
    age : 25
}

let newPerSon = {
    ...perSon,
    city : "Chittagong"
}
console.log(newPerSon);

function hello1(...all){
    console.log(all);
}
hello1(1, 2, 3, 4, 5);