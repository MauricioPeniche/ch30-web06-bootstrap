console.log("Sesion JS04 matrices y bucles")


// Declaramos un arreglo de 2 dimensiones (matriz).
// Arrays anidados
// [   [] , [], []   ]

const personasEnCh30 = [ 
    [ "Luis", "Allan", "Anneth", "Maryluz" ],  /* ByteMe */
    [ "Ed", "Jimena", "Marifer", "Leo", "Alejandro"],  /* PerryCode */
    [ "Lu", "Leo", "Daniel", "Gina"],  /* BugBuster */
];

console.log(`Integrantes de BugBusters: ${ personasEnCh30[2] }`); // Lu,Leo,Daniel,Gina
console.log(`Integrantes de BugBusters: ${ personasEnCh30[2].join(", ") }`); // Lu, Leo, Daniel, Gina

console.log(`BugBusters integrante n. 1: ${ personasEnCh30[2][0] }`); // Lu

// En la historia Leo tiene exceso de amonestaciones
// Hay que reemplazar el nombre de Leo en PerryCode por Brayan

personasEnCh30[1].splice(3, 1, "Brayan");
console.table( personasEnCh30 ); 

//----------------- Iterando todos los elementos-------------------------

for (let equipo = 0; equipo < personasEnCh30.length /*filas*/; equipo++) {
    for (let persona = 0; persona <  personasEnCh30[ equipo ].length; persona++) {
        console.log( personasEnCh30[ equipo ][ persona ] );        
    }    
}

console.log( personasEnCh30[0][2] ); // Anneth

    // Este for itera sobre los equipos integradores
    for (let equipo = 0; equipo <  personasEnCh30.length  ; equipo++) {  
    console.log(`Equipo ${equipo} : ${personasEnCh30[equipo]}` )  ;
    
    // Este for itera sobre las personas
    for( let persona = 0; persona < personasEnCh30[equipo].length ; persona++ ){
     console.log(`Participante: ${ personasEnCh30[equipo][ persona ] }`);
    } 
}

//----------------- Uso de for... of ---------------------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable ()
    Sintaxis: 

    for (const iterator of object) {
        
    }

*/

console.table( personasEnCh30 );

const myPet = "Kraken";
for (const character of myPet) {
    console.log( character );
}
// Refactorizar lo anterior con for each 



for (const equipo of personasEnCh30) {
    console.log( equipo ); // Arreglo de equipos.
    for (const persona of equipo) {
        console.log( persona ); // Persona de cada equipo
    }
}

//--------------------- forEach -----------------------------------------
/* 
    Método que se utiliza para iterar colecciones, arreglos. 
    Permite ejecutar  

*/
console.table( personasEnCh30 );

function iterarEquipos( equipo, indice, arreglo ){
    console.log(`Indice ${indice}: ${equipo} }` )
    equipo.forEach( iterarPersonas )
    return equipo; // arreglo de cada equipo integrador 
}

function iterarPersonas( persona, indice ){
    console.log(`Indice P ${indice}: ${persona} `)
    return persona; 
    }


// personasEnCh30.forEach( iterarEquipos ); 

personasEnCh30.forEach( (equipo, indexEquipo) =>
             equipo.forEach( (persona, indexPer)=> 
             console.log(` [${indexEquipo}][${indexPer}] : ${persona}`)));

// Solo se imprime el elemento (persona)

// Realizar tablas de multiplicar del 1 al 5 con for tradicional
/* 
    1 * 1 = 1
    1 * 2 = 2
    ...
    5 * 9 = 45 
    5 * 10 = 50
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${ i * j }`);
        
    }    
}

console.log("===== Uso de break =========")
// Realizar la multiplicacion hasta el 4
// 1*1, 1*2, 1*3, 1*4...... 5*3, 5*4
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        if ( j === 5 ) break; 
        console.log(`${i} * ${j} = ${ i * j }`);
    }    
}

console.log("===== Uso de break con tag =========")
// Realizar la multiplicacion hasta el 2*4
// 1*1, 1*2, 1*3, 1*4...... 2*3, 2*4
rompeCicloSuperior: 
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 10; j++) {
        if ( i===2 && j==5 ) break rompeCicloSuperior; 
        console.log(`${i} * ${j} = ${ i * j }`);
    }    
}


// -------------------- Uso de continue ----------------------------------
/*
    Termina la ejecucion en la iteracion actual y continua con la proxima iteracion (o en el tag que se indique). 
*/

console.log("===== Uso de continue con tag =========")
// Realizar la multiplicacion hasta el 3
// 1*1, 1*2, 1*3, ...... 2*3... 5*3
continuaCicloSuperior: 
for (let i = 1; i <= 5; i++) {    
    for (let j = 1; j <= 10; j++) {
        if ( j > 3 ) continue continuaCicloSuperior;
        console.log(`${i} * ${j} = ${ i * j }`);        
    }    
}

// ------------------ Ciclo while ----------------------------------------
/* Crea un bucle que ejecuta una sentencia mientras la condicion especificada se cumpla.

Sintaxis: 
    while( condicion) sentencia;

    while( condicion ){
        sentencias;
    }

*/

/* let counter = 1; 

while ( confirm("¿Quieres continuar?") ){
    console.log(`Veces que has continuado: ${counter}`);
    counter ++;
} */

// ------------------ Ciclo Do... while ----------------------------------------
/* Crea un bucle que ejecuta una sentencia mientras la condicion especificada se cumpla. La evaluacion se realiza despues de ejecutar la sentencia. Por lo tanto, la sentencia se va a ejecutar por lo menos una vez.

Sintaxis: 
   
    do {
        sentencias;
    } while( condicion );

*/

let valor = -2; 
while (valor < 5) {
    console.log(`Valor en While ${valor}`) // -2, -1, 0 ... 4
    valor ++;
}

valor = 4;
do {
    console.log(`Valor en do-while ${valor} `); // 4
    valor++;
} while ( valor < 5); 