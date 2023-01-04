const Blogs = require("../models/Blogs");

exports.BlogService = async (data) => {
    const result = await Blogs.create(data)
    return result;
}