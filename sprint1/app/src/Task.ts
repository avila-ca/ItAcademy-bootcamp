export interface ITask { 
    id:number,
    task: string,
    completed:boolean
}

export class Task implements ITask {
    id: number;
    task: string;
    completed: boolean;
    
    constructor( id: number, task: string, completed: boolean){
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
}

