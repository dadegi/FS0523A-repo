import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
    constructor(private authSrv: AuthService, private router: Router) {}

    ngOnInit(): void {}

    registra(form: NgForm) {
        console.log(form.value);
        try {
            this.authSrv.register(form.value).subscribe();
            this.router.navigate(['/login']);
        } catch (error: any) {
            console.log(error);
            if (error.status == 400) {
                alert('Email già registrata!');
                this.router.navigate(['/register']);
            }
        }
    }
}
