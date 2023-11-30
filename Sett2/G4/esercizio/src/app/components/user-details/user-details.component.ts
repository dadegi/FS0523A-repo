import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

    user: User | undefined;

    constructor(private route: ActivatedRoute, private userSrv: UsersService) {}

    ngOnInit(): void {
        this.route.params.subscribe((param) => {
            const id = +param['id'];
            this.user = this.userSrv.recuperaUtente(id);
        });
    }
}
