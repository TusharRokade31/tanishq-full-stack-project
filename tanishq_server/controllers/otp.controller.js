import otpModel from "../models/otp.model.js";
import userModel from "../models/user.model.js"
import otpGenerator from "otp-generator"
import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";


export const SendOtp = async (req, res) => {
  try {
    
    const Otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets:false, specialChars: false })
    console.log(Otp)
    const {email} = req.body

    const existUser = await userModel.findOne({email:email})
    if(!existUser){
        return res.status(200).json({
            message:`user not exist`
        })
    }

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
          user: "rokadetushar64@gmail.com",
          pass: "mmur yurv ywvj lbrh",
        },
      });

      const info = await transporter.sendMail({
        from: 'rokadetushar64@gmail.com', // sender address
        to: email, // list of receivers
        subject: "OTP Verification", // Subject line
        text: `your OTP is ${Otp}`, // plain text body
      });

      const checkuser = await otpModel.findOne({email:email})

      if(checkuser){
        const updateOtp = await otpModel.updateOne({_id:checkuser._id},{$set:{
            otp:Otp
        }})

        if(updateOtp){
            return res.status(200).json({
                message:`OTP is send successful...`
            })
        }
      }else{
        const saveOtp = new otpModel({
            email:email,
            otp:Otp
        })
        saveOtp.save()

        return res.status(200).json({
            message:`OTP is send successful`
        })
      }
    
  } catch (error) {
    return res.status(500).json({
        message:error.message
    })
  }
};



export const OtpLogin = async (req,res)=>{
try {
    const {otp,email} = req.body
    const verify = await otpModel.findOne({otp:otp})
    const existUser = await userModel.findOne({email:email})

    const token = jwt.sign(
      {
        id: existUser._id,
        email: existUser.email,
      },
      process.env.TOKEN_SECRET_KEY,

      { expiresIn: "1h" }
    );
    if(verify){
        return res.status(200).json({
            data:existUser,
            token:token,
            message:"Succsessfully login With OTP!!",
          })
    }else{
        return res.status(401).json({
            message:"otp is invaild"
          })
    }


} catch (error) {
    return res.status(500).json({
         message:error.message
    })
}
}