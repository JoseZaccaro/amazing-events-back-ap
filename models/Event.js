import { Schema, model } from "mongoose";

const eventSchema = Schema({
    // _id: 64daaf14f945b21e993896ae,
    name: { type: String, required: true },
    category: { type: String, required: true },
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