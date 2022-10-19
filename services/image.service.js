import multer from "multer";
import path from "path";
console.log("Import image service");
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
        console.log("Images-----",file)
         cb(null,file.fieldname + '_' + '_product_image_' +Date.now()  + path.extname(file.originalname))
    }
});
export const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000*3 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 