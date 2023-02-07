
// Servidor

// import http from 'http'
// const PORT = 4000

// const server = http.createServer((request, response) => {
//     response.end("Hola, este es mi primer servidor en node")
// })

// //Ejecutar servidor
// server.listen(PORT, () => {
//     console.log(`Server on port ${PORT}`)
// });




// Servidor Express

// import express from 'express'
// // import {ProductManager} from 'ruta

// const app = express() //app es igual a la ejecucion de express
// const PORT = 4000

// const users = [
//     {
//         nombre: "Annie" ,
//         apellido: "Piposhka" ,
//         id: 1,
//         cargo: "Profesor"
//     },
//     {
//         nombre: "Felix" ,
//         apellido: "Poporshko" ,
//         id: 2,
//         cargo: "Tutor"
//     },
//     {
//         nombre: "Isis" ,
//         apellido: "Lola" ,
//         id: 3,
//         cargo: "Tutor"
//     },
// ]

// app.use(express.urlencoded({extended:true})) // Permite realizar consultas en la url (req.query)
// app.use(express.json()); // Permite trabajar con json

// app.get('/', (req, res) => {
//     res.send("Este es mi primer servidor con express")
// })

// app.get('/user', (req, res) => {
//     let {cargo, nombre, sueldo} = req.query
//     // let {limite} = req.query
//     //const arrayProducts = JSONparse('txt)
//     // if
//     // const productCopia = arrayProducts.slice(0, limite)
//     const usuarios = users.filter(user => user.cargo === cargo)
//     res.send(JSON.stringify(usuarios))
// })
// app.get('/user/:idUser', async (req, res) => {
//     // console.log(req.params.idUser)
//     const idUser = req.params.idUser
//     const user = users.find(user => user.id === parseInt(idUser))
//     if(user) {
//         res.send(`Nombre de usuario ${user.nombre}`)
//     } else {
//         res.send("El usuario no existe")
//     }
// })


// app.post('/user', (req, res) => {
//     let {nombre, apellido, cargo} = req.body
//     const indice = users.length
//     users.push({nombre: nombre, apellido: apellido, cargo: cargo, indice})
//     res.send("Usuario creado")

// })

// app.get('/get_users', (req, res) => {
//     res.json(users)
// })


// app.put('/user/:id', (req, res) => {
//     let id = parseInt(req.params.id)
//     let {nombre, apellido, cargo} = req.body
//     if(users.some(user => user.id === id)) {
//     const indice = users.findIndex(usuario => usuario.id === id)
//     users[indice].cargo = cargo
//     users[indice].apellido = apellido
//     users[indice].nombre = nombre
//     res.send("Usuario actualizado")
// }
//     res.send("Usuario no encontrado")
// })

// app.delete('/user/:idUser', async (req, res) => {
//     // console.log(req.params.idUser)
//     const idUser = req.params.idUser
//     const index = users.findIndex(user => user.id === parseInt(idUser))
//     if(index != -1) {
//         users.splice(index, 1)
//         res.send(`Usuario eliminado`)
//     } else {
//         res.send("El usuario no existe")
//     }
// })



// app.listen(PORT, () => {
//     console.log(`Server on port ${PORT}`)
// })










