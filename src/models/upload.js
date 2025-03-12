import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: false },
});

const  Upload = mongoose.model("upload", imageSchema);
export default Upload;