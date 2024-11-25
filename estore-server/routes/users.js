const express = require('express');
const pool = require('../share/pool');
const crypto = require('crypto'); // Importar crypto para hashing
const users = express.Router();

users.post('/signup', (req, res) => {
  try {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let pin = req.body.pin;
    let email = req.body.email;
    let password = req.body.password;

    pool.query(
      `SELECT COUNT(*) AS count FROM users WHERE email = ?`,
      [email], // Usamos parámetros para evitar SQL injection
      (error, resultCount) => {
        if (error) {
          res.status(500).send(error);
        } else {
          if (resultCount[0].count > 0) {
            res.status(200).send('Email already exists');
          } else {
            // Hashear la contraseña usando crypto
            const hashedPassword = crypto
              .createHash('sha256') // Usamos el algoritmo SHA-256
              .update(password)
              .digest('hex'); // Convertir el hash a formato hexadecimal

            const query = `INSERT INTO users (email, firstName, lastName, address, city, state, pin, password)
                           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [email, firstName, lastName, address, city, state, pin, hashedPassword];

            pool.query(query, values, (error, result) => {
              if (error) {
                res.status(401).send(error);
              } else {
                res.status(201).send('success');
              }
            });
          }
        }
      }
    );
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = users;
