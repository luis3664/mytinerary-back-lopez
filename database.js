import mongoose from "mongoose";

mongoose.connect(process.env['DATABASE_URL'])
    .then(() => {
        console.log("Database connected")
    })
    .catch(() => {
        console.log("Database connection failed");
    });