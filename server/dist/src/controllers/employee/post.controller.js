"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
const Employee_1 = require("../../Entities/Employee");
const typeorm_1 = require("typeorm");
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employeeRepository = (0, typeorm_1.getRepository)(Employee_1.Employee);
        const newEmployee = new Employee_1.Employee();
        const { name, phone, email, company, department } = req.body;
        const existEmployee = yield employeeRepository.find({
            where: {
                email: email
            }
        });
        if (existEmployee.length > 0) {
            return res.status(200).json({ message: "This email already exist" });
        }
        newEmployee.name = name;
        newEmployee.phone = phone;
        newEmployee.email = email;
        newEmployee.company = company;
        newEmployee.department = department;
        const createdRecord = yield employeeRepository.save(newEmployee);
        res.status(201).json({
            message: "Successfully created new employee",
            error: false
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.Create = Create;
