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
