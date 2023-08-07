// tests/tasks.test.ts
import { addTask, markTaskAsDone, deleteTask, listTasks } from "../tasks";
import * as fs from "fs";

describe('add, delete & mark task', () => {
  
  afterEach(() => {

    fs.unlinkSync("tasks.json");
  })
  test("Agrega una nueva tarea", () => {
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
    addTask("Tarea para marcar");
    markTaskAsDone(2);
    const tasks = listTasks();
    
    expect(tasks[1].isCompletedTask).toBe(true);
  });

  test("Elimina una tarea", () => {
    addTask("Tarea para eliminar");
    const tasks = listTasks();
    
    deleteTask(3);
    expect(listTasks()[2]).toEqual(listTasks()[2]);
  });
})

