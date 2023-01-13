const { BlogService, getBlogsService, getBlogByIdService } = require("../Services/blog.service")
const Blogs = require("../models/Blogs");
  exports.createBlogs=async (req, res, next) => {
    const { filename } = req.file;
    const { blogTitle } = req.body;
    const { description } = req.body;
    const { blogDate } = req.body;

    if (!blogTitle || !description || !blogDate ||!filename) {
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

  exports.getBlogs=async (req, res, next) => {
    try {
      //create method
      const blogs=await getBlogsService(req.body);
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for Blogs",
        data: blogs
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
  
    }
    
  }

  exports.getBlogById=async (req, res, next) => {
    const {id}=req.params;
    try {
      //create method
      const blog=await getBlogByIdService(id);
      if(!blog){
        return res.status(400).json({
            stauts:"fail",
            error : "Could not finds a blog with this id"
          })
      }
      res.status(200).json({
        stauts: "success",
        massage: "successfully get a blog",
        data: blog
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
  
    }
  }