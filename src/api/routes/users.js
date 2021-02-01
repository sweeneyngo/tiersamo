const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");

// Endpoints
/*

GET users/:user_id/email (/login)
PATCH users/:user_id/email
PUT users/:user_id/email
GET users/:user_id/password/edit
PATCH users/:user_id/password

GET users/:user_id/lists
PATCH users/:user_id/lists
PUT users/:user_id/lists
GET users/:user_id/style
PATCH users/:user_id/style
PUT users/:user_id/style

PATCH /usrs/:id
PUT /users/:id

*/

router.get("/", (req, res, next) => {
  User.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      if (docs.length >= 0) res.status(200).json(docs);
      else res.status(404).json({ message: "No users found" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    pass: req.body.pass,
  });

  user
    .save()
    .then((res) => {
      console.log(res);
      res.status(200).json({
        message: "Handling POST requests to /users",
        createdUser: res,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:user_id", (req, res, next) => {
  const id = req.params.user_id;
  User.findById(id)
    .exec()
    .then((doc) => {
      console.log("Retrieved from DB: " + doc);
      if (doc) res.status(200).json(doc);
      else res.status(404).json({ message: "No valid user for ID" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:user_id", (req, res, next) => {
  const id = req.params.user_id;
  const updateOps = {};

  // req = type Array
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }

  User.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((res) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:user_id", (req, res, next) => {
  const id = req.params.user_id;
  User.remove({ _id: id })
    .exec()
    .then((res) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
