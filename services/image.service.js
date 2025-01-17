import multer from "multer";
import path from "path";
const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'product_upload', 
      filename: (req, file, cb) => {
         cb(null,file.fieldname + '_' +Date.now()  + path.extname(file.originalname))

    }
});


const ii = multer.diskStorage({
  destination:"upload",
  filename:(req,res,cb)=>{
  cb(null,file.filename+' '+Date.now()+path.extname(file.originalname))
  }
})

export const dsds= multer({
storage:ii,
limits:{
  fileSize:1000000*3
},
fileFilter(req,file,cb){
  if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
    return cb(new Error("plz upload image"))
  }
  cb(undefined,true)
}
})
export const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000*2 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 
export const ExcelUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000*2 // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(xlsx|csv)$/)) { 
       // upload only png and jpg format
       return cb(new Error('Please upload a Excel'))
     }
   cb(undefined, true)
}
})