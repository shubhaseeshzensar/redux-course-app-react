const express = require("express");
const router = express.Router();

// Course model
let Course = require("../models/Course");



// Add Course
router.route("/create").post((req, res, next) => {
  Course.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All Course
router.route("/").get((req, res) => {
  Course.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(res.json(data));
    }
  });
});



// Update Course
router.route("/update/:id").put((req, res, next) => {
  Course.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Data updated successfully");
      }
    }
  );
});

// Delete employee
router.route("/delete/:id").delete((req, res, next) => {
  Course.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
