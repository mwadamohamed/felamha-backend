const express = require('express');
const app = express();

const authRoutes      = require('./routes/authRoutes');
const placeRoutes     = require('./routes/placeRoutes');
const reviewRoutes    = require('./routes/reviewRoutes');
const discountRoutes  = require('./routes/discountRoutes');
app.use(express.json());

app.use('/api/auth',      authRoutes);
app.use('/api/places',    placeRoutes);
app.use('/api/reviews',   reviewRoutes);
app.use('/api/discounts', discountRoutes);

module.exports = app;