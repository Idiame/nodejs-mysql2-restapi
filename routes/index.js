const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hola mundo');
});

router.get('/employees', function(req, res, next) {
  res.send('Obteniendo empleados');
});
router.post('/employees', function(req, res, next) {
  res.send('Creando empleados');
});
router.put('/employees', function(req, res, next) {
  res.send('Actualizando empleados');
});
router.delete('/employees', function(req, res, next) {
  res.send('Eliminando empleados');
});

module.exports = router;
