const express = require("express");
const router=express.Router()
const blogController=require('../controller/blogs.controller');
const uploader = require("../middlewar/uploder");

router.route('/blogs')
.post(uploader.single('image'),blogController.createBlogs)

module.exports=router;
