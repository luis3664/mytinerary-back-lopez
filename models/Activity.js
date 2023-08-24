import {Schema, model, Types} from "mongoose";

let collection = 'activities';
let schema = new Schema({
    name: { type: String, required: true, unique: true },
    img: { type: String, required: true, unique: true },
    itinerary: { type: Types.ObjectId, ref: 'Itinerary', required: true }
},{
    timestamps: true
});

let Activity = model(collection, schema);
export default Activity;