function hello() {
    console.log("Hello, World!");
}  
let Hello = function() {
    console.log("Hello, World!");
}
Hello();

console.log("now by arror function !!");
let Hello1 = () => {
    console.log("Hello, World!");
}
Hello1();

let hello2 = (name) => {
    console.log(`Hello, ${name}!`);
}
hello2("World");

let hello3 = (firstname, lastname) => `Hello, ${firstname} ${lastname}!`;
console.log(hello3("vikas", "chaudhary"));