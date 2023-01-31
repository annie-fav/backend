// ECMA 6

/* class Empleado {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }

    actualizarSueldo(porcentaje) {
        this.sueldo *= porcentaje
    }

    get consultarSueldo() {
        return this.sueldo
    }

    set modificarSueldo(nuevoSueldo) {
        this.sueldo = nuevoSueldo
    }

}

const empleado1 = new Empleado("Pedro", "Parker", 20, 120000)

// empleado1.sueldo = 10000
// console.log(empleado1.sueldo);

empleado1.sueldo = 7000
console.log(empleado1.sueldo)


// ECMA 7

console.log(Math.pow(5,3));
console.log(5**3);

const nombre = ['Fran', 'Mateo', 'Lola'];
console.log(nombre.includes('Elisa')); // busca un elemento en el array



// ECMA 8

const libro = {
    nombre: "Pedro de la mar",
    editorial: "La espanola",
    autor: "Sancho Panza",
    año: 2021,
    precio: 300,
    stock: 10
}

console.log(Object.keys(libro)); 
console.log(Object.values(libro));
console.log(Object.entries(libro));
console.log({...libro});



// ECMA 9

// Operador spread

const libro9 = {
    nombre: "Pedro de la mar",
    editorial: "La espanola",
    autor: "Sancho Panza",
    año: 2021,
    precio: 300,
    stock: 10
}

const libro2 = {...libro9} // copia del objeto

// Operador rest => referencia a n cantidad de parametros en un array
function sumar(...num) {
    return num.reduce((a, b) => a + b, 0)
}

sumar(1, 2, 3, 5, 6, 7, 8, 9);



// ECMA 10

// String.trim => elimina los espacios de una cadena innecesarios

const nombres = " Francisco"
console.log(nombres.trim())

// Array.flat => Remueve anidaciones internas en array para dejar un arreglo plano 

const facturas = [20000, [40000, 22000, 5000], 9000, [70000, 30000]]
console.log(facturas.flat().reduce((a, b) => a+ b, 0));

// Importaciones dinamicas (van dentro del if por ejemplo)

// import {} from ''
const user = true;
if (user) {
   import('ruta').then(contenido => console.log(contenido)) // importacion si el usuario es valido
} else {
   // contenido si user no es valido
}

*/

// ECMA 11

//Operador nullish = ?? 

const facturas2 = [20000, [40000, 22000, 5000, [undefined]], 9000, [70000, 30000]]
console.log(facturas2.flat().map(factura => factura = factura ?? 0).reduce((a, b) => a+ b, 0))


//Variables privadas

class Empleado {
    #sueldo // propiedad privada
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.#sueldo = sueldo
    }

    actualizarSueldo(porcentaje) {
        this.#sueldo *= porcentaje
    }

    get consultarSueldo() {
        return this.#sueldo
    }

    set modificarSueldo(nuevoSueldo) {
        this.#sueldo = nuevoSueldo
    }

}

const empleado1 = new Empleado("Pedro", "Parker", 20, 120000)
// empleado1.sueldo = 10 // crea una propiedad con un nuevo valor
console.log(empleado1.sueldo) // no aparece porque es privado
console.log(empleado1.consultarSueldo) // aparece por el metodo get




// ECMA 12

