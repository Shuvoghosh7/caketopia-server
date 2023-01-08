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
const checkoutRoute=require('./routes/checkout.route')




app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// route colling
app.use("/api/v1",express.static("./ProductImages"),productRoute)
app.use("/api/v1",express.static("./blogsImages"),blogRoute)
app.use("/api/v1",checkoutRoute)



module.exports = app;
