export let text = "Welcome To JS Module ES6";

export function setText(txt){
    text = txt;
}

export {text as message}

const person = {
    name : "Omarjaber",
    age : 28,
    mobile : "01829622667"
}
export default person;