// Create a greet function with default name

function greet(gr="hi"){
    console.log(gr);
}
greet();

// Sum all numbers using rest parameter

function rest(...val){

}
rest(1,2,3);

// Write a BMI calculator function

function hw(wieght,height){
    let bmi= wieght / (height * height);
    return bmi;
}

console.log(hw(40,1.2).toFixed(2));

// Create a closure counter function

function abc(){
    let a = 20;
    return function(){
        console.log(a);
    }
}
let op = abc();

op();

// Write a function that returns another function

function a(){
    return function(){

    };
}


// Use IIFE to show welcome message

(function welcome(val){
    console.log("welcome",val)
})(10); 


// Create a closure counter function

function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count); 
    }
}
let counter = outer();
counter();
counter();
counter();

// Use a function to log even numbers in array

// function en(){
//     for(let i =1;i<=20;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }
// en();

// ----------------

function logEvenNumbers(arr) {
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

// Example usage
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
logEvenNumbers(numbers);

// ----------------

// function evenarray(arr){
//     for(let num of arr){
//         if(num%2==0){
//             console.log(i);
//         }
//     }
// }

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// evenarray();

// ----------------

// Create a pure function to add tax


function tax(p,t){
    return p + (p*t);
}
let taxrate = tax(100,0.1);
console.log(taxrate);

// Write a discount calculator (HOF style)

function discount(disc){
    return function(price){
        return price - price * (disc/100);

    }
}
let discounter = discount(10);
console.log(discounter(200));

// Sum all numbers using rest parameter

function sum(...score){
    let total = 0;
    score.forEach(function(val){
        total = total + val;
    })
console.log(total);

}

sum(10,20,30,10,60);

// Make a toUpperCase transformer using HOF

function upper(msg){
    return msg.toUpperCase();
}

function change(cng){
    console.log(cng("hello afnan"));
}

change(upper);