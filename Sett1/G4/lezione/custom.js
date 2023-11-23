function combine(par1, par2, risultato) {
    var result;
    if (typeof par1 === 'number' && typeof par2 === 'number' || risultato === 'as-number') {
        result = +par1 + +par2;
    }
    else {
        result = par1.toString() + par2.toString();
    }
    return result;
}
console.log(combine(12, 15, true));
// Asserzione di tipo
var padre = null;
var figlio = padre;
if (typeof (figlio) === 'number') {
    figlio = padre;
}
else {
    figlio = padre;
}
console.log(typeof (figlio));
var amministratore = {
    nome: 'Mario Rossi',
    privilegi: ['Gestione accessi', 'Gestione utenti'],
    numeroReg: 23456,
    startDate: new Date('2023-11-23')
};
console.log(amministratore);
