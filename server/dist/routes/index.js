"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const employee_route_1 = require("./employee.route");
router.use('/employee', employee_route_1.Create);
