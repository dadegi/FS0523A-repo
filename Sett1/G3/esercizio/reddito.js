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
var Tasse = /** @class */ (function () {
    function Tasse(_redditoLordo, _irpef, _inps) {
        this.redditoLordo = _redditoLordo;
        this.irpef = _irpef;
        this.inps = _inps;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(redditoLordo, irpef, inps) {
        return _super.call(this, redditoLordo, irpef, inps) || this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        return this.redditoLordo * 0.78;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * this.irpef;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return this.getUtileTasse() * this.inps;
    };
    Lavoratore.prototype.getRedditoNetto = function () {
        return this.getUtileTasse() - this.getTasseInps() - this.getTasseIrpef();
    };
    return Lavoratore;
}(Tasse));
var professionista = new Lavoratore(35000, 0.05, 0.25);
console.log("---- Situazione reddituale professionista con lordo di \u20AC ".concat(professionista.redditoLordo, " ----"));
console.log("Imponibile: \u20AC ".concat(professionista.getUtileTasse()));
console.log("Tasse Irpef: \u20AC ".concat(professionista.getTasseIrpef()));
console.log("Tasse INPS: \u20AC ".concat(professionista.getTasseInps()));
console.log("Utile netto: \u20AC ".concat(professionista.getRedditoNetto()));
var artigiano = new Lavoratore(31500, 0.15, 0.19);
console.log("---- Situazione reddituale artigiano con lordo di \u20AC ".concat(artigiano.redditoLordo, " ----"));
console.log("Imponibile: \u20AC ".concat(artigiano.getUtileTasse()));
console.log("Tasse Irpef: \u20AC ".concat(artigiano.getTasseIrpef()));
console.log("Tasse INPS: \u20AC ".concat(artigiano.getTasseInps()));
console.log("Utile netto: \u20AC ".concat(artigiano.getRedditoNetto()));
var commerciante = new Lavoratore(52000, 0.15, 0.35);
console.log("---- Situazione reddituale commerciante con lordo di \u20AC ".concat(commerciante.redditoLordo, " ----"));
console.log("Imponibile: \u20AC ".concat(commerciante.getUtileTasse()));
console.log("Tasse Irpef: \u20AC ".concat(commerciante.getTasseIrpef()));
console.log("Tasse INPS: \u20AC ".concat(commerciante.getTasseInps()));
console.log("Utile netto: \u20AC ".concat(commerciante.getRedditoNetto()));
