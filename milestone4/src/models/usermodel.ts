import mongoose, {Schema, models, model, ObjectId} from 'mongoose';

export interface UserModelInterface {
  name: string,
  email: string,
  image: string,
  posts?: ObjectId[]
}


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default: '',
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = models.User || model('User', userSchema);
