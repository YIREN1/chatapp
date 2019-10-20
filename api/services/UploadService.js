const { createWorker } = require('tesseract.js');

const worker = createWorker({
  logger: m => console.log(m), // Add logger here
});

const UploadService = {};

UploadService.processFileForOCR = file => {
  return worker
    .recognize(file, 'eng+chi_tra+chi_sim', {
      tessjs_create_pdf: '1',
    })
    .progress(progress => {
      console.log('progress', progress);
    })
    .then(result => {
      console.log('result', result.text);
      worker.terminate();
      return result.text;
    });
};
module.exports = UploadService;
