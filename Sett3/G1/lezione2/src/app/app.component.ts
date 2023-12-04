import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './models/user';
import { UsersService } from './service/users.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'lezione2';
    sub!: Subscription;
    users: User[] | undefined;
    utente!: User;
    nuovoUtente: {
        first_name: string;
        last_name: string;
    } = {
        first_name: '',
        last_name: '',
    };

    constructor(private userSrv: UsersService) {}

    ngOnInit(): void {
        this.recupera();
    }

    recupera() {
        this.sub = this.userSrv.recuperaUtenti().subscribe((risultato) => {
            this.users = risultato;
        });
    }

    cancella(id: number) {
        this.sub = this.userSrv.cancellaUtente(id).subscribe(() => {
            // Serve esclusivamente per la stampa in console dell'utente cancellato
            this.utente = this.users!.filter((user) => user.id === id)[0];
            console.log(
                `Utente ${this.utente.first_name} ${this.utente.last_name} cancellato!`
            );
            // fine stampa
            this.users = this.users?.filter((user) => user.id != id);
        });
    }

    creaUtente() {
        this.sub = this.userSrv
            .scriviUtente(this.nuovoUtente)
            .subscribe((nuovo) => {
                this.users?.push(nuovo);
            });
    }
}
