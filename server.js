const app = require('./app');
const connectDB = require('./config/db');
connectDB();
app.listen(8000, () => {
    console.log("Server is running on port 8000!");
});





//const express = require('express');
/*

require('dotenv').config() ;

app.use(express.json()); 

const profileRoutes = require('./routes/profileRoutes');

app.use('/', profileRoutes);
*/