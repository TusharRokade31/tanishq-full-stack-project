import multer from "multer";
import productModel from "../models/product.model.js";
import { storage } from "../util/fileUpload.js";
import fsExtra from "fs-extra";

const upload = multer({ storage: storage });

export const addProduct = async (req, res) => {
  try {
    const uploadMiddleware = upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "images", maxCount: 10 },
    ]);

    uploadMiddleware(req, res, async function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      let thumbnailImage = null;
      let imageArr = [];

      if (req.files && req.files["thumbnail"]) {
        thumbnailImage = req.files["thumbnail"][0].filename;
      }

      if (req.files && req.files["images"]) {
        req.files["images"].forEach((image) => {
          imageArr.push(image.filename);
        });
      }

      const { title } = req.body;

      const existProduct = await productModel.findOne({ title: title });
      if (existProduct) {
        return res.status(200).json({
          message: "product already added...",
        });
      }

      const product = await productModel.create({
        ...req.body,
        thumbnail: thumbnailImage,
        images: imageArr,
      });

      if (product) {
        return res.status(201).json({
          data: product,
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

export const updateProduct = async (req, res) => {
  try {
    const uploadMiddleware = upload.fields([
      { name: "thumbnail", maxCount: 1 },
      { name: "images", maxCount: 10 },
    ]);

    uploadMiddleware(req, res, async function (err) {
      if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }

      const productID = req.params.product_id;
      const existProduct = await productModel.findOne({ _id: productID });

      let thumbnailImage = existProduct.thumbnail;
      let imageArr = existProduct.images;

      if (req.files["thumbnail"]) {
        if (thumbnailImage) {
          await fsExtra.remove(`uploads/${thumbnailImage}`);
        }
        thumbnailImage = req.files["thumbnail"][0].filename;
      }

      if (req.files["images"]) {
        await Promise.all(
          imageArr.map((image) => fsExtra.remove(`uploads/${image}`))
        );
        imageArr = req.files["images"].map((file) => file.filename);
      }

      const {
        title,
        price,
        category,
        collections,
        style_type,
        description,
        product_details,
        discount,
        height,
        width,
        metal,
        gender,
        gross_weight,
        jewellery_type,
        purity,
      } = req.body;

      const productData = await productModel.updateOne(
        { _id: productID },
        {
          $set: {
            title: title,
            price: price,
            category: category,
            collections: collections,
            style_type: style_type,
            description: description,
            product_details: product_details,
            discount: discount,
            height: height,
            width: width,
            gross_weight: gross_weight,
            jewellery_type: jewellery_type,
            purity: purity,
            metal:metal,
            gender:gender,
            thumbnail: thumbnailImage,
            images: imageArr,
          },
        }
      );

      const updatedProduct = await productModel.findOne({ _id: productID });

      if (updatedProduct) {
        return res.status(200).json({
          data: updatedProduct,
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

export const getSearchProducts = async (req, res) => {
  try {
      const { page, size, search } = req.query;

    const skipno = (page - 1) * size;

    const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
    const searchRgx = rgx(search);

    let filter = { status: 1 };
    if (search) {
      filter = {
        ...filter,
        $or: [
          { title: { $regex: searchRgx, $options: "i" } },
          { description: { $regex: searchRgx, $options: "i" } },
          { collections: { $regex: searchRgx, $options: "i" } },
          { style_type: { $regex: searchRgx, $options: "i" } },
          { jewellery_type: { $regex: searchRgx, $options: "i" } },
        ],
      };
    }

    const Searchproducts = await productModel.aggregate([
      { $match: filter },
      {
        $lookup: {
          from: "categories",
          localField: "category", //product collection product.category
          foreignField: "_id", //product collection product._id
          as: "categories",
        },
      },
      { $unwind: "$categories" },
    ]);

    const products = await productModel
      .find(filter)
      .populate("category")
      .populate("gender")
      .populate("metal")
      .limit(size)
      .skip(skipno);
    if (products) {
      return res.status(200).json({
        Searchproducts,
        products,
        total: products.length,
        message: "Fetched",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    let filter = { status: 1 };

    const products = await productModel
      .find(filter)
      .populate("category")
      .populate("gender")
      .populate("metal");

    if (products) {
      return res.status(200).json({
        products,
        total: products.length,
        message: "Fetched",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const productID = req.params.product_id;
    const productData = await productModel
      .findOne({ status: 1, _id: productID })
      .populate("category")
      .populate("gender")
      .populate("metal");

    if (productData) {
      return res.status(200).json({
        data: productData,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productID = req.params.product_id;
    const deleteItem = await productModel.deleteOne({ _id: productID });
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
