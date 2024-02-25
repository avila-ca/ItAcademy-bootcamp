import inquirer from "inquirer";
import { ITask, Task } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";


export const add = async () => {
    const answer = await inquirer
         .prompt([
             {
               type:'input',
               name: 'title',
               message: 'What task do you want to ADD to your list?',
             },
             {
               type:'checkbox',
               name: 'completed',
               message: 'Is it a completed task?',
               choices:['true', 'false']
             }
           ])
            const isCompleted = answer.completed == 'true' ? true : false;
     return new Task(uuidv4(), answer.title, isCompleted);
 }

 export const remove = async () => {
  const tasks = list()
  const choices = (await tasks).map(task => ({
    name: `${task.task} => ${task.completed ? 'completed[x]' : 'pending[ ]'}`,
    value: task
}));

const answer = await inquirer.prompt({
    type: 'list',
    name: 'selectedTask',
    message: 'Select a task to REMOVE:',
    choices: [...choices, new inquirer.Separator(), 'Cancel']
});

return answer.selectedTask === 'Cancel' ? null : answer.selectedTask;
}

export const list = async () => {
  
  const listTasks = new Todo(null)
  const list = listTasks.list()  
  return list
}