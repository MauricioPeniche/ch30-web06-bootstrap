console.log("Sesión JS 03 Control de flujo");
console.log("No olvidaremos el reto a Ed");

//----------- Declaracion de bloque de codigo---------
/* 
    Sintaxis: 
            {

            }
    Las variables declaradas con let y const solo tendrán alcance (scope) dentro del bloque o bloques anidados

    Si la variable en el bloque tiene el mismo nombre que una variable fuera del bloque se le da prioridad a la variable dentro del bloque,

*/

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";

{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    console.log(`${firstname} ${lastname}`); // Mauricio Peniche
    console.log( age); // 26
}

console.log(`${firstname} ${lastname}`); // Mauricio Peniche
console.log( age); // 26