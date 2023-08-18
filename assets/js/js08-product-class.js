
/**
 * Clase productos
 * El nombre de las clases se realizancon UpperCamelCase
 */
class Products{
    // El método constructor nos ayuda a instanciar un objeto
    constructor( id, name, image){
        this.name = name; // creando el atributo name y le asignamos el valor de parámetro name
        this.id = id;
        this.createdAt = new Date().getTime();
        this.image = image || "https://cdn7.kiwilimon.com/recetaimagen/21383/10752.jpg"
        // console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
    }

    lifeSpan(){
        return new Date().getTime() - this.createdAt;
    }
}

// usando la palabra reservada extends podemos heredar de otra clase:
class TapiocaProduct extends Products {
    // para encapsular un elemento, le agregamos el nombre 
    #atributoEncapsulado

    constructor( id, name, image, ingredients ) {
        // invocando al método constructor
        // super invoca a los atributos y métodos de la clase superior
        super(id, name, image); // invoca al constructor de Products
        this.ingredients = Arr.isArray( ingredients) ? ingredients: [] ; 
        this.#atributoEncapsulado = "Solamente tengo acceso dentro de la clase";
    }
}


// exportar las clases, funciones, variables, etc.
export { Products, TapiocaProduct };