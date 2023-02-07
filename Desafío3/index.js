
// import express from 'express'
// import ProductManager, { Product }  from './ProductManeger.js';

// const myProductManager = new ProductManager('/Users/annie/Desktop/Backend/Desafío3/products.json')

// const app = express();
// const PORT = 4000;

// app.get('/products', async (req, res) => {
//     const list_product = await myProductManager.getProducts();
//     let {limite} = req.query
//     let data;
//     if (!limite) {
//       data = list_product;
//     } else {
//       data = list_product.slice(0, parseInt(limite))
//     }
//     res.send(data)
// })

// app.get('/products/:id', async (req, res) => {
//    const product = await myProductManager.getProductById(parseInt(req.params.id));
//    product === null ? res.send("No se encontro el producto") : res.send(product)
   
// })

// app.listen(PORT, () => {
//     console.log(`Server on port ${PORT}`)
// })