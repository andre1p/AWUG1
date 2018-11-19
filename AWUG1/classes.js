// Classes

class Agent{
    constructor(name, age, number){
        this.name = name;
        this.age = age;
        this.number = number;
    }
    growUp(nyears){
        this.age += nyears;
    }
}

let a = new Agent("James Bond", 27, 7);
a.growUp(1);
console.log(a);

//bind

let grow = a.growUp;
//grow(1); //Call through a reference

//Inheritance

class Animal{
    constructor(type){
        this.type = type;
    }
    makeSound(){
        console.log("<The animal made an *empty* sound>");
    }
    move(){
        console.log("The "+ this.type +" moved.");
    }
}

class Dog extends Animal {
    constructor(name){
        super("dog");
        this.name = name;
    }
    makeSound(){
        console.log("Woof! Woof!");
    }
}

a = new Animal();
let d = new Dog("Milú");
a.makeSound();
a.move();
d.makeSound();
d.move();
let move = d.move.bind(d);
move();

// bind usede in standalone functions

function f(){
    console.log("The message is: " +this.message);
}
var envelope = {
    message: "Let's meet at 4pm",
};
let boundf = f.bind(envelope);
boundf();

