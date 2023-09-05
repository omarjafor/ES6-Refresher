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
const addSistyFive = x => x+65;
const isEven = x = x%2==0;