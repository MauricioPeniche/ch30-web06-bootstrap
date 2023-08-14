console.log("Sesion JS06 Manipulacion del DOM");

/**
 * Modificar un elemento HTML por medio de su ID 
 */
const findElementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log( typeof title ); // Object
    console.log( title.innerHTML ); // Sesion X 
    //title.innerHTML = `Generation - Sesión JS 06`;
    title.innerHTML = ` <span class="text-primary"> Generation </span> - Sesión JS 06`;
}

findElementById()

//----------------Encontrar elementos por su etiqueta-------------------

const changeElementsByTagName = () => {
    const unorderedList = document.getElementsByTagName("li"); // Coleccion de Elementos
    console.log( unorderedList ); // HTML Collection

    for (const listItem of unorderedList) {
        listItem.innerHTML = `<span class="text-success fs-4"> ${listItem.innerHTML} 🛸 </span>`
    }

}

changeElementsByTagName();

//------------------- Uso de selector universal-------------------------
// querySelector

const findElementByQuerySelector = () => { 
   // const element = document.querySelector( "#title" ); // Seleccionar por ID
   // const element = document.querySelector( ".text-warning" ); // Seleccionar por clase
   // const element = document.querySelector( "ul" ); // Seleccionar por tag
   // const element = document.querySelector( "li" ); // Seleccionar por tag
   const element = document.querySelector( "h1 span" ); // Seleccionar por tag
    console.log( element );

}

findElementByQuerySelector();

//--------------- Crear nuevo elemento HTML --------------------------
// appendChild

const newElement = () =>{
    const newElement = document.createElement ("div"); // <div>    </div>

    newElement.innerHTML = `La Ch30 le gusta:
     <ul>
        <li> El Helado </li>
        <li> El Chisme </li>
        <li> Los corridos tumbados </li>
        <li> Escuchar a Mau </li>
        <li> Ser mejores amigos de Anneth </li>
     </ul>
    `;

    const descriptionCh30 = document.querySelector("#descriptionCh30");
    descriptionCh30.appendChild( newElement );
}

newElement();