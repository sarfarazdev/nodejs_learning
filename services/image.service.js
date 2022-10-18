import multer from "multer";
import path from "path";
console.log("Import image service");
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
        console.log("Images-----",file)
         cb(null,file.fieldname + '_' + Date.now()  + path.extname(file.originalname))
         //image_1666065566017.png
            console.log("file.fieldname----",file.fieldname)
            console.log("Date----", Date.now())
            console.log("Type----",path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
export const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000*3 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg|jpeg|zip)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
// export const router = express.Router();

// router.post('/uploadImage', imageUpload.single('image'), (req, res) => {
//     res.send(req.file)
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })