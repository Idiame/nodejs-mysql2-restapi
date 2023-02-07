const pool  = require("../db");

const getEmployees = async (req, res, next) =>{
  try {
    //throw new Error('Mi error')
    const [row] = await pool.query('SELECT * FROM employee')
    res.json(row); 
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong getting employees"
    })
  }

  }

const getEmployee = async(req, res)=>{
  try {
    //throw new Error('Mi error')
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    if (rows.length <=0){
      return res.status(404).json({
        message: 'Employee not found'
      })
    }
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong getting employee"
    })
  }

}


const  createEmployee = async (req, res, next) => {
  try {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    // console.log(name, salary)
    res.send({ 
      id: rows.insertId,
      name,
      salary
     });
  } catch (error) {
    return res.status(500).json({
      message:"Something went wrong creating employee"
    })
  }
}

const updateEmployee = async(req, res, next)=> {
  try {
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
  } catch (error) {
    return res.status(500).json({
      message:"Something went wrong updating employee"
    })
  }
}

const deleteEmployee = async(req, res, next)=> {
  try {
    const [resultado] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
  
    if(resultado.affectedRows <= 0){
      return res.status(404).json({
        message: 'Employee not found'
      })
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong deleting employee"
    })
  }
}

module.exports = {
  getEmployees, 
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
}