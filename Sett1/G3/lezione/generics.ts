let numericArray: Array<number>;
// let numericArray: number[] -- È la stessa cosa

function scrivi<T>(parametro: T): T {
    return parametro;
}

let risultato = scrivi<string>('sono una stringa passata come parametro generico');
let risultato2 = scrivi<number>(3 + 5);

console.log(risultato);
console.log(risultato2);

function altra<T, U, V>(par1: T, par2: U, par3: V) {
    return `Questi sono i tre parametri: ${par1}, ${par2}, ${par3}`;
}

console.log(altra<string, number, boolean>('parola', 15, false));

console.log(altra<number, any, unknown[]>(21, 'ciao', [false, 18, 'stringa']));
