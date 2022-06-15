import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max:100
    },
    price:{
        type: Number,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
})

export const ProductosModel = mongoose.model("Productos",Schema);