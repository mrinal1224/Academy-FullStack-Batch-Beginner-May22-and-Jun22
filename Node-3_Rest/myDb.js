
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


//Create a Document
async function createCourse(){
    const course = new Course({
        name : 'Python',
        creator : 'Adam',
        isPublished : true,
        rating : 3})
    
    const courseCreated = await course.save()
    console.log(courseCreated)
}


// createCourse()


// Comparision Operators


//gte
//gt
//lte
//lt


//in
//not in


async function getCourse(){
//    const course = await Course.find({creator : 'Mark'}).select({rating:1})
  const course = await Course.find({rating :{$lt : 4}})
   console.log(course)
}

// getCourse()


// Updating a Document

async function updateCourse(id){
    let course = await Course.findById(id)
    
    if(!course) return

    course.name = 'Node.js'
    course.creator = 'Mrinal'

    const updatedCourse = await course.save()
    console.log(updatedCourse)
    

    
}


//updateCourse('64e0f67d57ff1560a6f478ee')


// Delete a Document


async function deleteCourse(id){

    let courseDeleted = await Course.findByIdAndDelete(id)

    console.log(courseDeleted)
}


deleteCourse('64e0f67d57ff1560a6f478ee')







// Nested Schema Example 

// const NewUserSchema = mongoose.Schema({
//     name:{type:String, required:true},
//     password:{type:String, required:true},
//     email:{type:String, required:true},
//     friends: {type:Array, default: undefined},
//     posts: [{
//       head: { 
//         type: String 
//       },
//       body: { 
//         type: String 
//       },
//       image: { 
//         type: String 
//       }
//     }]
// })




 


