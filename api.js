//JavaScript Object Notation (JSON)
const people = [
    { name: 'Mina', age: 20, },
    { name: 'Rina', age: 15, },
    { name: 'Suchorita', age: 22, }
]
const stringyfy = JSON.stringify(people);
console.log(people);
console.log(stringyfy);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))