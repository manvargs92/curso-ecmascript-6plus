// INCLUDES
let numbers = [1,2,3,7,8];

if (numbers.includes(9)) {  // .includes() para saber si un valor se encuentra en un array
    console.log("Sí se encuentra al valor 7.");
} else {
    console.log("No se encuentra.");
}


// ELEVAR A UNA POTENCIA
let base = 4;
let exponent = 3;
let result = base ** exponent; // ** para elevar a potencia

console.log(result);