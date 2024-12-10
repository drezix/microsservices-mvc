const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

app.use('/', mainRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
