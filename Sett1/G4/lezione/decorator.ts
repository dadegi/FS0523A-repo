function Logger (constructor: Function) { // 5- Funzione avviata dal ddecoratore
    console.log('Sto pensando...'); // 6- primo console.log
    console.log(constructor); // 7- secondo console.log, perché il costruttore che arriva come parametro, che è di fatto una funzione, stampa il suo console.log e DOPO esegue l'istanza di classe perché il decoratore ha esaurito il suo compito.
}

@Logger // 4- Decoratore collegato alla funzione col suo nome
class Person { // 3- Classe DECORATA
    name: string;
    constructor(_name: string) {
        this.name = _name;
        console.log('Sto creando l\'istanza di classe...'); // 8- l'istanza di classe esegue il metodo del costruttore di classe
    }
}

const pers = new Person('Mario'); // 2- Istanza di classe
console.log(pers); // 1- Chiamata all'instanza di classe / 9- la proprietà della classe viene stampata
