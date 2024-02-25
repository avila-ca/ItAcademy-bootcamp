export interface ITask { 
    id:string,
    task: string,
    completed:boolean
}

export class Task implements ITask {
    id: string;
    task: string;
    completed: boolean;
    
    constructor( id: string, task: string, completed: boolean){
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
}

