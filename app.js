const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//routes
const productRoute=require('./routes/product.route')
const blogRoute=require('./routes/blog.route')




app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// route colling
app.use("/api/v1",express.static("./images"),productRoute)
app.use("/api/v1",blogRoute)



module.exports = app;
