const http = require('http')

const data = {"name": "Mrinal"}

 

const server = http.createServer((req , res)=>{
   console.log('Server has started')


//    res.end('<h1>Hello from Scaler</h1>')


    res.setHeader("Content-Type" , 'application/json')
    res.end(JSON.stringify(data))
    

    // res.setHeader('Content-Type' , 'text/html')

    // res.end('<h1>This is an H1 tag</h1>')


})


server.listen(8002)










