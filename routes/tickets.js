const express = require('express');
const router = express.Router();
const ticketsCtrl = require("../controllers/tickets");

router.post('/:id/ticket',ticketsCtrlsCtrl.addTicket);

module.exports = router;