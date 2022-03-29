var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Product = require("../db/models/products");
var Account = require("../db/models/accounts")

/* GET products listing. */
router.get("/", (req, res, next) => {
  Account.find({}, (err, result) => {
    if (err) {
      console.debug("Hey Look! Error", err);
      res.json(err);
    } else {
      // console.log(res);
      res.json(result);
    }
  });
});

// Create new account
router.post("/", (req, res, next) => {
  console.debug(req.body);
  const data = req.body;
  const account1 = new Account({
    code: data.code,
    firstName: data.firstName,
    lastName: data.lastName,
    balance: data.balance
  })
  account1.save((err, newInstance) => {
    if (err) {
      console.error("Hey look, Error!", err);
      res.json(err);
    } else {
      res.json(newInstance);
    }
  });
});

// router.delete("/", (req, res, next) => {
//   const id = req.body._id;
//   console.debug(id);
//   Product.findByIdAndDelete(id, (err, doc) => {
//     if (err) {
//       console.error("Hey look, Error!", err);
//       res.json(err);
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });

// router.delete("/:id", (req, res, next) => {
//   const id = req.params.id;
//   console.debug(id);
//   Product.findByIdAndDelete(id, (err, doc) => {
//     if (err) {
//       console.error("Hey look, Error!", err);
//       res.json(err);
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });

// router.put("/", async (req, res, next) => {
//   console.debug(req.body);
//   const data = req.body;

  // Product.findOneAndUpdate({ code: data.code }, data, (err, doc) => {
  //   if (err) {
  //     console.error("Hey look, Error!", err);
  //     res.json(err);
  //   } else {
  //     res.status(200).json(doc);
  //   }
  // });
  // or findOne(), set values, then save()

  //update whole object or partially (PATCH)
//   Product.findByIdAndUpdate(data._id, data, {new: true},(err, doc) => {
//     if (err) {
//       console.error("Hey look, Error!", err);
//       res.json(err);
//     } else {
//       res.status(200).json(doc);
//     }
//   });
// });


module.exports = router;
