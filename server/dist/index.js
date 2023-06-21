"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const app = (0, express_1.default)();
const PORT = 8000;
const Employee_1 = require("./Entities/Employee");
app.use(express_1.default.json());
app.use('/test', (req, res) => {
    res.send("hello testing");
});
//IMPORT ROUTES
const index_1 = require("./routes/index");
app.use('/api', index_1.router);
// Create database connection and start server
const { createConnection } = require('typeorm');
createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'employee',
    entities: [Employee_1.Employee],
    synchronize: true,
    logging: true
})
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    });
})
    .catch((error) => {
    console.log('Error connecting to database', error);
});
