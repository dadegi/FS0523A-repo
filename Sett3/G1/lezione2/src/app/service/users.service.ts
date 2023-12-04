import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    url = environment.apiURL;

    constructor(private http: HttpClient) {}

    recuperaUtenti() {
        return this.http.get<{data: User[]}>(this.url).pipe(map(dati => dati.data));
    }

    cancellaUtente(id: number) {
        return this.http.delete(this.url + `/${id}`);
    }

    scriviUtente(nuovoUtente: Partial<User>) {
        return this.http.post<User>(this.url, nuovoUtente);
    }
}
