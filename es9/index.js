// const { rejects } = require("assert");

// Destructuring de obejtos
const obj = {
    name: "Manuel",
    age: 30,
    contry: "MX"
};

let { name, ...all } = obj; // sacamos la llave "name" del objeto
let { country, ...all2 } = obj; // sacamos la llave "country" del objeto
console.log(name, all);
console.log(all2);

const obj2 = {
    ...obj, // insertar los valores de un objeto dentro de otro
    hobby: "Videogames"
};

console.log(obj2);

// RESOLVE REJECT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        // ? resolve("Hello World")
        ? setTimeout(() => resolve("Hello World"), 3000)
        : reject(new Error("Test Error"))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizó"));


// MEJORA DEL REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-02");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);