const express = require("express");
const router=express.Router()
const blogController=require('../controller/blogs.controller');
const uploader = require("../middlewar/uploder");

router.route('/blogs')
.post(uploader.single('image'),blogController.createBlogs)
.get(blogController.getBlogs)
router.route('/blogs/:id')
.get(blogController.getBlogById)

module.exports=router;
