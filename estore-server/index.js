const express = require('express');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const app = express();
const PORT = 5001;
const cors = require('cors');

app.use(cors());

app.use('/productCategories', productCategories);
app.use('/products', products);

const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5001');
});
