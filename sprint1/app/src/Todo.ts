import { Task } from "./Task"

export interface Todo {
    add: (task:Task) => boolean,
    remove: (id:number) => boolean,
    completed: (id:number) => boolean,
    list: () => Task[]
}