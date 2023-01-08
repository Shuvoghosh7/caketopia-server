const products = require("../models/Products");

exports.productsService = async (filters,queries) => {
    const result = await products.find(filters)
    .sort(queries.sortBy)
    .select(queries.fields)
    return result;
}

exports.getProductByIdService = async (id) => {
    const product = await products.findOne({_id:id})
    return product;
}