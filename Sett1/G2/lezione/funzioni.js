// Funzione dichiarata
// function persona(nome: string, cognome: string, eta: number = 20): string {
//     return `${nome} ${cognome} ${eta}`;
// }
// Arrow function con return esplicito
// const persona = (nome: string, cognome: string, eta: number = 20): string => {
//     return `${nome} ${cognome} ${eta}`;
// }
// Arrow function con return implicito
var persona = function (nome, cognome, eta) {
    if (eta === void 0) { eta = 20; }
    return ("".concat(nome, " ").concat(cognome, " ").concat(eta));
};
console.log(persona('David', 'Rios'));
console.log(persona('Dario', 'Del Giudice', 56));
// Funzione definita come oggetto
var Stati = {
    nome: 'Italia',
    capitale: 'Roma',
    descrizione: function () {
        return "La capitale di ".concat(this.nome, " \u00E8 ").concat(this.capitale);
    }
};
console.log(Stati.descrizione());
// Gestione degli errori
var eccezione = 4 / 0;
try {
    if (eccezione === 4 / 0) {
        throw ('Non è possibile la divisione per zero');
    }
    ;
    if (eccezione === 4 / 2) {
        throw ("Risultato della divisione: ".concat(eccezione));
    }
    ;
}
catch (err) {
    console.log(err);
}
finally {
    console.log('La gestione degli errori è stata eseguita');
}
