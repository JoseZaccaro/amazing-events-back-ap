import { Schema, model } from "mongoose";

const categorySchema = Schema({
    category: { type: String, required: true },
    description: { type: String },
}, {
    timestamps: true
})


const Category = model('category', categorySchema)

export default Category