import  { Request, Response } from 'express';
import { Employee } from '../../Entities/Employee';
import { createConnection, getConnection, getRepository } from 'typeorm';


exports.DeleteEmployeeById = async (req:Request, res:Response) => {
    try {
        const employeeRepository = getRepository(Employee);
        const id: number = parseInt(req.params.id)
        
        const employee = await employeeRepository.findOne({where:{id}});
        
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        
        await employeeRepository.remove(employee);
        
        res.json({
            message: 'Employee deleted successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
