// const { application } = require('express');
const express = require('express');
const router = express.Router();

const employeesRouter = require('./employees')
const {ping, index} = require("../controllers/indes.controller")

/* GET home page. */
router.get('/', index);

router.get('/ping', ping);

router.use(employeesRouter)

module.exports = router;
