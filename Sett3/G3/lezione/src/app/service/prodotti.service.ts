import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Prodotto } from '../models/prodotto';

@Injectable({
    providedIn: 'root',
})
export class ProdottiService {

    apiURL = environment.apiURL;

    constructor(private http: HttpClient) {}

    recupera() {
        return this.http.get<Prodotto[]>(`${this.apiURL}/prodotti`);
    }

    aggiungi(data: Prodotto) {
        return this.http.post<Prodotto>(`${this.apiURL}/prodotti`, data);
    }
}
