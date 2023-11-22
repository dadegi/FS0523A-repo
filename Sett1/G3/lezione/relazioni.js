// Relazione di associazione
var Telefono = /** @class */ (function () {
    function Telefono(_numero) {
        this.numero = _numero;
    }
    return Telefono;
}());
var Utente = /** @class */ (function () {
    function Utente(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
    return Utente;
}());
var newUtente = new Utente('Mario', 'Rossi', [3452343563, 457867752, 45646784656]);
// console.log(newUtente);
// Relazione di composizione
var RigheFat = /** @class */ (function () {
    function RigheFat(_id, _codArt, _descrizione, _qty, _unitPrice) {
        this.id = _id;
        this.codArt = _codArt;
        this.descrizione = _descrizione;
        this.qty = _qty;
        this.unitPrice = _unitPrice;
    }
    return RigheFat;
}());
var TestFat = /** @class */ (function () {
    function TestFat(_ragSoc, _pIva, _righeFat, _totPrice, id) {
        this.id = id;
        this.ragSoc = _ragSoc;
        this.pIva = _pIva;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }
    TestFat.prototype.getTotaleFat = function () {
        var _this = this;
        this.righeFat.forEach(function (element) {
            var totaleRiga = element.qty * element.unitPrice;
            _this.totPrice += totaleRiga;
        });
    };
    return TestFat;
}());
var fattura1 = new TestFat('Azienda XYZ', '01245789654', [{ id: 1, codArt: 'A123', descrizione: 'Articolo 1', qty: 2, unitPrice: 25 }, { id: 2, codArt: 'B123', descrizione: 'Articolo 2', qty: 3, unitPrice: 20 }, { id: 3, codArt: 'C123', descrizione: 'Articolo 3', qty: 2, unitPrice: 80 }], 0, 1);
fattura1.getTotaleFat();
console.log(fattura1);
