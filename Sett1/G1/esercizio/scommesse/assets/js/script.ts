let btnVerifica = document.getElementById('verifica') as HTMLButtonElement;
let btnReset = document.getElementById('cancella') as HTMLButtonElement;
let risultato = document.getElementById('risultato') as HTMLElement | null;
let estratto: number;
let giocatore1 = document.getElementById('giocatore1') as HTMLInputElement;
let giocatore2 = document.getElementById('giocatore2') as HTMLInputElement;

btnReset.setAttribute('disabled', 'true');

btnVerifica.addEventListener('click', verifica);

function verifica(): void {
	let numero1: number = Number(giocatore1.value);
	let numero2: number = Number(giocatore2.value);

	if (numero1 === numero2) {
		risultato!.innerHTML =
			'I due giocatori devono inserire valori differenti';
		return;
	} else if (numero1 === 0 || numero2 === 0 || !numero1 || !numero2) {
        risultato!.innerHTML =
			'Entrambi i giocatori devono inserire un valore';
		return;
    }

	generazione();
	confronto(numero1, numero2);
}

const generazione = () => {
	estratto = Math.floor(Math.random() * 100 + 1);
	document.querySelector(
		'#estratto'
	)!.innerHTML = `Numero estratto: ${estratto}`;
};

function confronto(valore1: number, valore2: number): void {
	btnVerifica.setAttribute('disabled', 'true');
	btnReset.removeAttribute('disabled');

	switch (true) {
		case valore1 === estratto:
			risultato!.innerHTML = 'Il giocatore 1 ha indovinato';
			break;

		case valore2 === estratto:
			risultato!.innerHTML = 'Il giocatore 2 ha indovinato';
			break;

		case Math.abs(estratto - valore1) < Math.abs(estratto - valore2):
			risultato!.innerHTML = 'Il giocatore 1 si è avvicinato di più';
			break;

		default:
			risultato!.innerHTML = 'Il giocatore 2 si è avvicinato di più';
			break;
	}
}

const cancella = () => {
    risultato!.innerHTML = '';
    document.querySelector('#estratto')!.innerHTML = '';
    giocatore1.value = '';
    giocatore2.value = '';
    btnVerifica.removeAttribute('disabled');
    btnReset.setAttribute('disabled', 'true');
}

btnReset.addEventListener('click', cancella);
