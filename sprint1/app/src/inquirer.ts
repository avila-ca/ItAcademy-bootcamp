import { Todo } from "./Todo";
import { add, list } from "./choicesInquirer";

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
 
       break;
     case 'Completed':
     
       
       break;
     case 'list':
      const listTask = await list()
      console.log(listTask)
      break;
     default:
       break;
     }
         
   }

 }
  