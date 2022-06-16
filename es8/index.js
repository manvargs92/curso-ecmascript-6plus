// TRANSFORMAR OBEJTOS EN MATRICES
const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const entries = Object.entries(data); // .entries() convierte un objeto en una matriz
console.log(entries);
console.log(entries.length);


// OBTENER SOLO LOS VALORES DE UN OBJETO
const values = Object.values(data); // .values() ignora las llaves y devuelve solo sus valores
console.log(values);
console.log(values.length);


// PADDING
const string = "Hello";
console.log(string.padStart(7, "hi")); // .padStart(max caract, letras a agregar) añade mas letras a un string
console.log(string.padEnd(12, " -----"));
console.log("food".padEnd(12, " -----"));

// ASYNC AWAIT
const hellowWorld = function () {
    return new Promise(function (resolve, reject) {
        (true) 
        ? setTimeout(function () {
            resolve("Hello World");
        }, 3000)
        : reject(new Error("Test Error"));
    });
};

const helloAsync = async function () {
    const hello = await hellowWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async function () {
    try {
        const hellow = await hellowWorld();
        console.log(hellow);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();