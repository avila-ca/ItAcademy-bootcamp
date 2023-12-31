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
exports.loadTasks = exports.listTasks = exports.deleteTask = exports.markTaskAsDone = exports.addTask = void 0;
const fs = __importStar(require("fs"));
const TASKS_FILE_PATH = "tasks.json";
let tasks = [];
function saveTasks() {
    fs.writeFileSync(TASKS_FILE_PATH, JSON.stringify(tasks), "utf-8");
}
function loadTasks() {
    try {
        const data = fs.readFileSync(TASKS_FILE_PATH, "utf-8");
        tasks = JSON.parse(data);
    }
    catch (err) {
        tasks = [];
    }
    return tasks;
}
exports.loadTasks = loadTasks;
function addTask(description) {
    const newTask = {
        idNumber: tasks.length + 1,
        taskName: description,
        isCompletedTask: false,
    };
    tasks.push(newTask);
    saveTasks();
}
exports.addTask = addTask;
function markTaskAsDone(id) {
    const task = tasks.find((t) => t.idNumber === id);
    if (task) {
        task.isCompletedTask = true;
        saveTasks();
    }
}
exports.markTaskAsDone = markTaskAsDone;
function deleteTask(id) {
    const taskIndex = tasks.findIndex((t) => t.idNumber === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasks();
    }
}
exports.deleteTask = deleteTask;
function listTasks() {
    loadTasks();
    return tasks;
}
exports.listTasks = listTasks;
