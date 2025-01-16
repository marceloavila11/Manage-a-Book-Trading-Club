const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../data/users.json');

// Verificar si el archivo existe; si no, crearlo vacío
if (!fs.existsSync(usersFile)) {
  fs.writeFileSync(usersFile, JSON.stringify([]));
}

// Obtener todos los usuarios
router.get('/', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
  res.json(users);
});

// Agregar un nuevo usuario
router.post('/', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));
  const newUser = req.body; // { username, fullName, city, state }

  // Verificar si el usuario ya existe
  const userExists = users.some((user) => user.username === newUser.username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists!' });
  }

  users.push(newUser);
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
  res.status(201).json({ message: 'User added successfully!', user: newUser });
});

module.exports = router;
