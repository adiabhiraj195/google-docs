import mongoose from "mongoose";
import docsSchema from "./docs.mongo";

const userSchema = mongoose.Schema({
    fName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    verificationToken: {
        type: String,
        require: true
    },
    isVerified: Boolean,
    passwordResetToken: String,
    documents: [docsSchema]
});

export default mongoose.model("User", userSchema);