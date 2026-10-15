function sum(...value)
{
    console.log(value)
}
sum(10,20);
sum(10,100,100);

function sum(name,...value)
{
    let total=0;
    for(let n of value)
    {
        total= total+n;

    }
    console.log("name:",name);
    console.log("total:",total);
}
