const express = require('express');
const productCategories = require('./routes/productCategories');
const products = require('./routes/products');
const users = require('./routes/users'); // Importa el módulo de rutas users
const app = express();
const PORT = 5001;
const bodyparser = require('body-parser');
const cors = require('cors');

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Configuración de encabezados
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyparser.json());

// Registrar rutas
app.use('/productCategories', productCategories);
app.use('/products', products);
app.use('/users', users); // Aquí se registra la ruta de users

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Iniciar el servidor
const server = app.listen(PORT, () => {
  console.log('App is running on the port - 5001');
});
