const Checkout = require("../models/Checkout");

exports.createCheckoutService = async (data) => {
    const result = await Checkout.create(data)
    return result;
}

exports.getCheckoutService = async () => {
    const result = await Checkout.find({})
    return result;
}