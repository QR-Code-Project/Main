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


//I don't think this is used, but keeping this post request here because I don't want anything breaking the day before. - Peyton
app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send('Received JSON data');
});


// This gets the data from the json file and sends it to the frontend table.
app.get('/api/getTeamData', (req, res) => {
  fs.readFile('./teams.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});


app.post('/api/teamData', (req, res) => {
  const { teamname, url } = req.body;
  fs.readFile('./teams.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const jsonData = JSON.parse(data);
    const teamIndex = jsonData.findIndex((team) => team.teamname === teamname);
    if (teamIndex === -1) {
      // Team doesn't exist in the file, create a new team object
      const newTeam = { teamname, url: [url] };
      jsonData.push(newTeam);
    } else {
      // Team already exists in the file, add the URL if it doesn't exist
      const team = jsonData[teamIndex];
      if (!team.urls.includes(url)) {
        team.urls.push(url);
      }
    }
    fs.writeFile('./teams.json', JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        throw err;
      }
      res.send('Team and URL added successfully!');
    });
  });
});

/* old teamData I had
app.post('/api/teamData', (req, res) => {
  const newTeam = req.body;
  fs.readFile('./teams.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const jsonData = JSON.parse(data);
    jsonData.push(newTeam);
    fs.writeFile('./teams.json', JSON.stringify(jsonData), 'utf8', (err) => {
      if (err) {
        throw err;
      }
      res.send('Team added successfully!');
    });
  });
});
*/


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));



// Below is all of the old code. I just decided to redo it all so I could hopefully have some kind of functional program to show - Peyton
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
