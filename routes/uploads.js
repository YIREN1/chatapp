const express = require('express');
const fileUpload = require('express-fileupload');
const passport = require('passport');
const GSService = require('../services/GoogleStorageService');

const passportJWT = passport.authenticate('jwt', { session: false });

const router = express.Router();

router.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath: true,
    useTempFiles: true,
    tempFileDir: '/tmp/',
    safeFileNames: /\\/g,
    abortOnLimit: true,
  }),
);
// Upload Endpoint
router.post('/image', passportJWT, (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const { file } = req.files;
  const userId = req.user._id;
  // console.log(req.files);
  const filePath = `${__dirname}/../client/public/uploads/${userId}/${file.name}`;
  const fileName = file.name;
  return file.mv(filePath, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    console.log('upload success');
    GSService.uploadToGoogleStorage(filePath, fileName);
    return res.json({
      fileName: file.name,
      // filePath: `/uploads/${file.name}`,
    });
  });
});

module.exports = router;
