import mongoose from "mongoose";
import productModel from "./product.model.js";
import userModel from "./user.model.js";

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  productID: {
    type: Schema.Types.ObjectId,
    require: true,
    ref:productModel
  },
  userID: {
    type: Schema.Types.ObjectId,
    require: true,
    ref:userModel
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("cart", CartSchema)
