import mongoose from "mongoose";
// import AutoIncrement from "mongoose-sequence";
// const AutoIncrement = require("mongoose-sequence")(mongoose);


const docsSchema = mongoose.Schema({
    did: {
        type: Number,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User"
    // },
    title: {
        type: String,
        require: true
    },
    content: String,
    owner: {
        type: String,
    },
    editors: { 
        editorEmail: String,
        // canEdit: Boolean,
    }

});

// docsSchema.plugin(AutoIncrement, {
//     inc_field: "ticket",
//     id: "ticketNumber",
//     start_seq: 500
// })
export default docsSchema;