import * as fs from "fs";
import {TodoTask} from './TodoTask';
const TASKS_FILE_PATH = "tasks.json";

let tasks: TodoTask[] = [];

function saveTasks(): void {
  fs.writeFileSync(TASKS_FILE_PATH, JSON.stringify(tasks), "utf-8");
}

function loadTasks() {
  try {
    const data = fs.readFileSync(TASKS_FILE_PATH, "utf-8");
    tasks = JSON.parse(data);
  } catch (err) {
    tasks = [];
  }
  return tasks;
}

function addTask(description: string): void {
  
    const newTask: TodoTask = {
    idNumber: tasks.length + 1,
    taskName: description,
    isCompletedTask: false,
  };
  tasks.push(newTask);
  saveTasks();
}

function markTaskAsDone(id: number): void {
  const task = tasks.find((t) => t.idNumber === id);
  if (task) {
    task.isCompletedTask = true;
    saveTasks();

  }
}

function deleteTask(id: number): void {
  const taskIndex = tasks.findIndex((t) => t.idNumber === id);
  
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasks();

  }
}

function listTasks(): TodoTask[] {
  loadTasks();
  return tasks;
}

export { addTask, markTaskAsDone, deleteTask, listTasks, loadTasks };
