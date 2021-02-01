const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port);

// const express = require("express");
// const { MongoClient } = require("mongodb");
// // const path = require("path");
// // const crypto = require("crypto"); //to generate file name
// // const mongoose = require("mongoose");
// // const multer = require("multer");
// // const GridFsStorage = require("multer-gridfs-storage");
// // const Grid = require("gridfs-stream");

// const dotenv = require("dotenv");

// const bodyParser = require("body-parser");
// const morgan = require("morgan"); // timestamp logging
// const helmet = require("helmet"); // injection defense (x)
// const cors = require("cors"); // whitelist port req/res
// const rateLimit = require("express-rate-limit"); // limit API reqs from IP

// const { models, connectDB } = require("../models/index");

// const whitelist = ["http://localhost:3000", "http://localhost:3001"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// // (429): too many requests
// const limit = rateLimit({
//   time: 15 * 60 * 1000, // 15m
//   max: 100, // limit 100 requests per time
//   message: "Too many requests created from this IP. Try again in 15 minutes.",
// });

// const app = express();

// // middlewares
// // src: https://blog.logrocket.com/express-middleware-a-complete-guide/#what-is-expressjs
// dotenv.config();
// app.use(morgan("common"));
// app.use(helmet());
// // app.use(cors(corsOptions));
// app.use(cors());
// app.use(limit); // apply to all requests
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // only apply to requests that begin with /api/
// // app.use("/api/", limiter);

// app.use(express.static(__dirname + "/public"));

// connectDB()
//   // .once("open", async () => {
//   //   // initialize stream
//   //   gfs = Grid(mongoose.connection.db, mongoose.mongo);
//   //   gfs.collection("images");

//   //   let storage = new GridFsStorage({
//   //     url: process.env.DATABASE_URL,
//   //     file: (req, file) => {
//   //       return new Promise((resolve, reject) => {
//   //         const fileInfo = {
//   //           filename: file.originalname,
//   //           bucketName: "images",
//   //         };
//   //         resolve(fileInfo);
//   //       });
//   //     },
//   //   });

//   //   const upload = multer({ storage });
//   // })
//   .then(async () => {
//     app.listen(process.env.PORT, () => {
//       console.log(`Ready on port ${process.env.PORT}`);
//     });

//     app.get("/", (req, res) => {
//       res.json({
//         message: "Hello! How are you?",
//       });
//     });

//     app.post("/add", (req, res, next) => {
//       const data = req.body;
//       const name = {
//         firstName: data.firstName,
//         lastName: data.lastName,
//       };

//       const client = new MongoClient(
//         process.env.DATABASE_URL,
//         { useNewUrlParser: true },
//         { useUnifiedTopology: true }
//       );

//       client.connect((err, db) => {
//         if (err) {
//           console.log("Cannot connect to db: " + err);
//           return;
//         }
//         console.log("Success!");

//         const col = db.db().collection("users");
//         col.insertOne(name, (err, r) => {
//           if (err) {
//             console.log("Cannot add user.");
//             return;
//           }
//           console.log("User added!");
//           res.redirect("/");
//         });

//         client.close();
//       });
//     });

//     // app.post("/upload", upload.single("upload"), (req, res) => {
//     //   res.json({ file: req.file });
//     // });
//   });
