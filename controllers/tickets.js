const Flight = require("../models/ticket");



module.exports = {
  addTicket,
  }

  

function addTicket(req, res, next) {
    var seat = req.body.seat;
    var price = req.body.price;
    var flight = req.params.id;
    var ticket = new Ticket({seat, price, flight});
    ticket.save(function(err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        // for now, redirect right back to new.ejs
        res.redirect(`/flights/${req.params.id}`);
    });
  };