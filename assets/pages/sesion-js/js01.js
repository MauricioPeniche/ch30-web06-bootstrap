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