const request = require("../models/CakeRequest");

exports.createCakeRequest=async (req, res, next) => {
    const { yourName } = req.body;
    const { phoneNumber } = req.body;
    const { emailAddress } = req.body;
    const { deliveryDate } = req.body;
    const { flavour } = req.body;
    const { filename } = req.file;
    const { message } = req.body;
    
    const { weight } = req.body;

    if (!yourName || !phoneNumber || !emailAddress || !deliveryDate || !flavour || !message || !weight || !filename) {
        res.status(401).json({ status: 401, message: "fill all the data" })
    }
    try {
        const userdata = new request({
            yourName: yourName,
            emailAddress: emailAddress,
            phoneNumber:phoneNumber,
            deliveryDate: deliveryDate,
            flavour: flavour,
            message: message,
            imageUrl: filename,
            weight: weight,
        });

        const finaldata = await userdata.save();
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
}
