import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    default:null
  },
  CategoryType:{
    type:String,
    required:true
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

export default mongoose.model('category',CategorySchema)