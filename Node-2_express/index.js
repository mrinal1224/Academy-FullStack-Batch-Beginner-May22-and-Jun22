const express = require('express')

const app = express()


// endpoint
app.get('/' , (req , res)=>{
    res.send({'type' : 'GET'})
})

app.get('/' , (req , res)=>{
    res.send({'type' : 'GET2'})
})



 app.post('/' , (req , res)=>{
    res.send({'type' : 'POST'})
 })

 app.put('/' , (req , res)=>{
    res.send({'type' : 'PUT'})
 })

 app.delete('/' , (req , res)=>{
    res.send({'type' : 'DELETE'})
 })




app.listen(8082 , ()=>{
    console.log('Server has started at 8082')
})


