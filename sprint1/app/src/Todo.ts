import { ITask, Task } from "./Task"
import { existFile } from "./existFile";
import fs from 'node:fs'
import { dbFile } from ".";
import { select } from "./inquirer";

export interface ITodo {
    update: () => Promise <Task[] | null>,
    add: (task:Task) => Promise<boolean>,
    remove: (id:number) => boolean,
    completed: (task:ITask) => boolean,
    list: () => Task[]
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
            
                console.log(dataSaved.toString(), this.tasks);
                const tasks = await JSON.parse(dataSaved.toString())
                this.tasks = [...tasks]
                
                return tasks;
            } catch (error) {
                console.error('Error reading file: ', error);
               
            }
        } else {
            fs.writeFile(dbFile, '[]', (err: unknown) => {
                if (err) {
                    console.error('Error creating new file dbFile.ts', err);
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

    remove = (id: number) => {

        return true;

    }
    list = () => {
        this.update();
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
