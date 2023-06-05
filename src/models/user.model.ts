import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        require: true,
    },
});

schema.path("_id");

export const User = mongoose.model("User", schema);
