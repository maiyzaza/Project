var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Quotation = require("../db/models/quotations");


router.get('/', (req,res) => {
    Quotation.find({}).sort({date: 'asc'}).exec((err, result) => {
        if (err) {
          console.debug("Hey Look! Error", err);
          return res.json(err);
        } else {
          // console.log(res);
          return res.json(result);
        }
      });
});

router.post('/', (req,res) => {
  const data = req.body;

//   const quotationData = new Quotation({...data});
//   quotationData.save((err, newInstance) => {
//     if (err) {
//       console.error("Hey look, Error!", err);
//       res.json(err);
//     } else {
//       res.json(newInstance);
//     }
//   });
    Quotation.insertMany(data).then(value => res.json(value)).catch(err => res.json(err));
});

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    Quotation.findByIdAndDelete(id, (err, doc) => {
        if (err) {
        console.error("Hey look, Error!", err);
        res.json(err);
        } else {
        res.status(200).json(doc);
        }
    });
});

module.exports = router;