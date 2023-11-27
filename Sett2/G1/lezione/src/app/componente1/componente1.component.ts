import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-componente1',
    templateUrl: './componente1.component.html',
    styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component implements OnInit {
    numero: number = 0;
    constructor() {}

    ngOnInit(): void {
        this.numero = 5;
    }
}
