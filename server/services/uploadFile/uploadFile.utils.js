const fetch = require('node-fetch');
const request = require("request");
const {IP: dynamicAddress} = require('../../config.js')
const JavaEngineIP = `http://172.22.${dynamicAddress}:8080/v2`

// TODO verify create endpoint
const createTemplate = `${JavaEngineIP}/template/createTemplatev2`;
const uploadFilesURL = `${JavaEngineIP}/template/uploadMultipleFiles`;
const downloadFilesURL = `${JavaEngineIP}/template/FileDownload`;
const debugEndpoint = 'https://ptsv2.com/t/mwz5g-1566870939/post';


// simular to running http.serverRequest
const upload = (req, res) => {
  try {
    const uploadForm = request(debugEndpoint);
    req.pipe(uploadForm).pipe(res);

  } catch (err) {
    console.error(err);
    res.status(400);
  }
};


const download = async (req, res) => {
  try {
    // TODO update fetch to request ?
    const downloadFiles = await fetch(downloadFilesURL)
    const files = await downloadFiles.json(req.files)
    res.send(files)
    } catch (err) {
      console.error(err);
      res.status(400);
    }
  }


module.exports = {
  upload,
  download,
}
