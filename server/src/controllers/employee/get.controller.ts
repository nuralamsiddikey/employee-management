import express, { Request, Response } from 'express';
import { Employee } from '../../Entities/Employee';
import { createConnection, getConnection, getRepository } from 'typeorm';


exports.GetAllEmployees = async (req: Request, res: Response) => {
  try {
    const employeeRepository = getRepository(Employee);
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;



    const [employees, total] = await employeeRepository.findAndCount({
      skip: (page - 1) * limit,
    });

    res.json({
      page,
      limit,
      total,
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



exports.GetEmployeeById = async (req: Request, res: Response) => {
  try {
    const employeeRepository = getRepository(Employee);
    const id: number = parseInt(req.params.id)

    const employee = await employeeRepository.findOne({ where: { id } });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({
      data: employee,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};