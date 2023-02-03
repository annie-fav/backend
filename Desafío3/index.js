
import express from 'express'
import ProductManager, { Product }  from './ProductManeger.js';

const myProductManager = new ProductManager('/Users/annie/Desktop/Backend/Desafío3/products.json')

const app = express();
const PORT = 4000;

app.get('/products', (req, res) => {
    const list_product = '/Users/annie/Desktop/Backend/Desafío3/products.json';
    res.send(JSON.parse(list_product))
})

app.get('/products:limite', (req, res) => {
    let {limite} = req.query
    const arrayProducts = JSONparse('/Users/annie/Desktop/Backend/Desafío3/products.json')
    if (limite) {
      const productCopia = arrayProducts.slice(0, limite)
    } else {
      res.send(JSON.stringify(arrayProducts))
    }
})
app.get('/user/:idUser', async (req, res) => {
    // console.log(req.params.idUser)
    const idUser = req.params.idUser
    const user = users.find(user => user.id === parseInt(idUser))
    if(user) {
        res.send(`Nombre de usuario ${user.nombre}`)
    } else {
        res.send("El usuario no existe")
    }
})

// app.get('/createProduct', async (req, res) => {
//     const product1 = new Product("T-shirt Woman", "Excellent T-shirt", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUz2udYJSW8es9xZztGlbA6tO9xjviF-tSmv9BxfET0Bf9b_nKAulzEWEBFomNJC-5u6k&usqp=CAU", 1, 10)
//     await instanceProductManager.addProduct(product1);
//     res.json(product1)
// })

// app.get('/deleteProduct', async (req, res) => {
//     const id = req.params.id
//     await instanceProductManager.deleteProduct(id);
//     res.send(`product with ${id}, deleted`)
// })

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})