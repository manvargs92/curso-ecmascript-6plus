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

/* Desestructuración sobre los parámetros de una función
const persona = {
	nombre: 'Jesus',
	apellido: 'Quinto',
	edad: 23
}

function saludar({ nombre, apellido, edad }) {
	const saludo = `Hola!, mi nombre es ${nombre} ${apellido} y tengo ${edad} años, saludos desde Venezuela`;

	console.log(saludo);
}
saludar(persona);
*/


// SPREAD OPERATOR
let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Juana", "Yesica", "Camila"];

let education = ["David", "Oscar", "Julian", "Ricardo", "Juana", "Yesica", "Camila"];

// es6
let education2 = ["David", ...team1, ...team2]; // ...array  trae todo el array para unirlo a otros valores

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


// PARÁMETROS EN OBJETOS
let nombre = "Manuel";
let edad = 30;

object = { name: nombre, age: edad };

// es6
object2 = { name, age };
console.log(object2);


// ARROW FUNCTIONS
const names = [
    {name: "Manuel", age: 30},
    {name: "Yesica", age: 27}
];

let listOfNames = names.map(function (item) { // si quisiera iterar los elementos utilizaría el método map
    console.log(item.name);
});

// es6
let listOfNames2 = names.map(item => console.log(item.name));

/* otras formas de arrow functions
const listOfNames3 = (name, age, country) => {
    ...
};

const listOfNames4 = name => {
    ...
}

const square = num => num * num;
*/


// PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Uay!");
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    // .then(console.log("Hola"))
    .catch(error => console.log(error));

// Classes
class calculator {
    // constructor, método para inicializar una clase
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valorA, valorB) {
        this.valueA = valorA;
        this.valueB = valorB;
        return this.valueA + this.valueB;
    }
}

const calcualdora = new calculator();
console.log(calcualdora.sumar(2, 2));


// MÓDULOS
import { hello } from "./module";
hello();


// GENERADORES
function* helloWorld() { // function* para indicar que se trata de un generador
    if (true) {
        yield "Hello "; // yield guarda el estado de forma interna
    }
    if (true) {
        yield "World!!"
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value); // .next() por cada paso del generador que se desee ejecutar
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);