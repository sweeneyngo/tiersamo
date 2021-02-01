const express = require("express");
const app = express();

// middleware
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const imageRoutes = require("../api/routes/images");
const userRoutes = require("../api/routes/users");

dotenv.config();

const whitelist = ["http://localhost:8000"];
const corsOptions = (req, cb) => {
  let options = {
    origin: false,
    methods: "PUT, POST, PATCH, DELETE, GET",
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  };
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    options = { origin: true };
  } else {
    options = { origin: false };
  }
  cb(null, options);
};

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
// });

app.use("/images", imageRoutes);
app.use("/users", userRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
