console.log("Sesion JS06 Manipulacion del DOM");

/**
 * Modificar un elemento HTML por medio de su ID 
 */
const findElementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log( typeof title ); // Object
    console.log( title.innerHTML );
    
}

findElementById()