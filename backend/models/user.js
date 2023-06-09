const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
    },
    posts: [{
        type: ObjectId,
        ref: "POST"
    }],
    Portfolio: {
        type: String
    },
    LinkedIn: {
        type: String
    },
    Github: {
        type: String,
        required: true
    },
    GFG: {
        type: String
    },
    LeetCode: {
        type: String
    },
    posts:[{
        type: ObjectId, ref: 'post'
    }],
    followers: [{ type: ObjectId, ref: "USER" }],
    following: [{ type: ObjectId, ref: "USER" }]
})

mongoose.model("USER", userSchema)