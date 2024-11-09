import mongoose from 'mongoose';

async function mongoDBconnection(){
    try {
        await mongoose.connect(process.env.MONGODB_URI || "")
    } catch (error) {
        console.log("Error connecting to the DB", error);
    }
}
mongoDBconnection();

const userModel = new mongoose.Schema({
    username: String,
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
    },
})


export const userMod = mongoose.models.User || mongoose.model("User", userModel)