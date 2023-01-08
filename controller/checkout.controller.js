const { createCheckoutService } = require("../Services/checkout.services")

exports.createCheckout=async (req, res, next) => {
    try {
      //create method
      const result=await createCheckoutService(req.body)
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully create Checkout",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
  
    }
    
  }

  exports.getCheckout=async (req, res, next) => {
    try {
      //create method
      const brands=await getCheckoutService(req.body);
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for brand",
        data: brands
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
  
    }
    
  }