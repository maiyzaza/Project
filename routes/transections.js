var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Product = require("../db/models/products");
var Transections = require("../db/models/transections");

/* GET products listing. */
router.get("/", (req, res, next) => {
  Transections.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});

// Create new product
router.post("/", (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const transection1 = new Transections({
    code: data.code,
    categoryName: data.categoryName,
    amount: data.amount,
    createAt: data.createAt
  });
  transection1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Transections.findByIdAndDelete(id, (err, doc) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.status(200).json(doc);
    }
  });
});

router.put("/", async (req, res, next) => {
  const data = req.body;
  var transection1 = await Transections.findOne({ _id: data._id });
  transection1.code = data.code;
  transection1.categoryName = data.categoryName;
  transection1.amount = data.amount;
  transection1.createAt = data.createAt;

  await transection1.save();
  res.status(200).json(transection1);
});


module.exports = router;
