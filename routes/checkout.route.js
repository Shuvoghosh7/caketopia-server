const express = require("express");
const router=express.Router()
const checkoutController=require('../controller/checkout.controller');

router.route('/checkout')
.post(checkoutController.createCheckout)
.post(checkoutController.getCheckout)

module.exports=router;