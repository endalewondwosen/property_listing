import multer from "multer";
const storage = multer.diskStorage({
    destination: 'uploads/property',
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Use unique filenames
    },
  });
  const fileFilter=(req,file,cb)=>{
const allowedTypes=['image/jpeg','image/jpg','image/png'];
if(allowedTypes.includes(file.mimetype)){
    cb(null,true)
}else{
    cb(null,false)

}
  }
  export const Multipleupload= multer({ storage,fileFilter });