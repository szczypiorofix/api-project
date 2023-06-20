import mongoose from "mongoose";

interface UserModel {
    _id: number;
    name: string;
    age: number;
}

const schema: mongoose.Schema<UserModel> = new mongoose.Schema({
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
