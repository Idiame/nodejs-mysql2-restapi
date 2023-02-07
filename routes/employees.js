const express = require('express');
const router = express.Router();
const {getEmployees, getEmployee,   createEmployee, updateEmployee, deleteEmployee }= require('../controllers/employees.controller')

  router.get('/employees', getEmployees);
  router.get('/employees/:id', getEmployee);

  router.post('/employees', createEmployee);

  router.put('/employees', updateEmployee);

  router.delete('/employees', deleteEmployee);

  module.exports = router;  