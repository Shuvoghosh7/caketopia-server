const express = require("express");
const router=express.Router()
const checkoutController=require('../controller/checkout.controller');


router.route('/checkout')
.post(checkoutController.createCheckout)
.get(checkoutController.getCheckout)

module.exports=router;