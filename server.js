const express = require('express');
const path = require('path');

const app = express();

// Reemplaza 'nombre-del-proyecto' con el nombre de tu carpeta de build en /dist
const appName = 'nombre-del-proyecto';
app.use(express.static(__dirname + `/dist/${appName}`));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + `/dist/${appName}/index.html`));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Servidor corriendo...');
});