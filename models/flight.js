const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {type: String, enum: ["American", "Southwest", "United", "Delta"],required: true},
    airport: {type: String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],default: "DEN"},
    flightNo:{type: String, required: true, min: 10, max: 9999} ,
    departs: {type: Date, default: ()=> {
        const yearLater = new Date();
        yearLater.setFullYear(yearLater.getFullYear() + 1);
        return yearLater;
    }},
  },
      {timeStamps: true}
  );

module.exports= mongoose.model("Flight", flightSchema);