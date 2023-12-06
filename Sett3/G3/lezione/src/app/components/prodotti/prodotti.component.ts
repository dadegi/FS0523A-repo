import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/service/prodotti.service';

@Component({
    selector: 'app-prodotti',
    templateUrl: './prodotti.component.html',
    styleUrls: ['./prodotti.component.scss'],
})
export class ProdottiComponent implements OnInit {

    prodotti: Prodotto[] | undefined;

    constructor(private prodottiSrv: ProdottiService) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.prodottiSrv.recupera().subscribe((prodotti: Prodotto[]) => {
                this.prodotti = prodotti
            });
        }, 1000);
    }
}
