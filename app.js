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
const cakeRequestRoute=require('./routes/cakeRequest.route')
const checkoutRoute=require('./routes/checkout.route')
const userRoute=require("./routes/user.route")



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// route colling
app.use("/api/v1",express.static("./ProductImages"),productRoute)
app.use("/api/v1",express.static("./blogsImages"),blogRoute)
app.use("/api/v1",checkoutRoute)
app.use("/api/v1",userRoute)

app.use("/api/v1",express.static("./cakeRequestImages"),cakeRequestRoute)


module.exports = app;
