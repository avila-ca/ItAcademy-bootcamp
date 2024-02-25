import { ITask, Task } from "./Task"
import { existFile } from "./existFile";
import fs from 'node:fs'
import { dbFile } from ".";

export interface ITodo {
    update: () => Promise <Task[] | null>,
    add: (task:Task) => Promise<boolean>,
    remove: (id:number) => boolean,
    completed: (task:ITask) => boolean,
    list: () => Task[]
}

export class Todo implements ITodo {
     tasks: ITask[];

    constructor(newTask: ITask){
        this.tasks = [];
    }

    update =  async () => {
        if (existFile()) {
            try {
                const dataSaved = await fs.promises.readFile(dbFile)
                const tasks = JSON.parse(dataSaved.toString())
                this.tasks.push(tasks)
                return tasks;
            } catch (error) {
                console.error('Error reading file: ', error);
                fs.writeFile(dbFile, '[]', (err) => {
                    if (err) {
                        console.error('Error creating new file dbFile.ts', err);
                        return;
                    }
                })
                return null;
            }
        }
    }

    add = async (newtask: Task) => {
        await this.update()
        this.tasks.push(newtask)

        console.log('en add(): '+this.tasks, this.tasks[this.tasks.length - 1]+ 'fin add()');
        return true;
    }

    remove = (id: number) => {

        return true;

    }
    list = () => {

        return this.tasks;
    }
    completed = (newtask:ITask) => {
        
        return true;

    }
    private loadToFile = () => {
        
    }

}
