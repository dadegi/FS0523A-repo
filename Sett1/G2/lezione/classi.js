var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Studente = /** @class */ (function () {
    function Studente(_nome, _cognome, _eta) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
    }
    Studente.prototype.getStudente = function () {
        return "".concat(this.nome, " ").concat(this.cognome, " di anni ").concat(this.eta);
    };
    Studente.prototype.anno = function () {
        var annoCorrente = new Date().getFullYear();
        return annoCorrente;
    };
    Studente.stato = function () {
        return 'Italia';
    };
    return Studente;
}());
var newStudente1 = new Studente('Mario', 'Rossi', 25);
console.log(newStudente1.getStudente(), 'nato nel', (newStudente1.anno() - newStudente1.eta), ", residente in ".concat(Studente.stato()));
var newStudente2 = new Studente('Aldo', 'Bianchi', 22);
console.log(newStudente2.getStudente(), 'nato nel', (newStudente2.anno() - newStudente2.eta));
var Docente = /** @class */ (function (_super) {
    __extends(Docente, _super);
    function Docente(_nome, _cognome, _eta, _materie) {
        var _this = _super.call(this, _nome, _cognome, _eta) || this;
        _this.materie = _materie;
        return _this;
    }
    Docente.prototype.stato = function () {
        return 'San Marino'; // polimorfismo
    };
    Docente.prototype.residenza = function () {
        return this.stato();
    };
    return Docente;
}(Studente));
var newDocente = new Docente('Anna', 'Verdi', 31, ['HTML', 'CSS', 'Javascript']);
console.log(newDocente.getStudente(), "docente di ".concat(newDocente.materie), "residente in ".concat(newDocente.residenza()));
