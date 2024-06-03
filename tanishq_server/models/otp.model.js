import mongoose from "mongoose";
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: Number,
    require: true,
  },
  status: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("otp", otpSchema)