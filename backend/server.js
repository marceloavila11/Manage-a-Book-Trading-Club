const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('../frontend'));

// Rutas
app.use('/books', require('./routes/books'));
app.use('/trades', require('./routes/trades'));
app.use('/users', require('./routes/users'));

// Servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
