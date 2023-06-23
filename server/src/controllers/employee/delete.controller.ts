import  { Request, Response } from 'express';
import { Employee } from '../../Entities/Employee';
import { In, createConnection, getConnection, getRepository } from 'typeorm';


exports.DeleteEmployeeById = async (req:Request, res:Response) => {
    try {
        const employeeRepository = getRepository(Employee);
      
        const id:number[] = req.body
        
       const employees = await employeeRepository.findByIds(id);


        if (employees.length === 0) {
          return res.status(404).json({ message: 'Employe not found' });
        }
    
        await employeeRepository.remove(employees);

     

        res.status(200).json({
            message: 'Employee deleted successfully',
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
