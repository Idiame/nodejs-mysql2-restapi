const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Obteniendo empleados');
  });
  router.post('/', function(req, res, next) {
    res.send('Creando empleados');
  });
  router.put('/', function(req, res, next) {
    res.send('Actualizando empleados');
  });
  router.delete('/', function(req, res, next) {
    res.send('Eliminando empleados');
  });

  module.exports = router;  