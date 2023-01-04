/* const express = require("express");
const router = new express.Router();
const multer = require('multer')
const path = require("path")
const products = require("../models/Products");

const storage = multer.diskStorage({
    destination: 'images/',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})
const uploader = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const suppatedImage = /png|jpg|webp|/;
        const extension = path.extname(file.originalname)

        if (suppatedImage.test(extension)) {
            cb(null, true);
        } else {
            cb(new Error("Must be  file"));
        }
    },
    limits: {
        fieldSize: 5000000,
    }
})

const upload = multer({
    storage: storage,
    files: uploader
});

router.post("/product", upload.single("photo"), async (req, res) => {

    const { filename } = req.file;

    const { productName } = req.body;
    const { description } = req.body;
    const { category } = req.body;
    const { price } = req.body;

    if (!productName || !description || !category || !price || !filename) {
        res.status(401).json({ status: 401, message: "fill all the data" })
    }
    try {
        const userdata = new products({
            imageUrl: filename,
            productName: productName,
            description: description,
            category: category,
            price: price

        });
        const finaldata = await userdata.save();
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});

module.exports = router; */

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