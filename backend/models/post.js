const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    likes: [{ type: ObjectId, ref: "USER" }],
    comments: [{
        comment: { type: String },
        postedBy: { type: ObjectId, ref: "USER" }
    }],
    postedBy: {
        type: ObjectId,
        ref: "USER"
    },
    categories: [{
        category: { type: String , required: true},  
    }], 
    techStacks: [{
        tech: { type: String }
    }],
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    collaborators: {
        type: Number,
        required: true,
        default: 0
    }
}, { timestamps: true })

mongoose.model("POST", postSchema)
