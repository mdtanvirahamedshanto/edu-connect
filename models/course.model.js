import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({

});

export const Course = mongoose.model.Courses ?? mongoose.model("Courses",courseSchema);