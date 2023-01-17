const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const validator = require('validator');
//schema design
const cakeRequestSchema = mongoose.Schema({
  imageUrl: [{
    type: String,
    required: true,
  }],
  yourName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    require: true,
  },
  deliveryDate: {
    type: String,
    require: true,
  },
  flavour: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },

  weight: {
    type: Number,
    require: true,
    min: [0, "weight price can not Nagative"]
  },



}, {
  timestamps: true
})

//model
const CakeRequest = mongoose.model('CakeRequest', cakeRequestSchema)

module.exports = CakeRequest;