// tests/tasks.test.ts
import { addTask, markTaskAsDone, deleteTask, listTasks } from "../tasks";
import * as fs from "fs";


test("Agrega una nueva tarea", () => {
  fs.unlinkSync("tasks.json");
  addTask("Tarea para  crear");
  const tasks = listTasks();
  expect(tasks).toHaveLength(1);
  expect(tasks[0]).toEqual(expect.objectContaining({
    idNumber: 1,
    taskName: "Tarea para  crear",
    isCompletedTask: false,
    
  }));
});

test("Marca una tarea como hecha", () => {
  fs.unlinkSync("tasks.json");
  addTask("Tarea para marcar");
  markTaskAsDone(2);
  const tasks = listTasks();
  
  expect(tasks[1].isCompletedTask).toBe(true);
});

test("Elimina una tarea", () => {
  fs.unlinkSync("tasks.json");
  addTask("Tarea para eliminar");
  const tasks = listTasks();
  
  deleteTask(3);
  expect(listTasks()[2]).toEqual(listTasks()[2]);
});
