// const fatherName = 'Jafor Ullah';
// let season = 'summer';
// season = 'winter';

// if(fatherName==='arnold' || season ==='winter'){
//     console.log('Something is true');
// }else{
//     console.log('Nothings is true');
// }

const numbers = [89, 45, 85, 95, 15];
numbers[1] = 65;

for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i]);
}

function multiply(num1, num2){
    return num1*num2;
}

const student = {
    name: 'Shakib Alom',
    age: 32,
    movies: ['jokkor bokkor', 'priyotoma', 'dhakarpola']
}
// console.log(student.movies[1]);
// console.log(student['age']);

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also like some movies ${student.movies[1]}`;

const getFiftyFive = () => 55;
const addSistyFive = x => x + 65;
const isEven = x => x % 2 == 0;
const addAll = (x, y, z) => x+y+z;
const doMath = (x, y, z) => {
    const add = x+y+z;
    const sub = x-y-z;
    return add+sub;
}

const newNum = [...numbers, 12];
// console.log(numbers);
// console.log(newNum);

const product = [
    {name: 'laptop', price: 35400, brand:'dell', color:'silver'},
    {name: 'phone', price: 20150, brand:'oppo', color:'yello'},
    {name: 'watch', price: 15200, brand:'xiaomi', color:'blue'},
    {name: 'sunglass', price: 25300, brand:'haier', color:'orange'},
    {name: 'dslrcamera', price: 60100, brand:'redmi', color:'red'},
    {name: 'shoes', price: 45600, brand:'realme', color:'white'}
]

const brands = product.map(pro => pro.brand);
// console.log(brands);

product.forEach(element => {
    // console.log(element.name);
    // console.log(element.price);
});

const lowPrice = product.filter(pro => pro.price < 25000);
// console.log(lowPrice);

const specificName = product.filter(pro => pro.name.includes('z'));
console.log(specificName);

const specialName = product.find(pro => pro.name.includes('n'));
// console.log(specialName);

const [x, y] = numbers;
const [aMovie, bMovie] = student.movies;
// console.log(x, y);

const studentJson = JSON.stringify(student);
const studentObj = JSON.parse(studentJson);
// console.log(studentJson);
// console.log(studentObj);

// fetch(url)
// .then(res => res.json())
// .then(data => data);

const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

for (let key in student){
    console.log( key, student[key])
}

const newStudent = {name: 'Hero Alom', age: 32, movies:['chudur budur', 'houmaou', 'jaloporao']}
const allStudent = [...product, newStudent];
console.log(allStudent);

// truthy = 'anystring', 5, true, {}, [] ===> checked(truthy)
// falsy = '', 0, false, null, undefined ===> checked(!falsy)

const money = 120;
let food = money > 100 ? 'biriyani khabo' : 'cha nasta butter bon khabo';
console.log(food);

let numm = [];
const newNumm = numm.forEach(n=>n*2);
console.log(newNumm);

const name = 'Hero';
const age = 34;
const country = 'Bangladesh';
// const person = { name, age, country }; 
// console.log(person[name]);

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
console.log(ratName);

let person = null;
console.log(person ? person : "person is null");

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);

let greeting;
greetign = {};
console.log(greetign);

function sum(a, b) {
    return a + b;
}

console.log(sum(1, "2"));

const food5 = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food5);

function sayHi(name) {
    return `Hi there, ${name}`;
}

console.log(sayHi());

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
    if (num) count += 1;
});

console.log(count);