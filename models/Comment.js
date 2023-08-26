import { Schema, model, Types } from "mongoose";

let collection = 'Comment';
let schema = new Schema({
    userName: { type: String, required: true, immutable: true },
    userPhoto: { type: String, required: true },
    comment: { type: String, required: true, unique: true },
    itinerary: { type: Types.ObjectId, ref: 'Itinerary', required: true, immutable: true }
}, {
    timestamps: true
});

let Comments = model(collection, schema);
export default Comments;