import { ITask, Task } from "./Task"
import { existFile } from "./existFile";
import fs from 'node:fs'
import { dbFile } from ".";
import { select } from "./inquirer";

export interface ITodo {
    update: () => Promise <Task[] | null>,
    add: (task:Task) => Promise<boolean>,
    remove: (id:string) => boolean,
    completed: (task:ITask) => boolean,
    list: () => Promise<Task[]>
}

export class Todo implements ITodo {
     tasks: ITask[];

    constructor(newTask: ITask | null){
        this.tasks = [];
    }

    update =  async () => {
        if (existFile()) {
            try {
                const dataSaved = await fs.promises.readFile(dbFile)
                const tasks = await JSON.parse(dataSaved.toString())
                this.tasks = [...tasks]
                return tasks;
            } catch (error) {
                console.error('Error reading file: ', error);
               
            }
        } else {
            fs.writeFile(dbFile, '[]', (err: unknown) => {
                if (err) {
                    console.error('Error creating file dbFile.json', err);
                }
            })
        }
        return null
    }

    add = async (newtask: Task) => {
        try {
            await this.update()
            this.tasks.push(newtask)
            this.loadToFile()
            select()
        }catch(err){
            console.error("Error adding new task: " +err);
        }
        return true;
    }

    remove = (id: string) => {
        const tempArray = this.tasks.filter(value => value.id != id)
        if(Array.isArray(tempArray)) 
            tempArray.forEach(value => console.log('==', value.task))
        
        return true;
    }
    list = async () => {
        try {
            const taskList = await this.update();
            if(Array.isArray(taskList)) {
                console.log(' Done  Description ');
                let i = 1;
                taskList.forEach((value) => {
                    let completedIcon = value.completed ? '[x]' : '[ ]'
                    console.log('-  '+completedIcon+ '  '+'  '+value.task);
                })                
            }            
        } catch (error) {
            console.error('Error listing tasks: '+ error);
        }
        return this.tasks;
    }
    completed = (newtask:ITask) => {
        
        return true;

    }

    private loadToFile = () => {
        fs.writeFile(dbFile, JSON.stringify(this.tasks), (err: unknown) => {
            if (err) {
                console.error('Error creating new file dbFile.ts', err);
            }
        })
    }

}
