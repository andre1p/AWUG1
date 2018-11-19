// Array.map

const stars = (n) => {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += "*";
    }
    return result;
}

let a = [1, 2, 3, 4, 5];

console.log(a.map(x => x/10));

// Array. filter
let filteredA = a.filter(x => x % 2 == 0);

let users =[
    {name: "James Bond", age: 27},
    {name: "M", age: 57},
];

console.log(filteredA);
console.log(users.filter(user => user.age < 30));