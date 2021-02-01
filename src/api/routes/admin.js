const express = require("express");
const router = express.Router();

// Endpoints
/*

GET admin/users/:id
PATCH admin/usrs/:id
PUT admin/users/:id




*/
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /images",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST requests to /images",
  });
});

router.get("/");

module.exports = router;
