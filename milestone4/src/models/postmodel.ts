import { model, models, Schema } from "mongoose";


const postSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String },
        author: {
            name: { type: String, required: true },
            email: { type: String, required: true },
            image: { type: String, required: true },
            id: { type: Schema.Types.ObjectId, required: true }
        },
        likes: [{ type: Schema.Types.ObjectId, ref: "User", default: 0 }],
        comments: [{
            name: { required: true, type: String },
            image: { required: true, type: String },
            comment: { type: String },
            id: { type: Schema.Types.ObjectId, required: true },
            time: { type: Date, default: Date.now }
        }]
    },
    { timestamps: true }
)

export const PostModel = models.Post || model("Post", postSchema);