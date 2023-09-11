import { Schema, model, Types } from "mongoose";

let collection = 'User';
let schema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    mail: { type: String },
    password: { type: String },
    photo: { type: String, default: '/user.png' },
    country: { type: String },
    age: { type: Number },
    phone: { type: Number },
    verified: { type: Boolean, default: false }
}, {
    timestamps: true
});

let User = model(collection, schema);
export default User;