import { ITask } from "./Task";
import { Todo } from "./Todo";
import { add, list, remove } from "./choicesInquirer";

// import inquirer from 'inquirer';
const inquirer = require("inquirer");


export const select =async () => {
    
   const answer = await inquirer
       .prompt([
         {
           type:'list',
           name: 'useCase',
           message: 'What do you want?',
           choices: ['Add', 'Remove', 'Completed', 'list']
         }
       ])
       
   if (answer.useCase) {
     switch (answer.useCase) {
     
     case 'Add':
       const newTask = await add();
         const newTodo = new Todo(newTask);
         newTodo.add(newTask)
       break;
     case 'Remove':
      const taskToRemove = await remove();
      const removeTask = new Todo(null)      
      removeTask.remove(taskToRemove.id)
       break;
     case 'Completed':
     
       
       break;
     case 'list':
      list()      
      break;
     default:
       break;
     }
         
   }

 }
  