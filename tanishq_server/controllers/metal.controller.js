import multer from "multer";
import metalModel from "../models/metal.model.js";
import { storage } from "../util/fileUpload.js";
import fsExtra from "fs-extra";

const upload = multer({ storage: storage });
export const addMetal = (req, res) => {
  console.log(req.body)
  try {
    const { name, description } = req.body;

    const addMetalData = new metalModel({
      name: name,
      description: description,
    });
    
    
    addMetalData.save();
    
    if (addMetalData) {
      return res.status(201).json({
        data: addMetalData,
        message: "created",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getMetal = async (req, res) => {
  try {
    const getMetalData = await metalModel.find({ status: 1 });
    if (getMetalData) {
      return res.status(200).json({
        data: getMetalData,
        message: "metal data...",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const updateMetal = async (req, res) => {
  try {
    const uploadFile = upload.single("image");

    uploadFile(req, res, async function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const MetalID = req.params.met_id;
      const existMetal = await metalModel.findOne({ _id: MetalID });

      let img = existMetal.image;

      if (req.file) {
        if (img) {
          await fsExtra.remove(`uploads/${img}`);
        }
        img = req.files.filename;
      }

      const { name, description } = req.body;

      const MetalData = await metalModel.updateOne(
        { _id: MetalID },
        {
          $set: {
            name: name,
            description: description,
            image: img,
          },
        }
      );

      const updatedMetal = await metalModel.findOne({ _id: MetalID });

      if (updatedMetal) {
        return res.status(200).json({
          data: updatedMetal,
          message: "updated",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteMetal = async (req, res) => {
  try {
    const catID = req.params.met_id;
    const deleteItem = await metalModel.deleteOne({ _id: catID });
    if (deleteItem.acknowledged) {
      return res.status(200).json({
        message: "deleted",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};