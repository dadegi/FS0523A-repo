var btnInitM = document.getElementById('inizioM');
var btnVersaM = document.getElementById('depositaM');
var btnPrelevaM = document.getElementById('prelevaM');
var btnInitF = document.getElementById('inizioF');
var btnVersaF = document.getElementById('depositaF');
var btnPrelevaF = document.getElementById('prelevaF');
var initM = document.getElementById('balanceInitM');
var versaM = document.getElementById('versamentoM');
var prelevaM = document.getElementById('prelievoM');
var initF = document.getElementById('balanceInitF');
var versaF = document.getElementById('versamentoF');
var prelevaF = document.getElementById('prelievoF');
var inizioM = 0;
var inizioF = 0;
var Conto = /** @class */ (function () {
    function Conto(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    Conto.prototype.deposito = function (cifra) {
        this.balanceInit += cifra;
        return this.balanceInit;
    };
    Conto.prototype.prelievo = function (cifra) {
        this.balanceInit -= cifra;
        return this.balanceInit;
    };
    Conto.prototype.interessi = function (saldo) {
        return saldo * 0.9;
    };
    return Conto;
}());
// Gestione conto madre
var contoM = new Conto(0);
document.getElementById('saldoM').innerHTML = "\u20AC ".concat(contoM.balanceInit);
btnInitM.addEventListener('click', function () {
    inizioM = Number(initM.value);
    contoM.balanceInit = inizioM;
    initM.setAttribute('disabled', 'true');
    btnInitM.setAttribute('disabled', 'true');
    stampaM();
});
function stampaM() {
    document.getElementById('saldoM').innerHTML = "\u20AC ".concat(contoM.interessi(contoM.balanceInit));
}
btnVersaM.addEventListener('click', function () {
    var versamento = Number(versaM.value);
    contoM.deposito(versamento);
    document.getElementById('versamentiM').innerHTML += "<li>\u20AC ".concat(versamento, "</li>");
    versaM.value = '';
    stampaM();
});
btnPrelevaM.addEventListener('click', function () {
    var prelievo = Number(prelevaM.value);
    contoM.prelievo(prelievo);
    document.getElementById('prelieviM').innerHTML += "<li>\u20AC ".concat(prelievo, "</li>");
    prelevaM.value = '';
    stampaM();
});
// Gestione conto figlio
var contoF = new Conto(0);
document.getElementById('saldoF').innerHTML = "\u20AC ".concat(contoF.balanceInit);
btnInitF.addEventListener('click', function () {
    inizioF = Number(initF.value);
    contoF.balanceInit = inizioF;
    initF.setAttribute('disabled', 'true');
    btnInitF.setAttribute('disabled', 'true');
    stampaF();
});
function stampaF() {
    document.getElementById('saldoF').innerHTML = "\u20AC ".concat(contoF.balanceInit);
}
btnVersaF.addEventListener('click', function () {
    var versamento = Number(versaF.value);
    contoF.deposito(versamento);
    document.getElementById('versamentiF').innerHTML += "<li>\u20AC ".concat(versamento, "</li>");
    versaF.value = '';
    stampaF();
});
btnPrelevaF.addEventListener('click', function () {
    var prelievo = Number(prelevaF.value);
    contoF.prelievo(prelievo);
    document.getElementById('prelieviF').innerHTML += "<li>\u20AC ".concat(prelievo, "</li>");
    prelevaF.value = '';
    stampaF();
});
