
// Callback : una funcion que llama a otra funcion, una funcion como parametro de otra funcion

/* document.getElementById("id").addEventListener('click', () => { } )

array.forEach(() => { });

calcularImpuestos(IVA(), PAIS(), RETENCIONES());

array.map(() => {}).filter(() => {});
*/



// Promesas

// const consultarBDD = (confirmacion) => { 
//    return new Promise((resolve, reject) => {
//     if(confirmacion) {
//         resolve("Base de datos")
//     } else {
//         reject("acceso denegado")
//     }
//    })
// }

// consultarBDD(true)
// .then(resultado => console.log(resultado))
// .catch(error => consolelog(error)); 



// Sincronismo y asicronismo: nunca se puede calcular cuando termina una funcion asincronica


// fetch('https://criptoya.com/api/dolar')
// .then(response => response.json())
// .then(({ mep, blue, solidario}) => {
//     console.log(mep, blue, solidario)
// })
// .catch(error => console.log(error))


// fetch('https://criptoya.com/api/dolar')
// .then(response => response.json())
// .then(dolar => {
//     const {mep, blue, solidario} = dolar // desestructuracion
//     console.log(mep, blue, solidario)
// })
// .catch(error => console.log(error))


// const consultarDolar = async () => {
//     try {
//         const response = await fetch('https://criptoya.com/api/dolar')
//         const dolares = await response.json() 
//         return dolares
//     } catch(error) {
//         return error
//     }   
// }

// // consultarDolar()
// // .then(({mep, solidario, blue}) => {
// //     console.log(mep, solidario, blue)
// // })
// // .catch(error => console.log(error))

// const consulta = async () => {
//     const {blue} = await consultarDolar()
//     console.log(blue)
// }


// 

const API_KEY = "";

const consultarCoodernadas = async (ciudad, provincia, pais) => {
    const valores = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${provincia},${pais}&limit=18appid=${API_KEY}`);
    const datos = await Response.json()
    console.log(datos[0])
    return datos[0]
}

// consultarCoordenadas("Cordoba", "Cordoba", "Arg");

const consultarClima = async(ciudad, provincia, pais) {
    const {lat, lon} = await consultarClima("Cordoba", "Cordoba", "Arg")
    console.log(lat, lon)
    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}$appid=${API_KEY}&units=metric`)
    const clima = await response.json()
    console.log(clima)
}






