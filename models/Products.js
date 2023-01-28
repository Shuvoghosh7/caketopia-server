const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const validator = require('validator');
//schema design
const productSchema = mongoose.Schema({
    imageUrl: [{
        type: String,
        required: true,
    }],
    productName: {
      type: String,
      required: [true, "Please provide a name for thid product"],
      lowercase:true,
      minLength: [3, "Name mast be 3 characters"],
      maxLength: [100, "Name is too larges"],
    },
    description: {
      type: String,
      required: true
    },
    category:{
      type:String,
      require:true,
    },
    quantity:{
      type: Number,
      require: true,
      min: [0, "product price can not Nagative"]
    },
    price: {
        type: Number,
        require: true,
        min: [0, "product price can not Nagative"]
    },

    
  }, {
    timestamps: true
  })
  
  //model
  const Products = mongoose.model('Products', productSchema)

  module.exports=Products;