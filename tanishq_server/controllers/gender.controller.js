import genderModel from "../models/gender.model.js";
const upload = multer({ storage: storage });
import multer from "multer";
import { storage } from "../util/fileUpload.js";

export const addGender = (req, res) => {
  try {
    
    const uploadgenderData = upload.single("image");

    uploadgenderData(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      const { name } = req.body;

      let img = null;
      if (req.file) {
        img = req.file.filename;
      }


      const genData = new genderModel({
        name: name,
        image:img
      });
      genData.save();
      if (genData) {
        return res.status(201).json({
          data: genData,
          message: "Created",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getGender = async (req, res) => {
  try {
    const getGenderData = await genderModel.find({ status: 1 });
    if (getGenderData) {
      return res.status(200).json({
        data: getGenderData,
        message: "gender data...",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
