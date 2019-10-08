const express = require('express');
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');
const GSService = require('../services/GoogleStorageService');
const UploadService = require('../services/UploadService');

const passportJWT = passport.authenticate('jwt', { session: false });

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = req.user._id;
    cb(null, `../client/public/uploads/${userId}`);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
    // cb(null, `${file.fieldname}-${Date.now()}`);
  },
});
const upload = multer({ storage }).single('file');

// Upload Endpoint
router.post('/image', passportJWT, upload, (req, res) => {
  upload(req, res, err => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      console.log(err);
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log(err);
    }
    // Everything went fine.
    console.log(req.file);
    const userId = req.user._id;
    const fileName = req.file.filename;
    const filePath = `../client/public/uploads/${userId}/${fileName}`;
    GSService.uploadToGoogleStorage(filePath, fileName);

    fs.readFile(filePath, async (error, data) => {
      if (error) {
        console.log(error);
      }
      const text = await UploadService.processFileForOCR(data);
      res.json({
        fileName,
        text,
      });
      // res.send(text);
    });
  });
});

router.get('/download', passportJWT, upload, (req, res) => {});

module.exports = router;
