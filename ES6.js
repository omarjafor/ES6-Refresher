// ES6 Refresher - Doing some practice again es6
/*let x = 5;
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

const allCalCulation = (a, b) => {
    const add = a + b;
    const sub = a -b;
    const mul = a*b;
    const div = a/b;
    return add+sub+mul+div;
}
console.log(allCalCulation(500, 50));

const addab = (a, b) => a + b;
console.log(addab(50, 150));

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
const add = `Sum of 5tk & 15tk is ${addss()} Taka ONly`;
console.log(add);

const data = [{id: 1, name: 'Omar jafor', address: 'kala gajir bari'}];
console.log(data[0].name);

const products = {
    count:500,
    data: [
        {id:1, name:'sony experia', price: 20000},
        {id:2, name:'Vivo supersonic', price: 25000}
    ]
}
console.log(products.data[1].price);

const numbers = [2, 3, 4, 5, 6];
const outputNum = numbers.map(n => n*3);
console.log(outputNum); 

const friends = ['Tom', 'Jane', 'Sine', 'Olive', 'Smith']
const frndLength = friends.map(frnd => frnd.length)
const frndLeter = friends.map(frnd => frnd[0])
console.log(frndLength);
console.log(frndLeter);
// Spread operator
const max = Math.max(5, 45, 48, 67, 10, 98, 14);
const num3 = [50, 45, 408, 67, 10, 98, 14];
const num4 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(max);
const arrayMax = Math.max(...num3);
console.log(arrayMax);

const num5 = [5, 6, 7, 8]
// const num6 = num5
// num5.push(9, 10);
const num6 = [ 13, 14, ...num5]
num5.push(9, 10);
num6.push(11, 12);
console.log(num5)
console.log(num6)

// object or array destructuring.....................
const actor = {
    name: 'omarjafor',
    age: 30,
    phone: '01829622667',
    money: 1005000,
    isClean: true
}
const {name, age, phone, money} = actor;
console.log(name);
console.log(age);
console.log(phone);
console.log(money);
const twoNumber = [10, 20]
const [x, y] = twoNumber;
console.log(x, y);
const [a, b] = [x, y];
console.log(a, b);

const doubeIt = (a, b) => [a*2, b*2];
const [first, secound] = doubeIt(60, 80);
console.log(first, secound);

//Keys, values, entries, delete, seal, freeze
const keys = Object.keys(actor);
const values = Object.values(actor);
const entries = Object.entries(actor);
console.log(keys);
console.log(values);
console.log(entries);
// delete actor.phone;
// console.log(actor);
const {isClean, ...restPro} = actor;
console.log(restPro);
// Object.freeze(actor)
// console.log(actor);
actor.movie = 'sadaSada';
Object.seal(actor);
console.log(actor);

// For of, For in....................
const num4 = [1, 2, 3, 4, 5, 6, 7, 8];
for(let num of num4){
    // console.log(num);
}
const nobab = 'Nobab Shirajudula Bangla Nobab';
for(let char of nobab){
    // console.log(char);
}
for(let keys in actor){
    const value = actor[keys];
    console.log(keys, value);
}
for(let key of keys){
    console.log(key);
}
for(let value of values){
    console.log(value);
}*/
// Problem No: 01
const multiple = (a, b, c) => a*b*c;
console.log(multiple(2, 3, 5));
// Problem No: 02
const threeLine = `I am a web developer.
I love to code.
I love to eat biryani`
console.log(threeLine);
// Problem No: 03
const addTwoNum = (a, b=5) => a + b;
console.log(addTwoNum(10,20));
// Problem No: 04
const friends = ['Toms', 'Janes', 'Sine', 'Olives', 'Smith']
const frnd = names => {
    return names.filter(name => name.length % 2 === 0);
}
console.log(frnd(friends));
// Problem No: 05
const num4 = [2, 3, 4];

const calculationFunc = numbers => {
    const square = numbers.map(num => num*num);
    const sum = square.reduce((a,b)=>a+b,0);
    return sum / square.length;
}
calculationFunc(num4);
// Problem No: 06
const abc1 = [2, 3, 4];
const abc2 = [5, 6, 7];

const margeTwo = (array1, array2) => {
    const array = [...array1, ...array2]
    return Math.max(...array);
}
margeTwo(abc1, abc2)

function min(nums) { return Math.min(...nums) }
console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
console.log(cube(2))

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y: 2, z: 3};
console.log(y);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const friendss = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const newFrnd = friendss.filter(friend=>friend.length==5);
console.log(newFrnd);

let p = 'Javascript';
let q = p;
p = 'React';
console.log(q);
// let isTrue = true;
console.log(!isTrue ? "hello" : "world");
if(!isTrue){
    console.log('hello');
}else{
    console.log('world');
}

const sum = (p, q) => {
    p + q;
}
const result = sum(2, 3);
console.log(result)

if ("2" === 2) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}

function work(x, y = 4) {
    return x + y;
}
console.log(work(32));
console.log(!isTrue ? "hello" : "world")