import { Schema, model, Types } from "mongoose";

let collection = 'itineraries';
let schema = new Schema({
    userName: { type: String, required: true },
    userPhoto: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: [String], required: true, validator: (v) => v.length >= 4, message: (props) => `${props.value} debe tener al menos 4 elementos!` },
    comments: [{ type: Types.ObjectId, ref: 'Comment' }],
    activities: [{ type: Types.ObjectId, ref: 'Activity', required: true }],
    city: {type: Types.ObjectId, ref: 'City', required: true}
}, {
    timestamps: true
});

let Itinerary = model(collection, schema);
export default Itinerary;