import multer from "multer";
import { storage } from "../util/fileUpload.js";
import fsExtra from "fs-extra";
import categoryModel from "../models/category.model.js";

const upload = multer({ storage: storage });
export const addCategory = (req, res) => {
  try {
    const uploadCategoryData = upload.single("image");

    uploadCategoryData(req, res, function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      const { name, description, CategoryType } = req.body;

      let img = null;
      if (req.file) {
        img = req.file.filename;
      }

      const catData = new categoryModel({
        name: name,
        description: description,
        CategoryType: CategoryType,
        image: img,
      });
      catData.save();
      if (catData) {
        return res.status(201).json({
          data: catData,
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

export const getCategoris = async (req, res) => {
  try {
    const getCategorisData = await categoryModel.find({ status: 1 });

    if (getCategorisData) {
      return res.status(200).json({
        data: getCategorisData,
        message: "succsess",
        filepath: "http://localhost:8001/uploads",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const uploadFile = upload.single("image");

    uploadFile(req, res, async function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const CategoryID = req.params.cat_id;
      const existCategory = await categoryModel.findOne({ _id: CategoryID });

      let img = existCategory.image;

      if (req.file) {
        if (img) {
          await fsExtra.remove(`uploads/${img}`);
        }
        img = req.files.filename;
      }

      const { name, description, CategoryType } = req.body;

      const CategoryData = await categoryModel.updateOne(
        { _id: CategoryID },
        {
          $set: {
            name: name,
            description: description,
            CategoryType: CategoryType,
            image: img,
          },
        }
      );

      const updatedCategory = await categoryModel.findOne({ _id: CategoryID });

      if (updatedCategory) {
        return res.status(200).json({
          data: updatedCategory,
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

export const deleteCategory = async (req, res) => {
  try {
    const catID = req.params.cat_id;
    const deleteItem = await categoryModel.deleteOne({ _id: catID });
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
