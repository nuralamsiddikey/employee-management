import { Request, Response } from 'express'
var typeorm = require('typeorm');
var { Employee } = require('../../Entities/Employee');
import { createConnection, getConnection, getRepository } from 'typeorm';


exports.UpdateEmployeeById = async (req: Request, res: Response) => {
    try {
        const employeeRepository = getRepository(Employee);
        const id:number = parseInt(req.params.id)

        const employee = await employeeRepository.findOne({where:{id}});

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        const { name, phone, email, company, department } = req.body;

      
        employee.name = name;
        employee.phone = phone;
        employee.email = email;
        employee.company = company;
        employee.department = department;

       
        employee.id = id;

        await employeeRepository.save(employee);

        res.json({
            message: 'Employee updated successfully',
            data: employee,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
