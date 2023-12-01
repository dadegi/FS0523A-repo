import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root',
})
export class TodosService {

    todos: Todo[] = [];

    constructor() {}

    get(): Promise<Todo[]> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(this.todos)
            }, 2000);
        });
    }

    add(todo: Partial<Todo>): Promise<Todo> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                const newTodo: Partial<Todo> = {...todo, id: this.todos.length + 1};
                this.todos.push(newTodo as Todo);
                res(newTodo as Todo)
            }, 2000);
        });
    }

    //SOLUZIONE ALTERNATIVA
    // add(todo: Omit<Todo, 'id'>): Promise<Todo> {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             const newTodo: Todo = {...todo, id: this.todos.length + 1};
    //             this.todos.push(newTodo);
    //             res(newTodo)
    //         }, 2000);
    //     });
    // }

    update(newTodo: Partial<Todo>, id: number): Promise<Todo> {
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.todos = this.todos.map((todo) => {
                    return todo.id === id ? {...todo, ...newTodo} : todo;
                });
                const aggiornato: Todo | undefined = this.todos.find((todo) => todo.id === id);
                res(aggiornato as Todo);
            }, 2000);
        });
    }
}
