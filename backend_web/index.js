const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');

const hotelRoute = require('./routes/hotel');

const cartRoute = require('./routes/cart');
const payRoute = require('./routes/pay');

const orderRoute = require('./routes/order');
//const stripeRoute = require("./routes/stripe");
const cors = require('cors');

dotenv.config();

mongoose
   .connect('mongodb+srv://Ngoctruong29:712001@cluster0.bragn.mongodb.net/truongb1906602?retryWrites=true&w=majority')
   .then(() => console.log('DB Connection Successfull!'))
   .catch((err) => {
      console.log(err);
   });

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/hotels', hotelRoute);

app.use('/api/pays', payRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 8000, () => {
   console.log('Backend server is running!');
});
