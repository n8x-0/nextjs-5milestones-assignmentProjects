import { model, models, Schema } from "mongoose";


const postSchema = new Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String },
        author: {name: String, email: String, id: Schema.Types.ObjectId},
        likes: [{ type: Schema.Types.ObjectId, ref: "User", default: 0 }]
    },
    { timestamps: true }
)

export const PostModel = models.Post || model("Post", postSchema);