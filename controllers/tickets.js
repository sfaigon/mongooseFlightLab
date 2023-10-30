const Flight = require("../models/flight");
const Ticket = require("../models/tickets");


module.exports = {
  create,
  }

  

async function create(req, res, next) {
  const seat = req.body.seat;
  const price = req.body.price;
  const flight = await Flight. findById(req.params.id);
  const ticket = new Ticket({seat, price, flight});
  try {
    await ticket.save();
  } catch (err){
    console.log(err)
  }
  // const flight = await Flight. findById(req.params.id);
  
  // flight.destinations.push(req.body);
  // try {
  //     await flight.save();
  // } catch (err) {
  //     console.log(err)
  // }
  res.redirect(`/flights/${flight._id}`);










    // var seat = req.body.seat;
    // var price = req.body.price;
    // var flight = req.params.id;
    // var ticket = new Ticket({seat, price, flight});
    // ticket.save(function(err) {
    //     // one way to handle errors
    //     if (err) return res.render('flights/new');
    //     // for now, redirect right back to new.ejs
    //     res.redirect(`/flights/${req.params.id}`);
    // });
  };