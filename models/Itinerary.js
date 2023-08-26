import { Schema, model, Types } from "mongoose";

let collection = 'Itinerary';
let schema = new Schema({
    userName: { type: String, required: true },
    userPhoto: { type: String, required: true },
    price: { type: Number, required: true, validator: (v) => v > 0 && v < 6 },
    duration: { type: Number, required: true, validator: (v) => v > 0 },
    likes: { type: Number, required: true, default: 0 },
    hashtags: { type: [String], required: true, validator: (v) => v.length >= 3 },
    comments: [{ type: Types.ObjectId, ref: 'Comment' }],
    activities: [{ type: Types.ObjectId, ref: 'Activity' }],
    city: { type: Types.ObjectId, ref: 'City', required: true, immutable: true }
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;