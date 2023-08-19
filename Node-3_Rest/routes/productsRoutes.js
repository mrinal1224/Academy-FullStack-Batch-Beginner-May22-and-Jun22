const express = require('express')

const productController = require('../controllers/productControllers')


const router = express.Router() // this method sets up router for you

router.get('/products', productController.getAllProducts)
.get('/products/:id', productController.getproduct)
.post('/products', productController.createProduct)
.put('/products/:id', productController.replaceProduct)
.patch('/products/:id', productController.updateProduct)
.delete('/products/:id', productController.deleteProduct)

exports.router = router