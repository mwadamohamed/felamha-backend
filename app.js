const express = require('express');
const app = express();

const userRoutes      = require('./routes/userRoutes');
const authRoutes      = require('./routes/authRoutes');
const placeRoutes     = require('./routes/placeRoutes');
const reviewRoutes    = require('./routes/reviewRoutes');
const discountRoutes  = require('./routes/discountRoutes');
const adminRoutes     = require('./routes/adminRoutes');
const adminCrudRoutes = require('./routes/adminCrudRoutes');



app.use(express.json());

app.use('/api/users',     userRoutes);
app.use('/api/auth',      authRoutes);
app.use('/api/places',    placeRoutes);
app.use('/api/reviews',   reviewRoutes);
app.use('/api/discounts', discountRoutes);
app.use('/api/admin',     adminRoutes);
app.use('/api/admin',     adminCrudRoutes);

module.exports = app;