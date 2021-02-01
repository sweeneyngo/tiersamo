const express = require("express");
const router = express.Router();

// Endpoints
/*

GET /images/
GET /images/:id
PATCH /images/:id
PUT /images/:id
DELETE /images/:id


*/
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /images",
  });
});

router.post("/", (req, res, next) => {
  // const image = {
  //   name: req.body.name,
  //   pass: req.body.pass,
  // };

  res.status(200).json({
    message: "Handling POST requests to /images",
  });
});

router.get("/");

module.exports = router;
