console.log("Sesión JS05 Condiciones y expresiones");

//---------------Operadores Aritméticos------------------------------
/*  adición +
    multiplicación *
    substracción -
    división /
    resto %
    exponencial ** - Math.pow(2, 3) 2**3
 */

// ---------- Precedencia de operadores -----------------------------------
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let operaciones = 5 * 2 + 3 ** 2 - 4; // 15
console.log( operaciones );
console.log( 4 % 3 + 2 * 3 / 2 - 1 ); // 3

//------------------ Operadores de asignación ---------------------------------
/*
    Asigna un valor a su operador izquierdo basandose en el valor de su operador derecho:

    asignación =

    Operadores abreviados ( compuestos )
      op1 += op2 -> op1 = op1 + op2
      op1 -= op2 -> op1 = op1 - op2
      op1 *= op2 -> op1 = op1 * op2

*/
let asignacion = 3 
console.log( asignacion += 3 * 3 ** 3 + 10 ); // 94 
console.log ( asignacion ); // 94
console.log( asignacion += 3 * (3 ** 3) + 10 ); // += 94 + 91 = 185
console.log( 2 ** 3 ** 2 ); //  512

//------------------------ Operadores Unarios ---------------------------
// Solo actuan sobre un operando
// Negacion 
let numero = 3 
let dinero = - numero; // -3

// Conversion numerica 
let pago = + dinero; // -3 No se le cambia el signo
let intereses = + "5.23"; // 5.23 numerico
console.log( typeof(intereses) ); // number
intereses = 3;
console.log( intereses += 5 + + "3"); // 11

// Operador lógico not 
let isActive = !true; // false 

// Operador de incremento y decremento en unidad. 
/* 

    Operador de pre-incremento y pre-decremento
        ++ valor
        -- valor

    Operador de post-incremento y post-decremento
    valor ++
    valor --

*/

let number = 10; 
++ number; 
console.log( number ); // 11
number ++, 
console.log( number ); // 12

number = 20; 
console.log( ++ number ); // 21
console.log( number ++ ); // 21
console.log( number ); // 22

let index = 0;
for (   ; index < 5; index++) {
    console.log(index);
}
console.log( "valor index " + index ); // 5

let a = 0, b = 0; 
for ( ; a < 3; b = a++) {
    console.log( a, b);
}
console.log(a, b); // 3 - 2 

let x = 3; 
let y = ++x; 
console.log(`x : ${ x++ } y: ${ ++y }`); // 4, 5
console.log(`x : ${ x } y: ${ y }`); // 5, 5