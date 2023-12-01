import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/service/todos.service';

@Component({
    selector: 'app-completati',
    templateUrl: './completati.component.html',
    styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent implements OnInit {

    todos!: Todo[];

    constructor(private todoSrv: TodosService) {}

    ngOnInit(): void {
        this.todoSrv.get().then((todos) => {
            this.todos = todos.filter((todo) => todo.completed);
        });
    }
}
