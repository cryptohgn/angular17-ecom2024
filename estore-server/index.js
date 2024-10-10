const express = require('express');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const app = express();
const PORT = 5001;
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use('/productCategories', productCategories);
app.use('/products', products);



app.use((req, res, next) => {
  res.status(404).send('Route not found');
});


const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5001');
});
