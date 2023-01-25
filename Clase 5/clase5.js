
// Id unicos auto incrementable
// class Persona {
//     constructor(nombre, apellido) {
//         this.nombre = nombre
//         this.apellido = apellido
//         this.id = Persona.addId()
//     }
//     static addId() {
//         if(this.idIncrement) {    // Si no existe, retorna undefined
//            this.idIncrement++     // Suma uno cada ejecucion
//         } else {
//             this.idIncrement = 1   //Definir propiedad si no existia
//         }
//            return this.idIncrement
//     }
// }

// const persona1 = new Persona("Francisco", "Pepe");
// const persona2 = new Persona("Francisco", "Pepe");
// const persona3 = new Persona("Francisco", "Pepe");
// const persona4 = new Persona("Francisco", "Pepe");

// console.log(persona1);
// console.log(persona2);
// console.log(persona3);
// console.log(persona4);



// Forma Sincronica

// const fs = require("fs");
// import fs from 'fs'

//                  //Ruta a mi archivo  //Valor
// fs.writeFileSync('./ejemplo.txt', 'Hola Mundo!')

// if(fs.existsSync('./ejemplo.txt')) {   // igual al array.some() que devuelve verdadero o falso
//    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')  // Lectura de archivo
//    console.log(contenido)
//    fs.appendFileSync('./ejemplo.txt', "\n Buenas noches")  // Salto de linea
//    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
//    console.log(contenido) 
//    fs.unlinkSync('./ejemplo.txt')   // Elimina archivo
// }   



// Callbacks asincronica

// fs.writeFile('./ejemplo.txt', "Hola mundo ", (error) => {
//     if(error) {
//         return console.log("error en escritura")
//     }

//     fs.readFile('./ejemplo.txt', "utf-8", (error, resultado) => {
//         if(error) {
//             return console.log("error en lectura")
//         }
//           console.log(resultado)
//           fs.appendFile('./ejemplo.txt', "Buenas noches", (error) => {
//             if(error) {
//                 console.log("error en la sobreescritura")
//             }
//              fs.readFile('./ejemplo.txt', 'utf-8', (error, resultado) => {
//                 if(error) {
//                     console.log("error en la lectura dos")
//                 }
//                 console.log(resultado)
//                 fs.unlink('./ejemplo.txt', (error) => {
//                     if(error) {
//                         console.log("Error en eliminacion")
//                     }
//                 })
//              })
//           })
//     })


// })



// Asincronica con promesas

// 
import  {promises as fs} from 'fs'

const consultasTXT = async(ruta) => {
 await fs.writeFile(ruta, "")
 let contenido = await fs.readFile(ruta, "utf-8")
 console.log(contenido)
 await fs.appendFile(ruta, "\n Buenas noches"/*JSON.stringify(productos)*/)
contenido = await fs.readFile(ruta, "utf-8")
 console.log( /*JSON.parse(contenido)*/contenido)
//  await  fs.unlink(ruta)
}

consultasTXT('./ejemplo.txt')





//

const productos = [ 
    {
         id: 1,
         nombre: "papas fritas",
         marca: "La Patagonica",
         precio: 459,
         coder: "#5038ABC",
         stock: 40,
         ruta: "img",
         description: "Muy ricas"
    },
    {
        id: 2,
        nombre: "lentejas",
        marca: "La Riojana",
        precio: 459,
        coder: "#5078ABC",
        stock: 40,
        ruta: "img",
        description: "Muy saludables"
    }
]

