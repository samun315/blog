import mongoose,{ ObjectId } from "mongoose";
import { string } from "zod";

export interface UserDocument {
    name: String;
    email: String;
    phoneNumber: Number;
    password: String;

}

export const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: Number,
            optional: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;

