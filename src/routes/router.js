import express from "express";
import cloudinary from "../config/cloudinary.js";
import upload from '../config/multer.js';

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log(req.file)
    const result = await cloudinary.uploader.upload(req.file.path);
    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error uploading file",
    });
  }
});

export default router;
