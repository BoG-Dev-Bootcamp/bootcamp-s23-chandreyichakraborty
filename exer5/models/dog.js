import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    dates: {
        entered: String,
        adopted: String
    }
})

export default mongoose.model("Dog", dogSchema)