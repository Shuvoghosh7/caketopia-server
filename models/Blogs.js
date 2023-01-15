const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const validator = require('validator');

const blogsSchema = mongoose.Schema({
  imageUrl: [{
    type: String,
    required: true,
  }],
  blogTitle: {
    type: String,
    required: [true, "Please provide a name for thid product"],
    trim: true,
    lowercase: true,
    minLength: [3, "Name mast be 3 characters"],
    maxLength: [200, "Name is too larges"],
  },
  description: {
    type: String,
    required: true
  },
  authorName:{
    type: String,
    required: true
  },
  blogDate: {
    type: String,
    require: true,
  },

}, {
  timestamps: true
})

//model
const Blogs = mongoose.model('Blogs', blogsSchema)

module.exports = Blogs;