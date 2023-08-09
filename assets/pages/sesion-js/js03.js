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
/* let firstname = "Lalo";
const lastname = "Garcia"; */
var age = "24";

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";


{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "verde";
    var comidaFavorita = "pozole";

    console.log(`${firstname} ${lastname}`); // Mauricio Peniche
    console.log( age); // 26
    console.log( colorFavorito); //
    console.log( comidaFavorita); //
    {
        const colorFavorito = "morado";
        console.log(colorFavorito); // morado
        console.log( firstname); // mau
        {
            console.log(colorFavorito); // morado 
            console.log( firstname); // mau
        }
    }
}

console.log(`${firstname} ${lastname}`); // Sergio Torres
console.log( age); // 26
// console.log( colorFavorito); // colorFavorito no está definido
console.log( comidaFavorita); // Pozole

//------------------ Condicional if-else -----------------------------
/*
    Ejecuta una sentencia si una condicion especifica es evaluada como verdadera. 

    Sintaxis: 
        if ( condicion ) sentencia;

        if ( condicion ) {
            sentencias;
        }

        if ( condicion ) sentencia;
        else sentencia_si_condicion_es_falsa;

        if ( condicion ) {
            sentencias;
        }
        else {
            sentencias; 
        }

        if (condicion) sentencia; 
        else if (condicion 2) sentencia;
            else sentencia_si_condicion2_es_falsa;


        if (condicion 2) sentencia2;
            else if (condicion 3) sentencia3;
                    else sentencia_si_condicion3_es_falsa;

        if ( condicion1 ) sentencias;
        else if ( condicion2 ) sentencia;
        else if ( condicion3 ) sentencia;
        else if ( condicion4 ) sentencia;
            ......
        else if ( condicionN ) sentencia;
        else condicion;

*/

        const temperatura = 29;
        let mensaje = "Temperatura de ";

        if ( temperatura === 22 ){
            mensaje += `${temperatura} grados centigrados es ideal` ; // mensaje = mensaje + nvoTxto
        }
        else if ( temperatura >= 15 && temperatura <= 21){
            mensaje += `${temperatura} grados centigrados es fria` ;
        }
        // rango de 23 a 30 -> calurosa
        else if (temperatura >= 23 && temperatura <= 30)
        {
            mensaje += `${temperatura} grados centigrados es calurosa =( `;
        }
        else {
            mensaje = `${temperatura} grados centigrados no es ideal`;
        }

        console.log(mensaje);

//----------------- Condicional Switch ---------------------------
/*
    La condicional Switch evalua una expresion y se compara con el valor de cada instancia en 'case' y se ejecutan las sentencias asociadas a ese 'case' hasta encontrar la sentencia 'break' o se finalicen todas las sentencias de la condicional switch. 
    
    Sintaxis: 
    switch (expresion) {
        case valor 1: 
            sentencia;
            break;
        case valor 2: 
            sentencias;
            break;
        case valor N:
            sentencias; 
            break;
        default; 
            sentencias; 
            break; 
    }

*/
/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida del ventilador
 */

const setVelocidadVentilador = ( velocidad = 0 )=> {
    let mensaje; 

    // la condicional switch utiliza la comparacion estricta.

    switch ( parseInt (velocidad) ) {
        case  0: 
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break; 
        case 2:
            mensaje = "velocidad media";
            break; 
        default: 
            mensaje = "el nivel no existe";
            break;
    }
    return mensaje;
}
console.log(`El ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`El ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`El ventilador está en ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`El ventilador está en ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`El ventilador está en ${setVelocidadVentilador()}`); // apagado

console.log(`El ventilador está en ${setVelocidadVentilador()}`);

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-else-if y otra con switch.

*/

 /* let numMes = prompt("Ingresa el número de mes(if-else))");
if (numMes >= 1 && numMes <= 12) {
    if (numMes == 12 || numMes <= 2) {
        alert("Estás en Invierno");
    } else if (numMes <= 5) {
        alert("Estás en Primavera");
    } else if (numMes <= 8) {
        alert("Estas en Verano");
    } else alert("Estas en Otoño")

}
else {
    alert("Ingresa un mes válido")
}
 

let numeroMes = prompt("Ingresa el número de mes (switch)");

if (numeroMes >= 1 && numeroMes <= 12) {
    switch (parseInt(numeroMes)) {
        case 12:
        case 1:
        case 2:
            alert("Estás en Invierno");
            break;
        case 3:
        case 4:
        case 5:
            alert("Estás en Primavera");
            break;
        case 6:
        case 7:
        case 8:
            alert("Estás en Verano");
            break;
        case 9:
        case 10:
        case 11:
            alert("Estás en Otoño");
            break;
        default:
            alert("Ingresa un mes válido");
    }
} else {
    alert("Ingresa un mes válido");
} */

//------------------- Operador Ternario----------------------------------
/*
    Es el único operador de JavaScript que tiene 3 operandos.
    Generalmente se utiliza como opción a la sentencia if-else. 

    Sintaxis: 
        condición ? expresiónSiCondiciónEsVerdadera : expresiónSiCondiciónEsFalsa;

*/

const pagoTarjetaCredito = false; 

let msj; 
if ( pagoTarjetaCredito ) msj= "ha realizado el pago"
else msj = "no ha realizado el pago";

console.log(`El usuario ${msj}`);