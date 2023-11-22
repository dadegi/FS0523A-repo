interface Studente {
    nome: string;
    cognome: string;
    eta: number;
}

interface Corso {
    tecnologia: string[];
    durata: number;
}

// Generalmente i metodi obbligatori non implementati vengono definiti nelle classi astratte, le interfacce vengono utilizzate come modelli per oggetti

class Frequenza implements Studente, Corso {
    nome: string; 
    cognome: string;
    eta: number;
    tecnologia: string[];
    durata: number;
    frequenza: boolean;
    constructor(_nome: string, _cognome: string, _eta: number, _tecnologia: any, _durata: number, _frequenza: boolean) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
        this.durata = _durata;
        this.frequenza = _frequenza;
    }

    getAnagrafica(): string {
        let frequentante: string;
        if (this.frequenza === true) {
            frequentante = '';
        } else {
            frequentante = 'non';
        }
        return `Lo studente ${this.nome} ${this.cognome}, di anni ${this.eta}, iscritto al corso su ${this.tecnologia} di ${this.durata} mesi, ${frequentante} è frequentante.`
    }
}

let nuovoStudente = new Frequenza('Mario', 'Rossi', 25, ['HTML', 'CSS', 'Javascript'], 3, false);

console.log(nuovoStudente.getAnagrafica());

const altroStudente: Studente = {
    nome: 'Aldo',
    cognome: 'Bianchi',
    eta: 21
}

console.log(altroStudente);

