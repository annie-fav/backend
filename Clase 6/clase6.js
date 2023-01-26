
// Crypto

/*
     Proceso de encriptacion

     Algoritmo de encriptacion
     Key o clave
     Iv o vector inicial 

*/

import * as crypto from 'crypto'
// const crypto = require('crypto');

// console.log(crypto.getCiphers())  // Consultar tipo de algortimos de encriptacion

const algoritmo = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encriptar = (password) => {
   const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv);  // La key debe seguirse manjeando como un buffer, por eso se utiliza buffer.from()
   let resultado = cipher.update(password) // Preparar el objeto para prepararlo
//    console.log(`El resultado de update es: ${resultado}`)
   let encriptacion = cipher.final() //Resultado de la encriptacion
   return {
    iv: iv.toString('hex'), passwordEncriptado: encriptacion.toString('hex')
   }
}

const hackerman = (passwordE) => {
 
   //Tomo los valores del objeto 
   const initV = Buffer.from(passwordE.iv, 'hex')
   const password = Buffer.from(passwordE.passwordEncriptado, 'hex')
   //Creo un objeto para desencriptar la contrasena
   const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), initV )
   //prepara el objeto para desencriptar
   decipher.update(password)
   //Guardo el resultado
   let desencriptado = decipher.final()
   //Lo retorno en formato string
   console.log(desencriptado.toString())
}

const password = "C0derHouse"
const passwordEncriptado = encriptar(password);
hackerman(passwordEncriptado);



//




