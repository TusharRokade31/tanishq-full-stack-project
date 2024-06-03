import multer from 'multer';
import fs from 'fs'
import path from 'path'

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (fs.existsSync("uploads/")) {
        cb(null, "uploads/");
      } else {
        fs.mkdirSync("uploads/");
        cb(null, "uploads/");
      }
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      const orgName = file.originalname;
      const imgArr = orgName.split('.') 
      imgArr.pop();
      const fname = imgArr.join('.')
      const ext = path.extname(orgName)
  
  
      cb(null, fname + "-" + uniqueSuffix + ext);
    },
  });