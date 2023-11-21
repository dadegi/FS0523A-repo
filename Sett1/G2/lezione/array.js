var colori = ['rosso', 'verde', 'giallo', 'blu'];
// console.log(colori);
colori.push(5); // errore in quanto l'array è di tipo string e non può accettare valori di altro tipo
// tupla
var miaTupla;
miaTupla = ['pippo', 15, true];
console.log(miaTupla);
miaTupla.push(25);
console.log(miaTupla);
miaTupla.shift();
console.log(miaTupla);
miaTupla.unshift(false);
console.log(miaTupla);
