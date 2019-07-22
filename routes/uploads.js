const express = require('express');
const fileUpload = require('express-fileupload');

const router = express.Router();

router.use(fileUpload());
// Upload Endpoint
router.post('/image', (req, res) => {
  if (!req.files) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const { file } = req.files;

  return file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    console.log('upload success');

    return res.json({
      fileName: file.name,
      filePath: `/uploads/${file.name}`,
    });
  });
});

module.exports = router;
