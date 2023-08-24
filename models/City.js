import {Schema, model, Types} from "mongoose";

let collection = 'cities';
let schema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    lang: { type: String, required: true },
    currency: { type: String, required: true },
    img: { type: String, required: true },
    iterinaries: [{ type: Types.ObjectId, ref: 'Itinerary' }]
},{
    timestamps: true
});

let City = model(collection, schema);
export default City;