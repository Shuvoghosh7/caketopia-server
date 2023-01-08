const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const validator = require('validator');
//schema design
const checkoutSchema = mongoose.Schema({
    productImage: [{
        type: String,
        required: true,
        validate: [validator.isURL , "Plese Provide valid URL"]
    }],
    productname: [{
            type: String,
            required: [true, "Please provide a name for thid product"],
            trim: true,
            lowercase:true,
            minLength: [3, "Name mast be 3 characters"],
            maxLength: [100, "Name is too larges"],
        }],
    totalPrice: {
        type: Number,
        require: true,
        min: [0, "product price can not Nagative"]
    },
    country: {
      type: String,
      required: true
    },
    firstName:{
      type:String,
      require:true,
    },
    lastName:{
      type:String,
      require:true,
    },
    address:{
      type:String,
      require:true,
    },
    email:{
      type:String,
      require:true,
    },
    phone:{
      type:String,
      require:true,
    },
    
  }, {
    timestamps: true
  })
  
  //model
  const Checkout = mongoose.model('Checkout', checkoutSchema)

  module.exports=Checkout;