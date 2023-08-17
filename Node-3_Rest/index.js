const express = require('express')
const app = express()
const fs = require('fs')

const mongoose = require('mongoose')

const data = JSON.parse(fs.readFileSync('data.json' , "utf-8"))

const products = data.products

 app.use(express.json())



 



 




// // Http methods (read operation)

// app.get('/products' , (req , res)=>{
//     res.send(products)
// })

// app.get('/products/:id' , (req , res)=>{
//       const id = Number(req.params.id)
//       console.log(id)

//       const product = products.find(p => p.id ===id)
//       res.json(product)
// })


// // Post method (Create)
//  app.post('/products' , (req , res)=>{
//       console.log(req.body)

//       products.push(req.body)
//       res.status(201).json(req.body)
//  })

//  // put method ( update)


//  app.put('/products/:id' , (req , res)=>{
//      const id = Number(req.params.id)

//      const productIndex = products.findIndex(p => p.id===id)

//      products.splice(productIndex , 1 , {...req.body , id:id})

//      res.status(201).json()

// })

// app.patch('/products/:id' , (req , res)=>{
//     const id = Number(req.params.id)

//     const productIndex = products.findIndex(p => p.id===id)

//     const product = products[productIndex]

//     products.splice(productIndex , 1 , {...product , ...req.body})

//     res.status(201).json()

// })


// app.delete('/products/:id' , (req , res)=>{
//     const id = Number(req.params.id)

//     const productIndex = products.findIndex(p => p.id===id)

//     const product = products[productIndex]

//     products.splice(productIndex , 1)

//     res.status(201).json(product)
// })
















app.listen(8080 , ()=>{
    console.log('Server Started')
})