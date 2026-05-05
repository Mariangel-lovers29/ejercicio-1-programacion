// ===============================
// IMPORTACIÓN DE LIBRERÍAS
// ===============================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// ===============================
// CREACIÓN DE LA APLICACIÓN
// ===============================
const app = express();

// ===============================
// CONFIGURACIÓN DE MIDDLEWARE
// ===============================
// Permite leer datos enviados desde formularios HTML
app.use(bodyParser.urlencoded({ extended: true }));

// Permite usar archivos estáticos (HTML, CSS)
app.use(express.static('views'));

// ===============================
// RUTA PRINCIPAL (FORMULARIO)
// ===============================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// ===============================
// RUTA QUE RECIBE EL ANIMAL
// ===============================
app.post('/animal', (req, res) => {

    // Capturamos el dato enviado desde el formulario
    const animal = req.body.animal;

    // Redirigimos a la vista de resultado con el dato en la URL
    res.redirect(`/resultado.html?animal=${animal}`);
});

// ===============================
// INICIO DEL SERVIDOR
// ===============================
app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});