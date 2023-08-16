console.log("Sesion JS07 - Promise");
/* 

    La promesa es un patron asincronico que se utiliza para manejar operaciones asincronas.

    Las promesas permiten realizar tareas asincronas y manejar los resultados (exito o error) en un momento posterior. 

    Las promesas tienen 3 estados. 

    1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace.
    2.- Resolve: La promesa se resuelve con un valor. 
    3.- Rejected: La promesa se rechaza con una razon.

    Resolve y Reject son funciones de callback. 
    Para crear una promesa se usa el constructor de la clase Promise.

Sintaxis: 
    const pinkyPromise = new Promise ( fncCallback );

*/

// const pinkyPromise = new Promise (  ()=> {}  );
// const pinkyPromise = new Promise ( ( fncCallbackResolve, fncCallbackReject )=>{} );
const pinkyPromise = new Promise ( ( fncCallbackResolve, fncCallbackReject )=> {
    const menorEdad = true; 

    if( menorEdad )
        fncCallbackResolve("Hay que estar siempre juntos");
    else
        fncCallbackReject( { code: 404, message : "Ni te topo" } );

}  );

// Consumir las promesas
// Se usa los metodos the, catch y finally*

console.log("--------> Promesas <----------");
console.log("01 - Antes de consumir la promesa");

// pinkyPromise(); // pinkyPromise is not a function;
// pinkyPromise.then().catch().finally();

/* pinkyPromise
    .then( ( )=>  ) // Se ejecuta una funcion de callback si la promesa fue resuelta 
    .catch( ( error )=> )  // Se ejecuta una funcion de callback si la promesa fue rechazada
    .finally( ()=> ); // Se ejecuta una funcion de callback despues de que la promesa fue resuelta o rechazada. 
 */


pinkyPromise
    .then( ( response )=> console.log(`Promesa Resuelta ${response}`) ) 
    .catch( ( error )=> console.log(`Promesa Rechazada ${error.message}`) ) 
    .finally( ()=> console.log("Se ha terminado de procesar la promesa")); 

    
console.log("03 - Despues de consumir la promesa");
