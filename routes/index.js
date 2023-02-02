// const { application } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../db');
const employeesRouter = require('./employees')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hola mundo');
});

router.get('/ping', async(req, res, next) =>{
  const [result] = await pool.query('SELECT 1+1 AS result;')
  res.json(result[0]);
});

router.use(employeesRouter)

module.exports = router;
