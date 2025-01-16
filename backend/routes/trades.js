const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const tradesFile = path.join(__dirname, '../data/trades.json');

// Verificar si el archivo existe; si no, crearlo vacío
if (!fs.existsSync(tradesFile)) {
  fs.writeFileSync(tradesFile, JSON.stringify([]));
}

// Obtener todas las solicitudes de intercambio
router.get('/', (req, res) => {
  const trades = JSON.parse(fs.readFileSync(tradesFile, 'utf-8'));
  res.json(trades);
});

module.exports = router;
