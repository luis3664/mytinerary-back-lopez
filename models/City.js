import {Schema, model} from "mongoose";

let collection = 'cities';
let schema = new Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    lang: {type: String},
    currency: {type: String},
    img:{ type: String, required: true }
},{
    timestamps: true
});

let City = model(collection, schema);
export default City;