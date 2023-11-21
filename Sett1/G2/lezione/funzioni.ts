// Funzione dichiarata
// function persona(nome: string, cognome: string, eta: number = 20): string {
//     return `${nome} ${cognome} ${eta}`;
// }

// Arrow function con return esplicito
// const persona = (nome: string, cognome: string, eta: number = 20): string => {
//     return `${nome} ${cognome} ${eta}`;
// }

// Arrow function con return implicito
const persona = (nome: string, cognome: string, eta: number = 20): string => (`${nome} ${cognome} ${eta}`);

console.log(persona('David', 'Rios'));

console.log(persona('Dario', 'Del Giudice', 56));

// Funzione definita come oggetto
const Stati: {
    nome: string,
    capitale: string,
    descrizione: any
} = {
    nome: 'Italia',
    capitale: 'Roma',
    descrizione() {
        return `La capitale di ${this.nome} è ${this.capitale}`;
    }
}

console.log(Stati.descrizione());

// Gestione degli errori
let eccezione: number = 4/0;

try {
    if (eccezione === 4/0) {throw ('Non è possibile la divisione per zero')};
    if (eccezione === 4/2) {throw (`Risultato della divisione: ${eccezione}`)};
}
catch(err: any) {
    console.log(err);
    
} finally {
    console.log('La gestione degli errori è stata eseguita');
}
