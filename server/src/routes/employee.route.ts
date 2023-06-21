import express from 'express';
const router = express.Router();
const employeeController = require('../controllers/employee/index')

router.post('/create',employeeController.Create)
router.get('/find',employeeController.GetAllEmployees)
router.get('/find/:id',employeeController.GetEmployeeById)
router.delete('/delete/:id',employeeController.DeleteEmployeeById)
router.put('/update/:id',employeeController.UpdateEmployeeById)

module.exports = router


