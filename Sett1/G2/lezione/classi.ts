class Studente {
    nome: string;
    cognome: string;
    eta: number;
    constructor(_nome: string, _cognome: string, _eta: number) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }

    anno(): number {
        let annoCorrente = new Date().getFullYear(); // Typescript deriva il tipo della variabile dal valore che le viene assegnato
        return annoCorrente;
    }

    static stato(): string {
        return 'Italia';
    }
}

let newStudente1 = new Studente('Mario', 'Rossi', 25)
console.log(newStudente1);

console.log(newStudente1.getStudente(), 'nato nel', (newStudente1.anno() - newStudente1.eta),`, residente in ${Studente.stato()}`);

let newStudente2 = new Studente('Aldo', 'Bianchi', 22);
console.log(newStudente2.getStudente(), 'nato nel', (newStudente2.anno() - newStudente2.eta));

// Sottoclasse della superclasse Studente
class Docente extends Studente { // ereditarietà
    materie: string[];
    constructor(_nome: string, _cognome: string, _eta: number, _materie: string[]) {
        super(_nome, _cognome, _eta);
        this.materie = _materie;
    }

    private stato(): string { // incapsulamento
        return 'San Marino'; // polimorfismo
    }

    residenza(): any {
        return this.stato();
    }
}

let newDocente = new Docente('Anna', 'Verdi', 31, ['HTML', 'CSS', 'Javascript']);
console.log(newDocente.getStudente(), `docente di ${newDocente.materie}`, `residente in ${newDocente.residenza()}`);

