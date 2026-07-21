// Create an object for a book (title, author, price)

let book = {
    title : "html",
    author : "afnan",
    price : 1200,
};
console.log(book);


// Access properties using both dot and bracket

let book1 = {
    title : "html",
    author : "afnan",
    price : 1200,
};
let a = "price"
// console.log(book1);
console.log(book1.title);
console.log(book1[a]);


// Write a nested object (user with address and location)

let info = {
    name : "afnan",
    age : 20,
    address:{
        city:"mumbai",
        location:{
            area:"d"
        }
    }
}
console.log(info);


// . Destructure name and age from a student object

let student = {
    name : "afnan",
    age : 20,
    address:{
        city:"mumbai",
        location:{
            area:"d"
        }
    }
}
let {name,age}= info;
console.log(name,age);


// . Loop through keys and values of an object

console.log(book1);
for ( let key in book1){
    console.log(key + " : "+book1[key]);
}


// . Convert object to array using Object.entries()

console.log(Object.entries(student));

// . Copy an object using spread operator

let obj = {
    name :"afnan"
}
let obj1 = {...obj};
console.log(obj,obj1);


// . Create a deep copy of an object with nested structure

let o= {
    name :"afnan"
}
let o1 = JSON.parse(JSON.stringify(o));
o1.name = "bhate";
console.log(o1,o)


// . Use optional chaining to safely access deep values

console.log(o1?.name);

// . Use a variable as a key using computed properties

let key = "role";
let objs ={
    name: "afnan",
    [key]: "admin"
}
console.log(objs);