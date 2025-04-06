const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:wyWWjD7kVASGlKJh@cluster0.gt81chd.mongodb.net/week-8-course-Selling')

const schema = mongoose.Schema


const userSchema = new schema({
    email : {type : String , unique : true},
    password: String,
    name : String
})

const adminSchema = new schema({
    email : {type : String , unique : true},
    password: String,
    name : String
})

const courseSchema = new schema({
    title : String,
    description: String,
    price : Number,
    imageUrl : String,
    creatorId : {
        type: mongoose.Schema.ObjectId,
        ref : "Admin"
    }
})

const purchaseSchema = new schema({
    courseId: {
        type: mongoose.Schema.ObjectId,
        ref : "Course"
    },
    userId : {
        type: mongoose.Schema.ObjectId,
        ref : "User"
    }
})

const userModel = mongoose.model('User' , userSchema)
const adminModel = mongoose.model('Admin' ,adminSchema )
const courseModel = mongoose.model('Course' , courseSchema)
const purchaseModel = mongoose.model('Purchase' , purchaseSchema)


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}