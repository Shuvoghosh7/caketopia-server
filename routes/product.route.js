const express = require("express");
const router=express.Router()
const productController=require('../controller/product.controller');
const productUploader = require("../middlewar/productUploder");

router.route('/product')
.post(productUploader.single('photo'),productController.createProduct)
.get(productController.getProduct)
router.route('/product/:id')
.get(productController.getProductById)

module.exports=router;