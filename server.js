
const app =require('./app');
const connectDB =require('./config/db');
connectDB();
app.listen(8000, () => {
    console.log("Server is ruuning on port 7000!");
})
const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json()); 

const profileRoutes = require('./routes/profileRoutes');

app.use('/', profileRoutes);
