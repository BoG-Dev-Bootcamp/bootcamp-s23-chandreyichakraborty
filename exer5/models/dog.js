import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    dateEnter: String,
    dateAdopt: String
})

export default mongoose.model("Dog", dogSchema)