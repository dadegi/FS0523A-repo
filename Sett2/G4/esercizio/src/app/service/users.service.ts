import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    users: User[] = [
        {
            email: 'dario@dario.com',
            id: 1,
            nome: 'dario',
            ruolo: 'user',
        },
        {
            email: 'pippo@pippo.com',
            id: 2,
            nome: 'pippo',
            ruolo: 'admin',
        },
        {
            email: 'pluto@pluto.com',
            id: 3,
            nome: 'pluto',
            ruolo: 'user',
        },
        {
            email: 'paperino@paperino.com',
            id: 4,
            nome: 'paperino',
            ruolo: 'admin',
        },
    ];

    constructor() {}

    recuperaUtenti() {
        return this.users;
    }

    recuperaUtente(id: number) {
        let utenteSingolo = this.users.find((user) => user.id == id);
        return utenteSingolo;
    }
}
