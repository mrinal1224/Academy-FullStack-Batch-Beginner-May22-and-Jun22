
const mongoose = require('mongoose')

const DB = 'mongodb+srv://mrinalbhattacharya:TeuYyGlWq1A6whAk@cluster0.uezudot.mongodb.net/my_database?retryWrites=true&w=majority'


mongoose.connect(DB , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log('Connection Succesful')
 }).catch((err)=>{
    console.log(err)
 })