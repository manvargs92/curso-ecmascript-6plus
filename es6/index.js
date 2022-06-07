// DEFAULT PARAMS
function newFunction (name, age, country) {
    var name = name || "Manuel";
    var age = age || 30;
    var country = country || "MX";
    console.log(name, age, country);
}

// es6
function newFunction2 (name = "Manuel", age = 30, country = "MX") {
    console.log(name, age, country);
}

newFunction2(); // tomará los valores por defecto
newFunction2("Juan", 23, "CO");


// CONCATENACIÓN
let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// es6
let epicPhrase2 = `${ hello } ${ world }`
console.log(epicPhrase2);


// MULTILÍNEA
let lorem = "Curabitur euismod, ex sed porta pulvinar, nulla dui \n"
+ "aliquet felis, ut aliquam dui orci et urna.";
console.log(lorem);

// es6
let lorem2 = `Curabitur euismod, ex sed porta 
pulvinar, nulla dui 
aliquet felis, ut aliquam dui orci et urna.`;
console.log(lorem2);


// DESTRUCTURACIÓN DE OBJETOS
let person = {
    "name": "Manuel",
    "age": 30,
    "country": "MX",
};

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);


// SPREAD OPERATOR
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Juana", "Yesica", "Camila"];

let education = ["David", "Oscar", "Julian", "Ricardo", "Juana", "Yesica", "Camila"];

// es6
let education2 = ["David", ...team1, ...team2];

console.log(education);


// LET
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let"
    console.log(globalLet);
}

console.log(globalVar);


// CONST
const a = "b";
a = "a";
console.log(a);