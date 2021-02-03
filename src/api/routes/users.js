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
    .select("_id email name pass")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        users: docs.map((doc) => {
          return {
            _id: doc._id,
            email: doc.email,
            name: doc.name,
            pass: doc.pass,
            request: {
              type: "GET",
              header: "GET_USER_ID",
              description: "Get ID-specific user.",
              url: `http://localhost:8000/users/${doc._id}`,
            },
          };
        }),
      };
      if (docs.length >= 0) res.status(200).json(response);
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
    email: req.body.email,
    name: req.body.name,
    pass: req.body.pass,
  });

  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created user successfully to /users",
        createdUser: {
          _id: result._id,
          email: result.email,
          name: result.name,
          pass: result.pass,
          request: {
            type: "GET",
            header: "GET_USER_ID",
            description: "Get ID-specific user.",
            url: `http://localhost:8000/users/${result._id}`,
          },
        },
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
    .select("_id email name pass")
    .exec()
    .then((doc) => {
      const response = {
        user: {
          _id: doc._id,
          email: doc.email,
          name: doc.name,
          pass: doc.pass,
          request: {
            type: "GET",
            header: "GET_ALL_USERS",
            description: "Get all users.",
            url: `http://localhost:8000/users`,
          },
        },
      };
      if (doc) res.status(200).json(response);
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
    .select("_id email name pass")
    .exec()
    .then((result) => {
      res.status(201).json({
        message: "Patched user successfully to /users",
        request: {
          type: "GET",
          header: "GET_USER_ID",
          description: "Get ID-specific user.",
          url: `http://localhost:8000/users/${id}`,
        },
      });
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
    .then((result) => {
      res.status(201).json({
        message: "User deleted.",
        request: {
          type: "POST",
          header: "POST_USER",
          description: "Post new user.",
          url: "http://localhost:8000/users",
          body: { email: "String", name: "String", pass: "String" },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
