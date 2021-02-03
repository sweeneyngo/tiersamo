const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Image = require("../models/image");
const Grid = require("gridfs-stream");
const dotenv = require("dotenv").config();
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

// Endpoints
/*
GET /images/
GET /images/:id
PATCH /images/:id
PUT /images/:id
DELETE /images/:id

*/

const storage = new GridFsStorage({
  url: process.env.DATABASE_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "images",
        };
        resolve(fileInfo);
      });
    });
  },
});

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png")
//     cb(null, true);
//   else cb(new Error("Incorrect mimetype!"), false); // reject
// };

const upload = multer({
  storage,
  // storage: storage,
  // limits: { fileSize: 1024 * 1024 * 1 },
  // fileFilter: fileFilter,
});

const conn = mongoose.connection;
let gfs;

conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");

  router.get("/", (req, res, next) => {
    gfs.files.find().toArray((err, files) => {
      if (!files || files.length === 0)
        return res
          .status(200)
          .json({ success: false, message: "No files available" });
      else return res.status(200).json(files);
      // files.map((file) => {
      //   if (
      //     file.contentType === "image/jpeg" ||
      //     file.contentType === "image/png"
      //   )
      //     file.isImage = true;
      //   else file.isImage = false;
      //   return file.isImage;
      // });
    });
  });

  router.post("/", upload.single("file"), (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({ file: req.file, name: req.body.name });
    Image.findOne({ name: req.body.name }).then((image) => {
      console.log(image);
      if (image)
        return res
          .status(200)
          .json({ success: false, message: "Image already exists" });
    });
    const image = new Image({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      file: req.file.filename,
    });
    image
      .save()
      .then((image) => {
        console.log(image);
        res.status(201).json({
          message: "Successful image upload!",
          result: image,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

  router.delete("/:image_id", async (req, res, next) => {
    const id = req.params.user_id;
    Image.remove({ _id: id })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(201).json({
          message: "Image deleted.",
          request: {
            type: "POST",
            header: "POST_IMAGE",
            description: "Post new image.",
            url: "http://localhost:8000/images",
            body: { name: "String", src: "String" },
          },
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });
});

module.exports = router;
