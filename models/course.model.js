import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    modules:{
        type: [Schema.ObjectId],
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    category:{
        type: Schema.ObjectId,
        required: false
    },
    instructor:{
        type: Schema.ObjectId,
        required: false
    },
    testimonials:{
        type:[Schema.ObjectId],
        required: false
    },
    quizSet:{
        type: Schema.ObjectId,
        required: false
    }

});

export const Course = mongoose.model.Course ?? mongoose.model("Course",courseSchema);