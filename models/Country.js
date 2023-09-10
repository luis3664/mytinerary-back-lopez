import { Schema, model, Types } from "mongoose";

let collection = 'Country';
let schema = new Schema({
    name: { type: String, required: true }
});

let Country = model(collection, schema);
export default Country;