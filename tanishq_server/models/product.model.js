import mongoose from "mongoose";
import categoryModel from "./category.model.js";
import metalModel from "./metal.model.js";
import genderModel from "./gender.model.js";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: categoryModel,
  },
  collections:{
    type:String,
    require:true
  },
  style_type:{
    type:String,
    default:null
  },
  description: {
    type: String,
    require: true,
  },
  product_details: {
    type: String,
    require: true,
  },
  thumbnail: {
    type: String,
    default: null,
  },
  images: {
    type: Array,
    default: [],
  },
  gender:{
    type: Schema.Types.ObjectId,
    required: true,
    ref: genderModel,
  },
  discount: {
    type: String,
    default: null,
  },
  gross_weight:{
    type: String,
    require: true,
  },
  jewellery_type:{
    type: String,
    require: true,
  },
  height: {
    type: String,
    default: null,
  },
  width: {
    type: String,
    default: null,
  },
  metal: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: metalModel,
  },
  purity: {
    type: String,
    require: true,
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
  status:{
    type:Number,
    default:1
  }
});



export default mongoose.model("product", productSchema)