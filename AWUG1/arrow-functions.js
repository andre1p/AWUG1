//Destructuring
let theRecipeIWantToCookTonight = {
    name: "Tortilla de Patata",
    minutes: 45,
};

let { name, minutes } = theRecipeIWantToCookTonight;
console.log("Recipe: " + name + " (" + minutes + " minutes).");

// Destructuring in functions
function cookRecipe({ name, minutes }) {
    console.log("Cook: " + name + " for " + minutes + " minutes.");
}

cookRecipe({ name: "Gazpacho", minutes: 30 });

//String templating

let title = `Cook: ${name} for ${2 * minutes} minutes.`;
console.log(title);

//Arrow functions
let sum = function (a, b) { return a + b; }
let sum_arrow = (a, b) => a + b;  //Shorter version of above line

let negate = function (x) { return !x; }
let negate_arrow = x => !x; //Shorter version of above line

let five = function () { return 5; }
let five_arrow = () => 5; //Shorter version of above line

let message = (text) => {
    console.log(`----------------------`);
    console.log(`The message is ${text}`);
    console.log(`----------------------`);
}

let new_user = (name, password) => ({
    name: name,
    password: password,
});

//Boolean shortcircuit

let sunny = () =>{
    console.log("Sunny was called!!!");
    return true;
}

let it_will_rain = (true && !sunny());
let it_will_be_sunny = (false || sunny());