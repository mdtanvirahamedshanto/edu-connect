import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    thumbnail:{
        type: String,
        required: true
    },
});

export const Category = mongoose.models.Category || mongoose.model("Category",categorySchema);