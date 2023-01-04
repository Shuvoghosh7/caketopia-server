const products = require("../models/Products");

exports.createProduct=async (req, res, next) => {
    
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
}