let saluto: any = 'Hello World!';

// TIPI IN TYPESCRIPT (primitivi)
let stringa: string;
let numero: number;
let booleano: boolean;
let indefinito: undefined;
let nullo: null;
let nonLoSo: any; // Il tipo any può cambiare nel corso del flusso
let nonLoSapro: never;
const costante: string = 'Sono una stringa costante';

// TIPI DERIVATI O COMPLESSI
let array: [];
let oggetto: {};

console.log(saluto);

saluto = 5;

console.log(saluto);

// Operatore ternario in typescript
// Funziona con entrambe le sintassi; quella a riga 26 è la sintassi letterale Typescript

let exp: string =
	5 < 3
		? 'Il primo numero è minore del secondo'
		: 'Il secondo numero è minore del primo';
// let exp = (5<3) ? true: false;

console.log(exp);

let a: number = 8;
let b: number = 5;

const operazione = (num1: number, num2: number): number => {
	let risultato = num1 - num2;
	console.log(risultato);
	return risultato;
};

// Il ternario verifica se il risultato della funzione è un numero positivo: se sì, esegue la funzione, altrimenti produce una stringa
const verifica: any =
	a > b ? operazione(a, b) : 'La funzione produce un numero negativo';

console.log(verifica);
