"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tests/tasks.test.ts
const tasks_1 = require("../tasks");
const fs = __importStar(require("fs"));
describe('add, delete & mark task', () => {
    afterEach(() => {
        fs.unlinkSync("tasks.json");
    });
    test("Agrega una nueva tarea", () => {
        (0, tasks_1.addTask)("Tarea para  crear");
        const tasks = (0, tasks_1.listTasks)();
        expect(tasks).toHaveLength(1);
        expect(tasks[0]).toEqual(expect.objectContaining({
            idNumber: 1,
            taskName: "Tarea para  crear",
            isCompletedTask: false,
        }));
    });
    test("Marca una tarea como hecha", () => {
        (0, tasks_1.addTask)("Tarea para marcar");
        (0, tasks_1.markTaskAsDone)(2);
        const tasks = (0, tasks_1.listTasks)();
        expect(tasks[1].isCompletedTask).toBe(true);
    });
    test("Elimina una tarea", () => {
        (0, tasks_1.addTask)("Tarea para eliminar");
        const tasks = (0, tasks_1.listTasks)();
        (0, tasks_1.deleteTask)(3);
        expect((0, tasks_1.listTasks)()[2]).toEqual((0, tasks_1.listTasks)()[2]);
    });
});
