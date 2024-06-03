import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { storage } from '../util/fileUpload.js';
import multer from "multer";

export const signUp = async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;

    const existUser = await userModel.findOne({ email: email });

    if (existUser) { 
      return res.status(200).json({
        message: "user already exist",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const saveUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      contact: contact,
    });

    saveUser.save();

    if (saveUser) {
      return res.status(201).json({
        data: saveUser,
        message: "Sign up Succssesfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const getUsersData = await userModel.find({ status: 1 });
    if (getUsersData) {
      return res.status(200).json({
        data: getUsersData,
        message: "All users of tanishq",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// export const updateUser = async (req, res) => {
//   try {
//     const userID = req.params.user_id;

//     const { name, email, password, contact } = req.body;

//     const UserData = await userModel.updateOne(
//       { _id: userID },
//       {
//         $set: {
//           name: name,
//           email: email,
//           password: password,
//           contact: contact,
//         },
//       }
//     );

//     const existUser = await userModel.findOne({ _id: userID });
//     if (existUser) {
//       return res.status(200).json({
//         data: existUser,
//         message: "updated",
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };



const upload = multer({ storage: storage })

export const updateUser = async (req,res)=>{
  try{
  const uploadUserData = upload.single("image");

  uploadUserData(req, res, async function (err) {
    if (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
    const userId = req.params.user_id
    const { name, email, contact, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);
    
    const existUser = await userModel.findOne({_id:userId});

    let img = existUser.image;
    if (req.file) {
      img = req.file.filename;
      if(fs.existsSync('./upload/'+existUser.image)){
        fs.unlinkSync('./upload/'+existUser.image)
      }
    }

    const updateUserData = await userModel.updateOne({_id:userId},{$set:{
      name: name,
      email: email,
      contact:contact,
      password:hashedPassword,
      image:img
    }})

    if (updateUserData.matchedCount) {
      return res.status(200).json({
        message: "Updated",
      });
    }
  });
  }catch (error) {
      return res.status(500).json({
          message:error.message
      })
  }
}


export const getUser = async (req, res) => {
  try {
    const userID = req.params.user_id;
    const getUserData = await userModel.findOne({ _id: userID, status: 1 });
    if (getUserData) {
      return res.status(200).json({
        data: getUserData,
        message: "single User data",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const softDeleteUser = async (req, res) => {
  try {
    const userID = req.params.user_id;
    const deleted = await userModel.updateOne(
      { _id: userID },
      { $set: { status: 0 } }
    );
    if (deleted.acknowledged) {
      return res.status(200).json({
        message: "deleted.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existUser = await userModel.findOne({ email: email });
    if (!existUser) {
      return res.status(400).json({
        message: "user not exist...",
      });
    }

    const checkPassword = bcrypt.compareSync(password, existUser.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "invalid credential",
      });
    }

    const token = jwt.sign(
      {
        id: existUser._id,
        email: existUser.email,
      },
      process.env.TOKEN_SECRET_KEY,

      { expiresIn: "1h" }
    );

    //    res.cookie('userId', existUser._id.toString(), { httpOnly: true, secure: true, sameSite: 'none' });

    return res.status(200).json({
      data: existUser,
      token: token,
      message: "login Succsesfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
