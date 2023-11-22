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
var Articolo = /** @class */ (function () {
    function Articolo(_codice, _tipo) {
        this.codice = _codice;
        this.tipo = _tipo;
    }
    return Articolo;
}());
var Tastiera = /** @class */ (function (_super) {
    __extends(Tastiera, _super);
    function Tastiera(_codice, _tipo, _pezzi) {
        var _this = _super.call(this, _codice, _tipo) || this;
        _this.pezzi = _pezzi;
        return _this;
    }
    Tastiera.prototype.getMeasure = function () {
        return this.pezzi * 5;
    };
    return Tastiera;
}(Articolo));
var Cavo = /** @class */ (function (_super) {
    __extends(Cavo, _super);
    function Cavo(_codice, _tipo, _metri) {
        var _this = _super.call(this, _codice, _tipo) || this;
        _this.metri = _metri;
        return _this;
    }
    Cavo.prototype.getMeasure = function () {
        return "Mt. ".concat(this.metri * 10);
    };
    return Cavo;
}(Articolo));
var ordineTastiere = new Tastiera('T001', 'articolo unico', 5);
console.log("Sono state ordinate ".concat(ordineTastiere.getMeasure(), " tastiere"));
var ordineCavi = new Cavo('C001', 'Articolo a metri', 5);
console.log(("Sono stati ordinati ".concat(ordineCavi.getMeasure(), " di cavi")));
