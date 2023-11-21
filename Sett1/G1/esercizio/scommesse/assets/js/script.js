var btnVerifica = document.getElementById('verifica');
var btnReset = document.getElementById('cancella');
var risultato = document.getElementById('risultatoFinale');
var estratto;
var giocatore1 = document.getElementById('giocatore1');
var giocatore2 = document.getElementById('giocatore2');
btnReset.setAttribute('disabled', 'true');
btnVerifica.addEventListener('click', verifica);
function verifica() {
    var numero1 = Number(giocatore1.value);
    var numero2 = Number(giocatore2.value);
    if (numero1 === numero2) {
        risultato.innerHTML =
            'I due giocatori devono inserire valori differenti';
        return;
    }
    else if (numero1 === 0 || numero2 === 0 || !numero1 || !numero2) {
        risultato.innerHTML =
            'Entrambi i giocatori devono inserire un valore';
        return;
    }
    generazione();
    confronto(numero1, numero2);
}
var generazione = function () {
    estratto = Math.floor(Math.random() * 100 + 1);
    document.querySelector('#estratto').innerHTML = "Numero estratto: ".concat(estratto);
};
function confronto(valore1, valore2) {
    btnVerifica.setAttribute('disabled', 'true');
    btnReset.removeAttribute('disabled');
    switch (true) {
        case valore1 === estratto:
            risultato.innerHTML = 'Il giocatore 1 ha indovinato';
            break;
        case valore2 === estratto:
            risultato.innerHTML = 'Il giocatore 2 ha indovinato';
            break;
        case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
            risultato.innerHTML = 'Il giocatore 1 si è avvicinato di più';
            break;
        default:
            risultato.innerHTML = 'Il giocatore 2 si è avvicinato di più';
            break;
    }
}
var cancella = function () {
    risultato.innerHTML = '';
    document.querySelector('#estratto').innerHTML = '';
    giocatore1.value = '';
    giocatore2.value = '';
    btnVerifica.removeAttribute('disabled');
    btnReset.setAttribute('disabled', 'true');
};
btnReset.addEventListener('click', cancella);
