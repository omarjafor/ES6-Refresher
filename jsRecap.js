const fatherName = 'Jafor Ullah';
let season = 'summer';
season = 'winter';

if(fatherName==='arnold' || season ==='winter'){
    console.log('Something is true');
}else{
    console.log('Nothings is true');
}

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
console.log(student.movies[1]);
console.log(student['age']);

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
console.log(numbers);
console.log(newNum);

const product = [
    {name: 'laptop', price: 35400, brand:'dell', color:'silver'},
    {name: 'phone', price: 20150, brand:'oppo', color:'yello'},
    {name: 'watch', price: 15200, brand:'xiaomi', color:'blue'},
    {name: 'sunglass', price: 25300, brand:'haier', color:'orange'},
    {name: 'dslrcamera', price: 60100, brand:'redmi', color:'red'},
    {name: 'shoes', price: 45600, brand:'realme', color:'white'}
]

const brands = product.map(pro => pro.brand);
console.log(brands);

product.forEach(element => {
    console.log(element.name);
    console.log(element.price);
});

const lowPrice = product.filter(pro => pro.price < 25000);
console.log(lowPrice);

const specificName = product.filter(pro => pro.name.includes('n'));
console.log(specificName);