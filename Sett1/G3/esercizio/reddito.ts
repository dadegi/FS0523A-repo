abstract class Tasse {
    redditoLordo: number;
    irpef: number;
    inps: number;

    constructor (_redditoLordo: number, _irpef: number, _inps: number) {
        this.redditoLordo = _redditoLordo;
        this.irpef=_irpef;
        this.inps = _inps;
    }

    abstract getTasseIrpef(): number;
    abstract getTasseInps(): number;
}

class Lavoratore extends Tasse {
    
    constructor(redditoLordo: number, irpef: number, inps: number) {
        super (redditoLordo, irpef, inps);
    }

    getUtileTasse(): number {
        return this.redditoLordo * 0.78;
    }

    getTasseIrpef(): number {
        return this.getUtileTasse() * this.irpef;
    }

    getTasseInps(): number {
        return this.getUtileTasse() * this.inps;
    }

    getRedditoNetto(): number {
        return this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    }
}

let professionista = new Lavoratore(35000, 0.05, 0.25);

console.log(`---- Situazione reddituale professionista con lordo di € ${professionista.redditoLordo} ----`);
console.log(`Imponibile: € ${professionista.getUtileTasse()}`);
console.log(`Tasse Irpef: € ${professionista.getTasseIrpef()}`);
console.log(`Tasse INPS: € ${professionista.getTasseInps()}`);
console.log(`Utile netto: € ${professionista.getRedditoNetto()}`);

let artigiano = new Lavoratore(31500, 0.15, 0.19);

console.log(`---- Situazione reddituale artigiano con lordo di € ${artigiano.redditoLordo} ----`);
console.log(`Imponibile: € ${artigiano.getUtileTasse()}`);
console.log(`Tasse Irpef: € ${artigiano.getTasseIrpef()}`);
console.log(`Tasse INPS: € ${artigiano.getTasseInps()}`);
console.log(`Utile netto: € ${artigiano.getRedditoNetto()}`);

let commerciante = new Lavoratore(52000, 0.15, 0.35);

console.log(`---- Situazione reddituale commerciante con lordo di € ${commerciante.redditoLordo} ----`);
console.log(`Imponibile: € ${commerciante.getUtileTasse()}`);
console.log(`Tasse Irpef: € ${commerciante.getTasseIrpef()}`);
console.log(`Tasse INPS: € ${commerciante.getTasseInps()}`);
console.log(`Utile netto: € ${commerciante.getRedditoNetto()}`);
