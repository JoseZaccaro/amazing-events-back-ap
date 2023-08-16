import { Schema, model } from "mongoose";

const eventSchema = Schema({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref:'category', required: true },
    date: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    place: { type: String, required: true },
    price: { type: Number, required: true },
    capacity: { type: Number, required: true },
    assistance: { type: Number, required: true }
}, {
    timestamps: true
})


const Event = model('event', eventSchema)

export default Event