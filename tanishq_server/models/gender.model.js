import mongoose from "mongoose";

const Schema = mongoose.Schema;

const genderSchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    default:null
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

export default mongoose.model('gender',genderSchema)