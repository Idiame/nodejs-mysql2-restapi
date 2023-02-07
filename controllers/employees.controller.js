const pool  = require("../db");

const getEmployees = async (req, res, next) =>{
  const [row] = await pool.query('SELECT * FROM employee')
    res.json(row);
  }

const getEmployee = async(req, res)=>{
  
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
  if (rows.length <=0){
    return res.status(404).json({
      message: 'Employee not found'
    })
  }

  res.json(rows[0])
}


const  createEmployee = async (req, res, next) => {
  const {name, salary} = req.body
  const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
  // console.log(name, salary)
  res.send({ 
    id: rows.insertId,
    name,
    salary
   });
}

const updateEmployee = async(req, res, next)=> {

  const{id} = req.params
  const {name, salary} = req.body
  const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',[name, salary, id])
  if (result.affectedRows === 0){
    return res.status(404).json({
      message: 'Employee not found'
    })
  }
  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?',[id])

  res.json(rows[0]);
}

const deleteEmployee = async(req, res, next)=> {
  const [resultado] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
  
  if(resultado.affectedRows <= 0){
    return res.status(404).json({
      message: 'Employee not found'
    })
  }
  res.sendStatus(204);
}

module.exports = {
  getEmployees, 
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
}