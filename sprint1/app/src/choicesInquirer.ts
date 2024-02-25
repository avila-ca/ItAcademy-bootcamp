import inquirer from "inquirer";
import { Task } from "./Task";

export const add = async () => {
    const answer = await inquirer
         .prompt([
             {
               type:'input',
               name: 'title',
               message: 'What task do want to add to your list?',
             },
             {
               type:'checkbox',
               name: 'completed',
               message: 'Is it a completed task?',
               choices:['true', 'false']
             }
           ])
            const isCompleted = answer.completed == 'true' ? true : false;
     return new Task(1, answer.title, isCompleted);
 }
 