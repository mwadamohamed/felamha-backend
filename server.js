
const app =require('./app');
const connectDB =require('./config/db');
connectDB();
app.listen(8000, () => {
    console.log("Server is ruuning on port 7000!");
})