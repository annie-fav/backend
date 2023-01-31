
// class ProductManager {
//     constructor() {
//         this.products = []
//         this.lastId = 0
//     }

//     addProduct(product) {
//         const _exists = this.products.find(element => element.code === product.code); 
        
//         if (_exists) {
//             console.log(`the product ${product.code} already exists`)
//             return 
//         }
        
//         product.id = this.lastId
//         this.products.push(product)
//         this.lastId += 1
//     }

//     getProducts() {
//        return this.products
//     }

//     getProductById(id) {

//         if(!id) {
//             console.log('Not found')
//         } 
       
//         const selected_product = this.products.find(element => element.id == id)
//         return selected_product;
//     }
// }

// class Product {
//     constructor(title, description, price, thumbnail, code, stock) {
        
//         if (!title ||
//             !description ||
//             !price ||
//             !thumbnail ||
//             !code ||
//             !stock ) {
//             console.log('no tenemos todos los campos')
//             return
//         }

//         this.title = title
//         this.description = description
//         this.price = price
//         this.thumbnail = thumbnail
//         this.code = code
//         this.stock = stock
//     }
// }

// const myProductManager = new ProductManager()

// const product1 = new Product("T-shirt Woman", "Excellent T-shirt", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUz2udYJSW8es9xZztGlbA6tO9xjviF-tSmv9BxfET0Bf9b_nKAulzEWEBFomNJC-5u6k&usqp=CAU", 1, 10)
// const product2 = new Product("Jeans", "Excellent Jeans", 15, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH83MdZlqlxbkvnL-QWVbw20MsVwDauYNHwnIJyEfcrnmtiTvJnLDT0eI3_Yz9HlI5M4A&usqp=CAU", 2, 10)
// const product3 = new Product("T-shirt Man", "Excellent T-shirt", 24, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1NA51PxaIl7JijtKRgS4dCerNIcrRlqxfrr0GmEl-VClfRRXE1x-LQGq8WvFEQh--Jg&usqp=CAU", 3, 10)
// const product4 = new Product("Fit", "Excellent Fit", 14, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyIY-GAFu9-2Bq8njs2JlNnqXH4eoEdJpQLoB_kqoWu6zaGCn3XZBZvZjw_iRBFa-Sc8&usqp=CAU", 4, 10)
// const product5 = new Product("Dress Shoes Woman", "Dress Shoes Woman", 22, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL3Q5LM-HYkD4_Gl5Hoi0RQn3yqLP1I7lH4LQhbXPoLtedadtSWpylRXTiKu79Sv_aFk&usqp=CAU", 5, 10)
// const product6 = new Product("Dress Shoes Man", "Dress Shoes Man", 26, "https://i.insider.com/613fbae6261771001825ec35?width=700", 6, 10)
// const product7 = new Product("Shoes Woman", "Excellent Shoes Woman", 17, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiY_j8yPbRxyaJhdpJ0L8a5Gwpf6lCNnEOw&usqp=CAU", 7, 10)
// const product8 = new Product("Shoes Man", "Excellent Shoes Man", 18, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17Qseg_R1WxwToS9xhP8pGffwGTGNoSzLjA&usqp=CAU", 8, 10)
// const product9 = new Product("Socks Woman", "Excellent Socks Woman", 5, "https://pyxis.nymag.com/v1/imgs/3db/6ca/5687b337910c415811616b09700e174c67-darnersocks.2x.rdeep-vertical.w245.jpg", 9, 10)
// const product10 = new Product("Socks Man", "Socks Man", 5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmPN6bj6Nja8Fy91tSH3WDclJU9Nvq-nmLw&usqp=CAU", 10, 10)


// myProductManager.addProduct(product1);
// myProductManager.addProduct(product2);
// myProductManager.addProduct(product3);
// myProductManager.addProduct(product4);
// myProductManager.addProduct(product5);
// myProductManager.addProduct(product6);
// myProductManager.addProduct(product7);
// myProductManager.addProduct(product8);
// myProductManager.addProduct(product9);
// myProductManager.addProduct(product10);

// console.log(myProductManager.getProducts());