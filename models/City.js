import {Schema, model, Types} from "mongoose";

let collection = 'City';
let schema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    lang: { type: String, required: true },
    currency: { type: String, required: true },
    img: { type: String, required: true },
    itineraries: [{ type: Types.ObjectId, ref: 'Itinerary' }]
},{
    timestamps: true
});

let City = model(collection, schema);
export default City;