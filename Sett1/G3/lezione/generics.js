var numericArray;
// let numericArray: number[] -- È la stessa cosa
function scrivi(parametro) {
    return parametro;
}
var risultato = scrivi('sono una stringa passata come parametro generico');
var risultato2 = scrivi(3 + 5);
console.log(risultato);
console.log(risultato2);
function altra(par1, par2, par3) {
    return "Questi sono i tre parametri: ".concat(par1, ", ").concat(par2, ", ").concat(par3);
}
console.log(altra('parola', 15, false));
console.log(altra(21, 'ciao', [false, 18, 'stringa']));
