import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    caption : {
        type: String,
        required: true,
        minLength: 5,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {
    timestamps: true,
});

const Post = mongoose.model("Post", postSchema); // model name, schema name

export default Post;