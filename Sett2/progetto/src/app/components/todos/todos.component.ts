import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    todos!: Todo[];
    nuovoTitolo: string | undefined;

    constructor(private todoSrv: TodosService) {}

    ngOnInit(): void {
        this.todoSrv.get().then((todos) => {
            this.todos = todos.filter((todo) => !todo.completed);
        });
    }

    async aggiungi() {
        if (this.nuovoTitolo != undefined) {
            const nuovo = await this.todoSrv.add({
                title: this.nuovoTitolo,
                completed: false,
            });
            this.todos.push(nuovo);
            this.nuovoTitolo = '';
        } else {
            alert('Completare il campo Nuovo Todo');
            return;
        }
    }

    async completa(todo: Todo, i: number) {
        await this.todoSrv.update({ completed: true }, todo.id);
        this.todos.splice(i, 1);
    }
}
