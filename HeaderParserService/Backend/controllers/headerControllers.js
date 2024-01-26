const requestIp = require('request-ip');
const express = require('express');
const app = express();
app.set('trust proxy', 1); // Trust first proxy
app.use(requestIp.mw());

exports.fetchIt = (req, res) => {
    var ipadress = req.clientIp; // Access IP address using req.clientIp
    console.log(ipadress);
    var language = req.acceptsLanguages();
    var software = req.headers['user-agent']; // Access User Agent using req.headers['user-agent']
    res.json({
        ipaddress: ipadress,
        language: language[0],
        software: software  
    })
};
