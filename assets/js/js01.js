console.log("Bienvenido a la sesion JS01 ");

// 7 Datos primitivos:
// numbers, strings, boolean, null, undefined, bigInt y symbol

// Tipos de datos en JS: 
// primitivos y no primitivos

// No primitivos
// Objetos

// Tipo de dato string
const stringData = "Holi crayoli";
console.log( stringData );

// Tipos de dato number
// numeros positivos, negativos, decimales, NaN, +Infinity, -Infinity.
// Para un salto de linea se puede utilizar \n, pero en template string esto no es necesario.
console.log( `Tipos de datos number: ${12}, ${-6 }, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0}` );
console.log( '-- \n "texto entre comillas dobles" -- ');

console.log( `Valor maximo representable en JavaScript : ${ Number.MAX_VALUE }`) // 1.7976931348623157e+308
console.log( `Si el valor es mayor a MAX_VALUE como 1.79e310: ${1.79e310}`) // Infinity 

console.log( `Valor (entero) maximo seguro en JavaScript: ${ Number.MAX_SAFE_INTEGER}`); // 9007199254740991
// Cuando se realizan operaciones que exceden los limites de MAX_SAFE_INTEGER se produce una perdida de precision

// tipos de datos BigInt
// Sirven para representar valores numericos enteros, de los que el tipo number no puede representar o no es seguro. 
console.log( "Operaciones con BigInt ")
const myBigInt = 9007199254740991n;
console.log( `MAX_SAFE_INTEGER + 1: ${ myBigInt + 1n }`)
console.log( `MAX_SAFE_INTEGER + 2: ${ myBigInt + 2n }`)
console.log( `MAX_SAFE_INTEGER + 3: ${ myBigInt + 3n }`)
console.log( `MAX_SAFE_INTEGER + 4: ${ myBigInt + 4n }`)

// Tipo de dato boolean
// Se tiene 2 estados: true / false
console.log( `Tipo de dato verdadero: ${true} `);
console.log( `Tipo de dato falso: ${false} `);

// Tipo de dato undefined
// Una variable que es declarad pero el tipo de dato no es definido. 
let myVar; 
console.group( `Tipo de dato undefined ${myVar}` );

// Tipo de dato null
// Una variable que intencionalmente se borra el tipo de dato. 
let myVarNull; // undefined
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // Undefined
myVarNull = "No me gusta YSE";
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // String 
myVarNull = null; 
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // Object
console.log(`myVarNull es null: ${ myVarNull === null }`); // true

// Tipo de dato Symbol
// Representa un valor unico  que se puede utilizar como clave en objetos o identificador unico
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log(`mySymbol === mySymbol2   ${ mySymbol === mySymbol2} `);

const myObj = {
    clave : "valor",
    [mySymbol] : 16, // se creará una clave privada, esta no se itera con un ciclo ni se almacena en LocalStorage.
    myKey : 123,
    [myKey] : 567,

}
console.log( myObj );

//------------------------------- Objetos en JavaScript
// Tipo de dato Array
const cancionesCh30 = ["Highway Star", "Trouble", "Saoko", "Rock DJ"];

// tipos de datos Object
const misDatosDePerfil = {
    name : "Mauricio",
    lastName : "Peniche",
    age: 26,
    isBelicoso: true,
    fullName : function(){
        return `Nombre completo de Mau: ${this.name} ${this.lastName}`;
        /* return "Nombre completo de Mau: " + this.name + " " + this.lastName; */
    },
    // Agregar una funcion que muestre el nombre completo en mayusculas
     fullNametoUpperCase : function(){
        return `Nombre completo de Mau: ${this.name.toUpperCase()} ${this.lastName.toUpperCase()}`;
     }
     }

/* const nombreMayus = {
    nombre : "MAURICIO",
    apellido: "PENICHE",
    nombrecompleto : function() {
        return `NOMBRE COMPLETO: ${this.nombre} ${this.apellido}`;
    }
   } */


console.log( misDatosDePerfil);
console.table( misDatosDePerfil);
console.log( misDatosDePerfil.fullName ); // f() return 'Nombre de la funcion'
console.log( misDatosDePerfil.fullName() ); // Mauricio Peniche
console.log(misDatosDePerfil.fullNametoUpperCase() );

//--------------------------------------------------------------------
// Conversion explicita de datos (Coerción de tipos)
const horaDescanso = 13.05;
console.log ("Hora Descanso " + horaDescanso + " h." ); // concatenacion
const horaDescansoTxt = String( horaDescanso );
console.log ("Hora Descanso " + horaDescansoTxt + " h." ); // concatenacion 
console.log("Hora de retrono: " + horaDescanso + .15 ); // 13.050.15

const colorVerde = 0x008000; // Representacion decimal: 32768
console.log(`El valor RGB del color verde es ${colorVerde}`); // 32768
console.log(`El valor RGB del color verde es ${ colorVerde.toString() }`); // 32768
console.log(`El valor RGB del color verde es ${ colorVerde.toString(16) }`); // 8000
console.log(`El valor RGB del color verde es #${ colorVerde.toString(16).padStart(6, "0") }`); // #008000

// Conversión a Number
const myAgeTxt = "25";
const sumatoria = 10 + myAgeTxt; // 1025
console.log(`Valor de la sumatoria ${sumatoria}` ); // 1025

console.log(`Valor de la sumatoria usando Number() ${10 + Number(myAgeTxt)}` ); // 35
console.log(`Valor de la sumatoria usando parseInt() ${10 + parseInt( myAgeTxt )}` ); // 35
console.log(`Valor de la sumatoria usando parseFloat() ${10 + parseFloat( myAgeTxt )}` ); // 35
console.log(`Valor de la sumatoria usando parseFloat() ${10 + (+myAgeTxt)}` ); // 35

// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales 
// - parseInt convierte solo la parte entera
console.log( parseInt(100.567)); // 100
// - Number devuelve NaN si la cadena contiene algun caracter no numerico
// - parseInt convierte los enteros hasta encontrar un caracter no numerico
//    Si la entrada no comienza con un valor numerico, devuelve NaN 
console.log( Number("123 - 456") ); // NaN
console.log( parseInt("123 - 456") ); // 123
console.log( parseInt("$123 - 456") ); // NaN
console.log( "parseInt( '$123 - 456'.slice(1) ) :" +  parseInt( "$123 - 456".slice(1) ) ); // 123
console.log( Number(true) ); // 1
console.log( parseInt(true) ); // NaN

// Conversion a booleano
// En la conversion de boolean los siguientes valores son false: 
// "", 0, null, undefined
console.log( "Boolean(1): " + Boolean(1) ); // true
console.log( "Boolean(1000): " + Boolean(1000) ); // true 
console.log( "Boolean('Hola'): " + Boolean("hola") ); // true
console.log( "Boolean('false'): " + Boolean("false") ); // true
console.log( "Boolean(' '): " + Boolean(" ") ); // true
console.log( "Boolean(''): " + Boolean("") ); // false

// Number 
// [] -> 0, [30] -> 30, [30, 33] -> NaN, false -> 0, true -> 1
// String
// [] -> "", 