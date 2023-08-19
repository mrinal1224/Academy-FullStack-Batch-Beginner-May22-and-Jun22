const express = require('express')
const app = express()

const productController = require('./controllers/product')

app.use(express.json())


app.get('/products', productController.getAllProducts)
app.get('/products/:id', productController.getproduct)
app.post('/products', productController.createProduct)
app.put('/products/:id', productController.replaceProduct)
app.patch('/products/:id', productController.updateProduct)
app.delete('/products/:id', productController.deleteProduct)
















app.listen(8080, () => {
    console.log('Server Started')
})