const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 8080;
const cors = require('cors');
const QRCode = require('qrcode-reader');
const Jimp = require('jimp');

app.use(cors());

app.use(bodyParser.json());




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



app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send('Received JSON data');
});


app.get('/api/getTeamData', (req, res) => {
  fs.readFile('./teams.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));



/*
const fs = require("fs");
const http = require("http");
const https = require("https");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const teamsRoute = require("./routes/team.routes");
const challengeRoute = require("./routes/challenge.routes");
const config = require("./config");

const PORT = 8080;


app.use(cors());
app.use(express.json());
app.use("/api", teamsRoute);
app.use("/api", challengeRoute);

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send('Received JSON data');
});


app.get('/api/getTeamData', (req, res) => {
  fs.readFile('./data/teams.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});





mongoose.connect(config.DB.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});

db.once("open", () => {
  console.log("Database started successfully");
});

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(
//   {
//     key: fs.readFileSync("./ssl/privatekey.pem"),
//     cert: fs.readFileSync("./ssl/certificate.pem"),
//   },
//   app
// ); 



httpServer.listen(config.PORT, () => {
  console.log(`Server is listening on port: ${config.PORT}`);
});


// httpsServer.listen(config.SECURE_PORT, () => {
//   console.log(`Secure server is listening on port: ${config.SECURE_PORT}`);
// });
*/
