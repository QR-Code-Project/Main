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

app.use(cors());
app.use(express.json());
app.use("/api", teamsRoute);
app.use("/api", challengeRoute);

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
