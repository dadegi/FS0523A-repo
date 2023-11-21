let btnInitM = document.getElementById('inizioM') as HTMLButtonElement;
let btnVersaM = document.getElementById('depositaM') as HTMLButtonElement;
let btnPrelevaM = document.getElementById('prelevaM') as HTMLButtonElement;
let btnInitF = document.getElementById('inizioF') as HTMLButtonElement;
let btnVersaF = document.getElementById('depositaF') as HTMLButtonElement;
let btnPrelevaF = document.getElementById('prelevaF') as HTMLButtonElement;
let initM = document.getElementById('balanceInitM') as HTMLInputElement;
let versaM = document.getElementById('versamentoM') as HTMLInputElement;
let prelevaM = document.getElementById('prelievoM') as HTMLInputElement;
let initF = document.getElementById('balanceInitF') as HTMLInputElement;
let versaF = document.getElementById('versamentoF') as HTMLInputElement;
let prelevaF = document.getElementById('prelievoF') as HTMLInputElement;
let inizioM: number = 0;
let inizioF: number = 0;

class Conto {
	balanceInit: number;
	constructor(_balanceInit: number) {
		this.balanceInit = _balanceInit;
	}

	deposito(cifra: number): number {
		this.balanceInit += cifra;
		return this.balanceInit;
	}

	prelievo(cifra: number): number {
		this.balanceInit -= cifra;
		return this.balanceInit;
	}

	interessi(saldo: number): number {
		return saldo * 0.9;
	}
}

// Gestione conto madre

let contoM = new Conto(0);
document.getElementById('saldoM')!.innerHTML = `€ ${contoM.balanceInit}`;

btnInitM.addEventListener('click', function () {
	inizioM = Number(initM.value);
	contoM.balanceInit = inizioM;
	initM.setAttribute('disabled', 'true');
	btnInitM.setAttribute('disabled', 'true');
	stampaM();
});

function stampaM(): void {
	document.getElementById('saldoM')!.innerHTML = `€ ${contoM.interessi(
		contoM.balanceInit
	)}`;
}

btnVersaM.addEventListener('click', function () {
	let versamento: number = Number(versaM.value);
	contoM.deposito(versamento);
	document.getElementById(
		'versamentiM'
	)!.innerHTML += `<li>€ ${versamento}</li>`;
	versaM.value = '';
	stampaM();
});

btnPrelevaM.addEventListener('click', function () {
	let prelievo: number = Number(prelevaM.value);
	contoM.prelievo(prelievo);
	document.getElementById('prelieviM')!.innerHTML += `<li>€ ${prelievo}</li>`;
	prelevaM.value = '';
	stampaM();
});

// Gestione conto figlio

let contoF = new Conto(0);
document.getElementById('saldoF')!.innerHTML = `€ ${contoF.balanceInit}`;

btnInitF.addEventListener('click', function () {
	inizioF = Number(initF.value);
	contoF.balanceInit = inizioF;
	initF.setAttribute('disabled', 'true');
	btnInitF.setAttribute('disabled', 'true');
	stampaF();
});

function stampaF(): void {
	document.getElementById('saldoF')!.innerHTML = `€ ${contoF.balanceInit}`;
}

btnVersaF.addEventListener('click', function () {
	let versamento: number = Number(versaF.value);
	contoF.deposito(versamento);
	document.getElementById(
		'versamentiF'
	)!.innerHTML += `<li>€ ${versamento}</li>`;
	versaF.value = '';
	stampaF();
});

btnPrelevaF.addEventListener('click', function () {
	let prelievo: number = Number(prelevaF.value);
	contoF.prelievo(prelievo);
	document.getElementById('prelieviF')!.innerHTML += `<li>€ ${prelievo}</li>`;
	prelevaF.value = '';
	stampaF();
});
