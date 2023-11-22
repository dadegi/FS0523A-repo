abstract class Articolo {
    codice: string;
    tipo: string;
    constructor(_codice: string, _tipo: string) {
        this.codice = _codice;
        this.tipo = _tipo;
    }

    abstract getMeasure(): any;
}

class Tastiera extends Articolo {
    pezzi: number;
    constructor(_codice: string, _tipo: string, _pezzi: number) {
        super(_codice, _tipo);
        this.pezzi = _pezzi;
    }

    getMeasure() {
        return this.pezzi * 5;
    }
}

class Cavo extends Articolo {
    metri: number;
    constructor(_codice: string, _tipo: string, _metri: number) {
        super(_codice, _tipo);
        this.metri = _metri;
    }

    getMeasure() {
        return `Mt. ${this.metri * 10}`;
    }
}

let ordineTastiere = new Tastiera('T001', 'articolo unico', 5);

console.log(`Sono state ordinate ${ordineTastiere.getMeasure()} tastiere`);

let ordineCavi = new Cavo('C001', 'Articolo a metri', 5);

console.log((`Sono stati ordinati ${ordineCavi.getMeasure()} di cavi`));
