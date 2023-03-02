import mongoose from "mongoose"

const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    dateEnter: {
        type: String,
        default: Date.now()
    },
    dateAdopt: {
        type: String,
        default: Date.now()
    }
})

export default mongoose.model("Dog", dogSchema)