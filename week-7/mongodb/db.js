const mongooes = require('mongoose')
const Schema = mongooes.Schema
const ObjectId = mongooes.ObjectId

const User = new Schema({
    email: String,
    password : String,
    name: String
})

const Todo = new Schema({
    title : String,
    done: Boolean,
    userId: ObjectId
})

const userModel = mongooes.model('users', User)
const todoModel = mongooes.model('todos', Todo)

module.exports = {
    userModel,
    todoModel
}