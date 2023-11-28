import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

    @Input() user: any;
    @Input() id!: number;

    constructor(private userSrv: UsersService) {}

    ngOnInit(): void {}

    cambioStato(nuovoStato: string) {
        this.userSrv.aggiornaUtente(this.id, nuovoStato);
    }
}
