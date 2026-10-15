let firstname="vikas";
let lastname="chaudhary";
console.log(`My name is : ${firstname} ${lastname}`);

function fullname(firstname, lastname){
    return `${firstname} ${lastname}`;
}
 let Name=`Hello my name is : ${fullname(firstname, lastname)}`;
 console.log(Name);
 


function fullname(firstname, lastname){
    console.log(firstname);
    console.log(lastname);
    return `My name is : ${firstname} ${lastname}`;
}
console.log(fullname(firstname, lastname));