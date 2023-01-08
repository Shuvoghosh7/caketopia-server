const User = require("../models/User");


exports.createUserService = async (userInfo) => {
    const users = await User.create(userInfo)
    return users;
}

exports.getUserByEmail=async(email)=>{
    return await User.findOne({email})
}