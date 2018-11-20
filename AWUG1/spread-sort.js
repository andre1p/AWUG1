// Spread operator

let a1 = ["a", "b", "c", "d", "e"];
let a2 = [0.1, 0.2, 0.3];
let b1 = [...a1, "f", "g", "h"];
let c1 = [...a1, 1001, ...a2, false, true];
//console.log(b1);
//console.log(c1);

// Spread operator for objects

let user = {
    name: "James Bond",
    age: 27,
}
let user2 = { ...user, active: true };
let user3 = { ...user, age: 31 };
//console.log(user);
//console.log(user2);
//console.log(user3);

//Creating an Array with spread...

let A = [...new Array(50)].map((_, index) => index + 1);
//console.log(A);

// Sort method
let x = [5, 1, 8, 4, 10, -3, 100, 1001];
x.sort((a, b) => a - b);
console.log(x);

let fruits = [
    { name: "orange", price: 2.5 },
    { name: "pear", price: 1.7 },
    { name: "kiwi", price: 5.7 }
];
fruits.sort((a, b) => b.price - a.price);
console.log(fruits);