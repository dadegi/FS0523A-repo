var saluto = 'Hello World!';
// TIPI IN TYPESCRIPT (primitivi)
var stringa;
var numero;
var booleano;
var indefinito;
var nullo;
var nonLoSo; // Il tipo any può cambiare nel corso del flusso
var nonLoSapro;
var costante = 'Sono una stringa costante';
// TIPI DERIVATI O COMPLESSI
var array;
var oggetto;
console.log(saluto);
saluto = 5;
console.log(saluto);
// Operatore ternario in typescript
// Funziona con entrambe le sintassi; quella a riga 26 è la sintassi letterale Typescript
var exp = 5 < 3
    ? 'Il primo numero è minore del secondo'
    : 'Il secondo numero è minore del primo';
// let exp = (5<3) ? true: false;
console.log(exp);
var a = 8;
var b = 5;
var operazione = function (num1, num2) {
    var risultato = num1 - num2;
    console.log(risultato);
    return risultato;
};
// Il ternario verifica se il risultato della funzione è un numero positivo: se sì, esegue la funzione, altrimenti produce una stringa
var verifica = a > b ? operazione(a, b) : 'La funzione produce un numero negativo';
console.log(verifica);
