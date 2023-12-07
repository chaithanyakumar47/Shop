const rootDir = require('../util/path');
const path = require('path');

exports.getContact = (req, res) => {
    res.sendFile(path.join(rootDir,'views','contact.html'));

}

exports.postSuccess = (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(rootDir,'views','success.html'));

}