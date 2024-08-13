import { Category } from "@/models/category.model";
import { Course } from "@/models/course.model";
import { Module } from "@/models/module.model";
import { Testimonial } from "@/models/testimonial.model";
import { User } from "@/models/user.model";

export async function getCourses(){
    const courses = await Course.find().populate({
        path: "category",
        model: Category
    }).populate({
        path: "instructor",
        model: User
    }).populate({
        path: "testimonials",
        model: Testimonial
    }).populate({
        path: "modules",
        model: Module
    })
    return courses;
}