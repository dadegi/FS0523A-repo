import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
    selector: 'app-pagina',
    templateUrl: './pagina.component.html',
    styleUrls: ['./pagina.component.scss'],
})
export class PaginaComponent implements OnInit {
    constructor(private userSrv: UsersService) {}

    users: any[] = [];

    ngOnInit(): void {
        this.users = this.userSrv.users;
    }
}
