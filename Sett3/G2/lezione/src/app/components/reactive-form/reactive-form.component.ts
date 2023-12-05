import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
    FormArray,
} from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
    form!: FormGroup;
    generi = ['uomo', 'donna'];
    userProibiti = ['Pippo', 'Pluto'];

    constructor(private fb: FormBuilder) {}

    validUsername = (formC: FormControl) => {
        if (this.userProibiti.includes(formC.value)) {
            return { usernameProibito: true };
        } else {
            return null;
        }
    };

    ngOnInit(): void {
        this.form = this.fb.group({
            userInfo: this.fb.group({
                username: this.fb.control(null, { validators: [Validators.required, this.validUsername] }),
                email: this.fb.control(null, [
                    Validators.required,
                    Validators.email,
                ]),
            }),
            genere: this.fb.control('donna'),
            sports: this.fb.array([]),
        });
    }

    getErrorsC(name: string, error: string) {
        return this.form.get(name)?.errors![error];
    }

    getFormC(name: string) {
        return this.form.get(name);
    }

    getSportsC() {
        return (this.form.get('sports') as FormArray).controls;
    }

    addSports() {
        const control = this.fb.control(null);
        (this.form.get('sports') as FormArray).push(control);
        console.log(this.getSportsC());
    }

    submit() {
        console.log(this.form);
        console.log('Form correttamente inviato');
        this.form.reset();
    }
}
