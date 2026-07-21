// --------------------------1️⃣ Basic Level (Understanding var, let, const)-----------------------------


// Declare a variable name and assign your name to it. Print it.

let name = "Afnan";
console.log(name);

// Declare a constant PI with value 3.14159. Try to change it and see what happens.4

const pi = 3.14159;
// pi = 3.14;
console.log(pi); //  Uncaught TypeError: Assignment to constant variable.

// Declare two variables x and y, assign them numbers, and print their sum.4

let m = 2;
let n = 4;
console.log(m+n);
// Create a variable without using var, let, or const — what happens? (check in "use strict" mode too)

a = 10;
console.log(a);
// Declare a variable using let inside a block and try to access it outside the block.
if(true)
{
    let x= 20;
    console.log(x);
}
// console.log(x); //Uncaught ReferenceError: x is not defined




// --------------------------2️⃣ Intermediate Level (Scoping, Hoisting, and Re-declaration)-----------------------------


// Demonstrate the difference between var and let when used in a for loop.

for(let i = 0; i < 4; i++ ){console.log(i); } //block
//console.log(i); // Uncaught ReferenceError: i is not defined 

for(var i = 0; i < 4; i++ ){}
console.log(i); //global

// Show what happens when you access a variable before declaring it using:

// var

console.log(s)
var s =15; //undefined

// let

let w =15;
console.log(w);
//let w =10; //Uncaught ReferenceError: Cannot access 'w' before initialization

// const

const b = 15;
console.log(b);
//const b = 10;  // ReferenceError: b is not defined

// Write a program to swap the values of two variables without using a third variable.

let y = 10;
let u = 20;
 y = u + y; //y = 30;
 u =  y - u; //u = 10;
 y =  y -u; // y = 20;

 console.log(u);
 console.log(y);

// Declare a variable with var inside a function and try accessing it outside the function — explain the result.

function abcd(){
  var x1 =300;
  console.log(x1);
}
abcd();
//console.log(x1); //ReferenceError: x1 is not defined

// Re-declare a variable using var, let, and const — note the differences.

var a1 = 100;
var a1 = 200; //redeclared and reassigned

let b1 = 1000;
//let b1 = 2000; // not redeclared but reassinged

const c1 = 10000;
//const c1= 20000; // not redeclared and reassigned




// --------------------------3️⃣ Advanced Level (Closures, Temporal Dead Zone, and Best Practices)-----------------------------



// Create a function that remembers how many times it was called using a variable declared inside it.

function xyz(){
    //not understood
}

// Demonstrate the temporal dead zone (TDZ) with let and const.

let abc = 1000;
console.log(abc);
//let abc = 1000; //refrence error

// Write a function that declares a variable with var inside a loop and schedules a setTimeout to print it after the loop — fix it using let.

function xyz(){
    //not understood
}

// Explain and demonstrate why const with an array still allows .push() and .pop().

const arr = [1,2,3];
console.log(arr); // because in constant we can update the value but we can't reassigned it will also applicable for object

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

// Declare variables with the same name in different scopes — show how shadowing works.

let b11 = 11;
{
    let b12 = 12;
    console.log("inner",b12)
}
    console.log("outer",b11)




// --------------------------4️⃣ Pro Level (Patterns, Memory, and Performance)-----------------------------


// Implement a singleton counter object where the value is private (can’t be changed from outside directly) but accessible via methods.

    
// Show how block scoping with let can prevent memory leaks in event listeners inside loops.

// Write code to illustrate why var in global scope becomes a property of the window object, but let and const do not.

// Demonstrate how variable declarations affect garbage collection by creating and releasing references.

// Create a function that simulates private variables using closures and explain how memory is managed.