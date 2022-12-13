const multer = require('multer');

module.exports = multer({
  storage: multer.diskStorage({ filename: (req, file, cb) => {
    cb(null, new Date().getTime() + file.originalname);
}}),
  limits: { fileSize: 5000000000 }
});