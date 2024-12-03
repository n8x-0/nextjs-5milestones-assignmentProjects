import { Schema, models, model, ObjectId } from 'mongoose';

export interface UserModelInterface {
  name: string,
  email: string,
  image: string,
  posts?: ObjectId[]
}


const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    image: { type: String, default: 'https://www.ieeta.pt/wp-content/uploads/2022/11/default_image_ieeta.jpg' },
    password: { type: String, select: false },
    posts: [
      { type: Schema.Types.ObjectId, ref: 'Post' },
    ],
  },
  { timestamps: true, }
);

export const UserModel = models.User || model('User', userSchema);
