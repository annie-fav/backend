import express from 'express'
import { __dirname, __filename } from "./path.js"
import productRouter from "/Users/annie/Desktop/Backend/Clase 10/src/routes/products.routes.js"
import multer from 'multer'
import  { engine } from 'express-handlebars'
import * as path from 'path'


// const upload = multer({ dest:'src/public/img'}) . // ---> forma basica de cargar multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/img')
    },

    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({storage: storage})

const app = express() //app es igual a la ejecucion de express
const PORT = 4000



//Middlewares
app.use(express.urlencoded({extended:true})) // Permite realizar consultas en la url (req.query)
app.use(express.json()); // Permite trabajar con json
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname, './views')) // __dirname + './views'


// Routes

// app.get('/info', (req, res) => {
//     return 'Its working'
// })

// app.post('/more-info', (req, res) => {
//     return 'Its more info'
// })

// app.use('./static', express.static(__dirname + '/public')) // Defino mis archivos estaticos

app.use('/', express.static(__dirname + '/public')) 
app.use('/api/products', productRouter)
app.post('/upload', upload.single('product'), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    res.send("Imagen cargada")
})

//HBS
app.get('/', (req, res) => {
   const user = {
    nombre: "Pablo",
    email: "p@p.com",
    rol: "Tutor"
   } 

   const cursos = [
     {numero: 123, dia:"LyM", horario: "noche"},
     {numero: 456, dia:"LyM", horario: "manana"},
     {numero: 789, dia:"LyM", horario: "noche"},
   ]

   res.render("home", {
     titulo: "Ecommerce-backend",
     mensaje: "Pepe",
     user,
     isTutor: user.rol === "tutor",
     cursos 
   })
})

//
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})










