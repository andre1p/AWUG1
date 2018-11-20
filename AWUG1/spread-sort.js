/// Spread operator

let a1 =["a","b","c", "d", "e"];
let a2 = [0.1,0.2,0.3];

let b1 = [...a1, "f", "g", "h"];
let c1 = [...a1, 1001, ...a2, false, true];

console.log(b1);
console.log(c1);

/// Spread operator for objects

let user = {
    name: "James Bond",
    age: 27,
}
let user2 = {...user, active: true};
let user3 = {...user, age: 31};

console.log(user);
console.log(user2);
console.log(user3);