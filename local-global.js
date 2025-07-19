/*function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar);
    }
    inner();
}
outer();
let globalLet = "This is a global variable";
{
    localLet = "This is a local variable";
    console.log(globalLet);
    
}
console.log(localLet);   
var n = 10;  // Outside the function

function t() {
    var n = 20;  // Inside the function, 'n' is different
    return n  // Prints 20
}

t();
console.log(n);  // Prints 10 (the one outside the function)*/ 
myfunction();
anotherFunc();
let petName;
function myfunction() {
    let petName = "Sizzer"; 
    console.log(petName);
}
function anotherFunc() {
    let petName = "Tom"; 
    console.log(petName);
}
console.log(petName);