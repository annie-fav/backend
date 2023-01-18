import { Junior, SemiSenior, Senior } from './Models/Empleado'
import Proyecto from './Models/Proyecto'

const proyecto1 = new Proyecto("Creacion de modelo de BDD", 20, 2000)
const proyecto2 = new Proyecto("Subida a servidor", 18, 4000)
const proyecto3 = new Proyecto("Testing", 15, 3000)


const empleado1 = new Junior("Pedro", "Parker", 19, 123121, 1200);
const empleado2 = new SemiSenior("Pepe", "Posadas", 24, 141132, 1500, 3);
const empleado3 = new Senior("Lola", "Enriquez", 34, 141132, 2200, 5);

empleado1.asignarProyecto(proyecto1);
empleado1.asignarProyecto(proyecto2);
empleado1.aumentarSueldo(1.0001);

empleado2.asignarProyecto(proyecto2);
empleado2.coordinarProyecto(proyecto1);
empleado2.coordinarProyecto(proyecto3);
empleado2.aumentarSueldo(1.2);

empleado3.coordinarProyecto(proyecto2);
empleado3.agregarCliente({nombre: "Tio Ben"})
empleado3.aumentarSueldo(1.4);


console.log(empleado1);
console.log(empleado2);
console.log(empleado3);




// Tipos de funciones:

function sumar(num1, num2) {
    console.log(num1 + num2)
}

const sumar = function() {
    console.log(num1 + num2)
}

const sumar = (num1, num2) => console.log(num1 + num2);


// 


