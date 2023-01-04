const { BlogService } = require("../Services/blog.service")
const Blogs = require("../models/Blogs");
/* exports.createBlogs=async (req, res, next) => {
    try {
      //create method
      const result=await BlogService(req.files)
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully create a blogs",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
  
    }
    
  } */
  exports.createBlogs=async (req, res, next) => {
    const { filename } = req.file;
    const { blogTitle } = req.body;
    const { description } = req.body;
    const { blogDate } = req.body;

    if (!blogTitle || !description || !blogDate || !filename) {
        res.status(401).json({ status: 401, message: "fill all the data" })
    }
    try {
        const userdata = new Blogs({
            imageUrl: filename,
            blogTitle: blogTitle,
            description: description,
            blogDate: blogDate

        });
        const finaldata = await userdata.save();
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
    
  } 