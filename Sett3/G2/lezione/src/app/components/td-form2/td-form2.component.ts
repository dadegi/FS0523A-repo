import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';

@Component({
    selector: 'app-td-form2',
    templateUrl: './td-form2.component.html',
    styleUrls: ['./td-form2.component.scss'],
})
export class TdForm2Component implements OnInit {
    generi = [
        {
            label: 'uomo',
            value: 'uomo',
        },
        {
            label: 'donna',
            value: 'donna',
        },
    ];

    user: User = {
        username: '',
        email: '',
        secret: '',
        risposta: '',
        genere: ''
    }

    constructor() {}

    ngOnInit(): void {}

    generaUser(nicola: NgForm) {
        nicola.form.patchValue(
            {
                username: 'pippo',
                email: 'pippo@pippo.com'
            }
        )
    }

    submit() {
        console.log(this.user);
    }
}
