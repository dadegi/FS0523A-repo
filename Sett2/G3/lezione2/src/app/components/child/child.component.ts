import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() nome!: string;
    mioNome!: string;

    constructor() {
        console.log(`Costruttore attivato. Nome: ${this.nome}`);
    }

    ngOnInit(): void {
        console.log(`OnInit attivato. Nome: ${this.nome}`);
        this.mioNome = this.nome;
    }

    ngOnChanges() {
        console.log(`OnChanges attivato. Nome: ${this.nome}`);
    }

    ngDoCheck(): void {
        console.log(`DoCheck attivato. Nome: ${this.nome}`);
        if (this.nome == '') {
            this.mioNome = this.nome;
        } else if (this.mioNome != this.nome) {
            this.nome = this.mioNome
        }
    }

    ngAfterContentInit(): void {
        console.log(`AfterContentInit attivato. Nome: ${this.nome}`);
    }

    ngAfterContentChecked(): void {
        console.log(`AfterContentChecked attivato. Nome: ${this.nome}`);
    }

    ngAfterViewInit(): void {
        console.log(`AfterviewInit attivato. Nome: ${this.nome}`);
    }

    ngAfterViewChecked(): void {
        console.log(`AfterViewChecked attivato. Nome: ${this.nome}`);
    }

    ngOnDestroy(): void {
        console.log(`OnDestroy attivato. Nome: ${this.nome}`);
    }
}
