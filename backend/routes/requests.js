const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const requestsFile = path.join(__dirname, '../data/requests.json');

// Verificar si el archivo existe; si no, crearlo vacío
if (!fs.existsSync(requestsFile)) {
  fs.writeFileSync(requestsFile, JSON.stringify([]));
}

// Obtener todas las solicitudes
router.get('/', (req, res) => {
  const requests = JSON.parse(fs.readFileSync(requestsFile, 'utf-8'));
  res.json(requests);
});

// Crear una nueva solicitud
router.post('/', (req, res) => {
  const requests = JSON.parse(fs.readFileSync(requestsFile, 'utf-8'));
  const newRequest = req.body; // { requestId, bookId, requestedBy, requestedFrom, status }
  requests.push(newRequest);
  fs.writeFileSync(requestsFile, JSON.stringify(requests, null, 2));
  res.status(201).json(newRequest);
});

module.exports = router;
