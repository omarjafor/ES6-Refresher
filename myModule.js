export let text = "Welcome To JS Module ES6";

export function setText(txt){
    text = txt;
}

export {text as message}

