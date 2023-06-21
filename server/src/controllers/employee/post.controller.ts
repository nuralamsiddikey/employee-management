import express, { Request, Response } from 'express';
import { Employee } from '../../Entities/Employee';
import { createConnection, getConnection, getRepository } from 'typeorm';


exports.Create = async (req: Request, res: Response) => {
    try {
        
        const employeeRepository = getRepository(Employee);
        const newEmployee = new Employee();

        const { name, phone, email, company, department } = req.body

        const existEmployee = await employeeRepository.find({
            where:{
                email:email
            }
        })

        if(existEmployee.length>0){
          return  res.status(200).json({message:"This email already exist"})
        }


        newEmployee.name = name
        newEmployee.phone = phone
        newEmployee.email = email
        newEmployee.company = company
        newEmployee.department = department

        const createdRecord = await employeeRepository.save(newEmployee);

        res.status(201).json({
            message: "Successfully created new employee",
            error: false
        })


    } catch (error) {
        console.log(error);
    }
};


