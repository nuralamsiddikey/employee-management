const {Create} = require('./post.controller')
const {DeleteEmployeeById} = require('./delete.controller')
const {UpdateEmployeeById} = require('./put.controller')


const {
    GetAllEmployees,
    GetEmployeeById,
    Export,
    searchEmployees
} = require('./get.controller')

module.exports = {
    Create,
    GetAllEmployees,
    GetEmployeeById,
    DeleteEmployeeById,
    UpdateEmployeeById,
    Export,
    searchEmployees
}
