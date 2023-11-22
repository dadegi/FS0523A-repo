// Generalmente i metodi obbligatori non implementati vengono definiti nelle classi astratte, le interfacce vengono utilizzate come modelli per oggetti
var Frequenza = /** @class */ (function () {
    function Frequenza(_nome, _cognome, _eta, _tecnologia, _durata, _frequenza) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
        this.durata = _durata;
        this.frequenza = _frequenza;
    }
    Frequenza.prototype.getAnagrafica = function () {
        var frequentante;
        if (this.frequenza === true) {
            frequentante = '';
        }
        else {
            frequentante = 'non';
        }
        return "Lo studente ".concat(this.nome, " ").concat(this.cognome, ", di anni ").concat(this.eta, ", iscritto al corso su ").concat(this.tecnologia, " di ").concat(this.durata, " mesi, ").concat(frequentante, " \u00E8 frequentante.");
    };
    return Frequenza;
}());
var nuovoStudente = new Frequenza('Mario', 'Rossi', 25, ['HTML', 'CSS', 'Javascript'], 3, false);
console.log(nuovoStudente.getAnagrafica());
var altroStudente = {
    nome: 'Aldo',
    cognome: 'Bianchi',
    eta: 21
};
console.log(altroStudente);
