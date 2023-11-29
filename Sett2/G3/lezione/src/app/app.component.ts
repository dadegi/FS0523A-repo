import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'lezione';

    users = [
        {
            nome: 'Mario',
            cognome: 'Rossi',
            studente: true
        },
        {
            nome: 'Aldo',
            cognome: 'Bianchi',
            studente: false
        },
        {
            nome: 'Anna',
            cognome: 'Verdi',
            studente: false
        },
        {
            nome: 'Nicola',
            cognome: 'Neri',
            studente: true
        },
        {
            nome: 'Giovanni',
            cognome: 'Chiari',
            studente: false
        },
    ]
}
