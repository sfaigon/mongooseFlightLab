const Flight = require("./models/flight");

const index = async (req, res, next) => {
  try {
    const myFlights = await Flight.find({});
    console.log(myFlights);
    res.render("flights/index", {
      flights: myFlights,
    });
  } catch (error) {
    console.log(error);
    return next();
  }
};
function newFlight(req, res) {
  res.render("flights/new", {
    title: "New Flight",
    errorMsg: "",
  });
}
async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    // remove any whitespace at start and end of cast
    req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    
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
  }