import mongoose from "mongoose";

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
    verificationToken:{
        type: String,
        require:true
    }
});

export default mongoose.model("User", userSchema);