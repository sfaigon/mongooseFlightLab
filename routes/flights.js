var express = require('express');
var router = express.Router();
const flightsCtrl = require("../controllers/flights");

/* GET users listing. */
router.get("/", flightsCtrl.index);

router.get("/", flightsCtrl.new);

router.post("/", flightsCtrl.create);

module.exports = router;
