const express = require('express')
const app = express()

const productRouter = require('./routes/productsRoutes')

app.use('/' , productRouter.router ) // middelware is initialzing your router for you

app.use(express.json())

app.listen(8080, () => {
    console.log('Server Started')
})