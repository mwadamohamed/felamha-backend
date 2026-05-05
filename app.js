const express = require('express');
const app=express();
const placeRoutes  = require('./routes/placeRoutes');


app.use(express.json());
app.use('/api/places',    placeRoutes);



module.exports=app;
















