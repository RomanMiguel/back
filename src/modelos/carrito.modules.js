import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    productos:{
        type: Array
    }
})

export const CarritosModel = mongoose.model("Carritos",Schema);