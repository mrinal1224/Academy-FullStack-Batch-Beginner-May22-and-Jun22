
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



 // Schema

 const courseSchema = new mongoose.Schema({
    name : String,
    creator : String,
    publishedDate : {type : Date , default : Date.now},
    isPublished : Boolean,
    rating : Number 
})


//Model


const Course = mongoose.model('Course' , courseSchema)


async function createCourse(){
    const course = new Course({
        name : 'Java',
        creator : 'Mark',
        isPublished : true,
        rating : 4.1
    
    })
    
    const courseCreated = await course.save()
    console.log(courseCreated)
}


createCourse()




 


