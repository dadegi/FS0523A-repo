type Combinable = number | string;
type ConversionDescriptor = boolean | string;

function combine(par1: Combinable, par2: Combinable, risultato: ConversionDescriptor) {
    let result;
    if (typeof par1 === 'number' && typeof par2 === 'number' || risultato === 'as-number') {
        result = +par1 + +par2;
    } else {
        result = par1.toString() + par2.toString();
    }
    return result;
}

console.log(combine(12, 15, true));

// Asserzione di tipo
let padre: any = null;
let figlio = padre;

if (typeof(figlio) === 'number') {
    figlio = <number> padre;
} else {
    figlio = <any> padre;
}

console.log(typeof(figlio));

// Intersection type
type Admin = {
    nome: string,
    privilegi: string[]
}

type User = {
    numeroReg: number,
    startDate: Date
}

type SuperAdmin = Admin & User; // intersection type

const amministratore: SuperAdmin = {
    nome: 'Mario Rossi',
    privilegi: ['Gestione accessi', 'Gestione utenti'],
    numeroReg: 23456,
    startDate: new Date('2023-11-23')
}

console.log(amministratore);

