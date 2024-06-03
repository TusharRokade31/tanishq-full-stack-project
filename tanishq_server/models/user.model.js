import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  image:{
    type:String,
    default:null
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model("user", userSchema);
