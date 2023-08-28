//JavaScript Object Notation (JSON)
const people = [
    { name: 'Mina', age: 20, },
    { name: 'Rina', age: 15, },
    { name: 'Suchorita', age: 22, }
]
const stringyfy = JSON.stringify(people);
// console.log(people);
// console.log(stringyfy);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function displayUsers(datas) {
    console.log(datas);
}

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(datas) {
    const ul = document.getElementById('user-list');
    for (const data of datas) {
        console.log(data.username)
        const li = document.createElement('li');
        li.innerText = data.username
        ul.appendChild(li);
    }
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(datas) {
    const postcontainer = document.getElementById('posts-container');
    let i = 0;
    for (const post of datas) {
        while(i<10){
            const div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `
            <h4>User: ${post.userId} </h4>
            <h5>Post: ${post.title} </h5>
            <p>Post Description: ${post.body} </p>
        `;
            postcontainer.appendChild(div);
            i++
        }
    }
}
loadPosts()

function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(datas) {
    const postcontainer = document.getElementById('todos-container');
    let i = 0;
    for (const post of datas) {
        while (i < 10) {
            const div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `
            <h4>User: ${post.userId} </h4>
            <h5>Post: ${post.title} </h5>
            <p>Post Description: ${post.body} </p>
        `;
            postcontainer.appendChild(div);
            i++
        }
    }
}
loadTodos()

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];
console.log(dreamGirl[0].sokina.contactInfo[1].instagram)
