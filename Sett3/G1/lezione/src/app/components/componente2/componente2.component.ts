import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs';

@Component({
    selector: 'app-componente2',
    templateUrl: './componente2.component.html',
    styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component implements OnInit, OnDestroy {

    sub!: Subscription;
    conteggio: number = 0;
    intervallo: any

    constructor() {
        // Definizione e istruzioni di esecuzione esecuzione dell'observable
        this.intervallo = new Observable(observer => {
            let conta = 0;
            setInterval(() => {
                observer.next(conta);
                if (conta === 5) {
                    observer.complete();
                    console.log('Observer completato')
                }
                if (conta >= 6) {
                    observer.error(new Error('Conta è troppo grande'));
                }
                conta++;
            }, 1000)
        });
    }

    ngOnInit(): void {

        // Osservazione dell'observable
        this.sub = this.intervallo.pipe(map((numero) => {
            this.conteggio = Number(numero);
            return `Siamo al numero ${numero}`;
        })).subscribe((numero: any) => {
            console.log(numero);
        },(error: any) => {
            console.log(error);
        },);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        console.log('Observable cancellato');
    }
}
