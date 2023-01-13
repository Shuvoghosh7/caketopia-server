const Blogs = require("../models/Blogs");

exports.BlogService = async (data) => {
    const result = await Blogs.create(data)
    return result;
}
exports.getBlogsService = async (data) => {
    const result = await Blogs.find({})
    return result;
}

exports.getBlogByIdService = async (id) => {
    const result = await Blogs.findOne({_id:id})
    return result;
}