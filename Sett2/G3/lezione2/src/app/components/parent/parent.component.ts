import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, DoCheck {

    nome!: string;
    esiste = false;
    campo: any;

    constructor() {}

    ngOnInit(): void {
        this.campo = document.getElementById('campo') as HTMLInputElement;
    }

    ngDoCheck(): void {
        this.campo.addEventListener('change', this.cambiaValore());
    }

    cambiaValore(): any {
        if (this.campo.value != '') {
            this.esiste = true;
        } else {
            this.esiste = false;
        }
    }

}
