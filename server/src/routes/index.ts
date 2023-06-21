// import { Router } from 'express';
// const router = Router()

// //import {router} from './employee.route'
// import emRouter from './employee.route';

// router.use('/employee',emRouter.Create)

// //export {router}
// module.exports = router


import express from 'express';
const router = express.Router();
const employeeRouter = require('./employee.route')


router.use('/employee',employeeRouter)

module.exports = router

