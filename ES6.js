// ES6 Refresher - Doing some practice again es6
let x = 5;
let y = 5;
console.log(x+y);
const myName = "jaberjabed";
console.log(myName);

function num(num){
    return num*2;
}
console.log(num(6));;

const numMul = num => console.log(num*2);
numMul(7);

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

let mobile = ["iPhone", "OnePlus", "Xiaomi", "Realme"];
let [m1, m2, m3, m4] = mobile;
console.log(m2);

let perSon2 = {
    name : "jaberjabed",
    age : 25
}
let {name, age} = perSon2;
console.log(name);
console.log(age);

let num1 = 100;
let num2 = num1;
console.log(num2);

let ber = {
    name : "jaberjabed",
    age : 25
}

let ber1 = {
    ...ber
}
ber1.name = "abidakhatun";
console.log(ber);
console.log(ber1);

let array = [2, 3, 5, 7, 8, 10];
let array1 = array.map(x => x*2);
console.log(array1);

let array2 = array.filter( x => x%2 == 0 );
console.log(array2);

const myFunc = () => console.log('Nayok');
myFunc();

const nayikas = [1, 2, 3, 4, 5, 6];
const arrays2 = [...nayikas];
console.log(arrays2)

const mobiles = {
    brand: 'Samsung',
    model:'S4'
   };

delete mobiles.brand;
console.log(mobiles);

const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);

function addss(num1=10, num2=10){
    return num1+num2;
}
const add = addss();
console.log(add);