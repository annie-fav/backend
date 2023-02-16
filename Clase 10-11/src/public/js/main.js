
const socket = io()

socket.emit("mensaje", "Hola, este es mi primera info al servidor") // Enviar informacion a mi servidor

socket.on("Mensaje-general", info => {
    console.log(info)
})

socket.on("mensaje-socket-propio", info => {
    console.log(info)
})