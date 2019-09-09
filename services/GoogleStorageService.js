// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');
const path = require('path');

const credentials = {
  keyFilename: path.join(__dirname, '../service-account.json'),
  projectId: '640528730436', // governer-k8s
};

// Creates a client
const storage = new Storage(credentials);

const bucketName = 'authapp-files';

async function uploadToGoogleStorage(filePath, fileName) {
  try {
    const gcsb = await storage.bucket(bucketName);
    // console.log(gcsb.file(fileName));
    await gcsb.upload(`${filePath}`, {
      // Support for HTTP requests made with `Accept-Encoding: gzip`
      gzip: true,
      // By setting the option `destination`, you can change the name of the
      // object you are uploading to a bucket.
      metadata: {
        // Enable long-lived HTTP caching headers
        // Use only if the contents of the file will never change
        // (If the contents will change, use cacheControl: 'no-cache')
        cacheControl: 'public, max-age=31536000',
      },
    });
  } catch (error) {
    console.log(error);
  }

  console.log(`${fileName} uploaded to ${bucketName}.`);

  return true;
}

async function downloadFromGoogleStorage(destFilename, fileName) {
  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'Remote file to download, e.g. file.txt';
  // const destFilename = 'Local destination for file, e.g. ./local/path/to/file.txt';

  const options = {
    // The path to which the file should be downloaded, e.g. "./file.txt"
    destination: destFilename,
  };

  // Downloads the file
  await storage
    .bucket(bucketName)
    .file(fileName)
    .download(options);

  console.log(`gs://${bucketName}/${fileName} downloaded to ${destFilename}.`);
}

module.exports = {
  uploadToGoogleStorage,
};
