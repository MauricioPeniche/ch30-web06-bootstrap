console.log("Sesión JS02 Uso de funciones");

/*

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.

  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

sintaxis: 
 function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
console.log( multiplica(4, 3));

function multiplica(a, b){
    return a * b;
}

/*
------------------Funciones expresadas ---------------------------------------
                  (Function expressions)

    Son funciones declaradas dentro de la asignación de una variable. Estas funciones pueden ser anónimas ( no tienen nombre )
    Las funciones expresadas no teinen hoisting, por que no se carga en memoria hasta que se utilice. 

    sintaxis: 
          const nombreVariable = function nombreFuncion (parametros){
            instrucciones;
          };
*/

const sum = function sumatoria(a, b){
  return a + b;
}
  
console.log( `El resultado de 4 + 2 : ${ sum(4,2) }`);

let saludo; // undefined
const localidad = "Tlaxcala";

if ( localidad == "Buenos Aires"){
  saludo = function ( name ) { return `Holis ${name}`};
 }
else {
  saludo = function ( name ) { return `Buenos dias ${name} `};
}

console.log( saludo("Sergio"));
console.log( saludo("David"));

/*
---------------- Funciones autoinvocadas --------------
                (self-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis: 
  (function (parámetros ) {} )( argumentos );

*/
( function( name ){
    console.log(`Me llamo ${name} y me autoinvoco`);
} )( "ChatGPT" ); 

/*
--------------- Funciones flecha --------------------------
                (arrow functions)
Funciones similares a las funciones expresadas pero: 
  - No requiere la palabra reservada function
  - Si tiene una sola instruccion no requiere las llaves {}
  - Si la instruccion es el mismo retorno, no requiere la palabra retorno. 

  sintaxis: 
      const nombreVariable = (parametros) => instruccion;

      const nombreVariable = (parametros) => {
        instruccion;
        return expresion;
      }
*/

/* const areaRectangulo = function (base, altura){
  return base * altura;
}
 */
const areaRectangulo = (base, altura) => base * altura;

console.log(`El area es: ${ areaRectangulo(3, 9)} m2.`);

/*
---------------Parametros por defecto---------------------
              (default parameters)
Inicializa un parametro de la funcion, si no se envia el argumento cuando se invoca. 

*/

// Funcion flecha que realice el area de un triangulo
/** 
 * Calcura el area de un triangulo
 * @param {number} base 
 * @param {number} altura 
 * @returns {number} base * altura / 2
 */
const areaTriangulo = (base = 1, altura = 1) => base * altura /2.0;

console.log(`El area es: ${ areaTriangulo(4, 12)} m2.`);
console.log(`El area es: ${ areaTriangulo()} m2.`); // 0.5
console.log(`El area es: ${ areaTriangulo(10)} m2.`); // 5
console.log( (1000).toString() ); // conversion base 10 -> 1000
console.log( (1000).toString(2) ); // conversion base 2 -> 1111101000
console.log( (1000).toString(16) ); // conversion base 16 -> 3e8

/*
-----------------------Parametros rest-----------------------------
                      (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos.
Esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de parametros. 

Sintaxis: 
        ...nombreParametros

*/
const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;

    for (let i = 0; i < rest.length; i++){
      /* suma = suma + rest[i]; */
      suma += rest[i];
    }
    return suma;
   }

console.log(`Sumatoria de multiples numeros: ${ sumatoriaMultiplesNumeros(2, 5)}`); // 7
console.log(`Sumatoria de multiples numeros: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9)}`); // 26
console.log(`Sumatoria de multiples numeros: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9, 20, 10)}`); // 56
console.log(`Sumatoria de multiples numeros: ${ sumatoriaMultiplesNumeros(2)}`); // 2

/*
-----------------------Funciones de Callback------------------------


*/