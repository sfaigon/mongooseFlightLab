const Flight = require("../models/flight");

const index = async (req, res, next) => {
  try {
    const myFlights = await Flight.find({});
   
    res.render("flights/index", {
      flights: myFlights,
    });
  } catch (error) {
    console.log(error);
    return next();
  }
};

async function show(req, res) {
  const flight = await Flight. findById(req.params.id);

  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      try {
        res.render('flights/show', { flight, tickets });

      } catch (err) {
        console.log(err)
        return res.redirect('/flights', { errorMsg: err.message });
      }
        
    });
});
 
}
function newFlight(req, res) {
  res.render("flights/new", {
    title: "New Flight",
    errorMsg: "",
  });
}
async function create(req, res) {
   
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect("/flights");
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render("flights/new", { errorMsg: err.message });
    }
  }

  module.exports = {
    new: newFlight,
    create,
    index,
    show,
  }