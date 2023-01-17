const express = require("express");
const router=express.Router()
const cakeRequestController=require('../controller/cakeRequest.Controller');
const cakeRequestUploader = require("../middlewar/cakeRequestUploder");

router.route('/cack-request')
.post(cakeRequestUploader.single('cakeImage'),cakeRequestController.createCakeRequest)


module.exports=router;