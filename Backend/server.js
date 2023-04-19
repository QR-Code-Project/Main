/*
const express = require('express');
const app = express();
const QRCode = require('qrcode-reader');
const Jimp = require('jimp');

app.get('/scan', (req, res) => {
  const url = req.query.url;
  if (!url) {
    res.status(400).send('QR code not found');
    return;
  }
  const qrcode = new QRCode();
  Jimp.read(url, (err, image) => {
    if (err) {
      res.status(500).send('Error reading QR code');
      return;
    }
    qrcode.callback = (err, value) => {
      if (err) {
        res.status(500).send('Error decoding QR code');
        return;
      }
      res.redirect(`../Frontend/src/components/app/Cluefound/${value}`);
    };
    qrcode.decode(image.bitmap);
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
*/