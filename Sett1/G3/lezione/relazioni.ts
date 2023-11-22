// Relazione di associazione
class Telefono {
    numero: number;
    constructor(_numero: number) {
        this.numero = _numero;
    }
}

class Utente {
    nome: string;
    cognome: string;
    numeri: Telefono[];
    constructor(_nome: string, _cognome: string, _numeri: any) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
}

let newUtente = new Utente('Mario', 'Rossi', [3452343563,457867752,45646784656]);

// console.log(newUtente);

// Relazione di composizione
class RigheFat {
    id: number;
    codArt: string;
    descrizione: string;
    qty: number;
    unitPrice: number;
    constructor(_id: number, _codArt: string, _descrizione: string, _qty: number, _unitPrice: number) {
        this.id = _id;
        this.codArt = _codArt;
        this.descrizione = _descrizione;
        this.qty = _qty;
        this.unitPrice = _unitPrice;
    }
}

class TestFat {
    ragSoc: string;
    pIva: string;
    righeFat: RigheFat[];
    totPrice: number;
    constructor(_ragSoc: string, _pIva: string, _righeFat: any, _totPrice: number, readonly id: number) {
        this.ragSoc = _ragSoc;
        this.pIva = _pIva;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }

    getTotaleFat() {
        this.righeFat.forEach(element => {
            let totaleRiga = element.qty * element.unitPrice;
            this.totPrice += totaleRiga;
        });
    }
}

let fattura1 = new TestFat('Azienda XYZ', '01245789654', [{id: 1, codArt: 'A123', descrizione: 'Articolo 1', qty: 2, unitPrice: 25}, {id: 2, codArt: 'B123', descrizione: 'Articolo 2', qty: 3, unitPrice: 20}, {id: 3, codArt: 'C123', descrizione: 'Articolo 3', qty: 2, unitPrice: 80}], 0, 1);

fattura1.getTotaleFat();

console.log(fattura1);
