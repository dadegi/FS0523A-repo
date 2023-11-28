import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: User[] = [];

    constructor() {}

    creaUtente(nome: string) {
        this.users.push({nome, stato: 'Occupato'});
        console.log(this.users);
    }

    aggiornaUtente(index: number, nuovoStato: string) {
        this.users[index].stato = nuovoStato;
    }
}
