const express = require('express');
const app=express();
const placeRoutes  = require('./routes/placeRoutes');
const reviewRoutes = require("./routes/reviewRoutes");

app.use(express.json());
app.use('/api/places',    placeRoutes);
app.use("/api/reviews", reviewRoutes);


module.exports=app;
















