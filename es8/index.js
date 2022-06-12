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