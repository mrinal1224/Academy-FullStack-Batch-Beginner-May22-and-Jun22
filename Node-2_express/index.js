const express = require('express')

const app = express()


// I want to create a logger middleware here
app.use((req , res , next)=>{
    console.log(req.method , req.ip , req.hostname , new Date())
    next()
})


// Authenticaton Middleware

const auth = (req , res , next) =>{
    console.log(req.query)

    if(req.query.password == '123'){
        next()
    }
    else{
        res.sendStatus(401)
    }

    next()
}

app.use(auth)




// endpoint
app.get('/' , (req , res)=>{
    res.send({'type' : 'GET'})
})




 app.post('/' , (req , res)=>{
    res.send({'type' : 'POST'})
 })

 app.put('/' , (req , res)=>{
    res.send({'type' : 'PUT'})
 })

//  app.delete('/' , (req , res)=>{
//     res.send({'type' : 'DELETE'})
//  })




app.listen(8082 , ()=>{
    console.log('Server has started at 8082')
})


