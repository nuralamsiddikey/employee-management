"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const index_1 = require("../controllers/employee/index");
Object.defineProperty(exports, "Create", { enumerable: true, get: function () { return index_1.Create; } });
router.post('/create', index_1.Create);
