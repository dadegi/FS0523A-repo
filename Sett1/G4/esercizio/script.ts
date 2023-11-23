let form = document.querySelector('#nuovoCapo') as HTMLFormElement;
let codice = document.querySelector('#codice') as HTMLInputElement;
let collezione = document.querySelector('#collezione') as HTMLInputElement;
let capo = document.querySelector('#capo') as HTMLInputElement;
let modello = document.querySelector('#modello') as HTMLInputElement;
let quantita = document.querySelector('#quantita') as HTMLInputElement;
let colore = document.querySelector('#colore') as HTMLInputElement;
let prezzo = document.querySelector('#prezzo') as HTMLInputElement;
let prezzoIva = document.querySelector('#prezzoIva') as HTMLInputElement;
let disponibile = document.querySelector('#disponibile') as HTMLInputElement;
let saldo = document.querySelector('#saldo') as HTMLInputElement;
let inserisci = document.querySelector('#inserisci') as HTMLButtonElement;

let idNuovo: number = 0;
const Url = 'https://61fb890c87801d0017a2c55c.mockapi.io/v1/metadata';

class Capo {
	id: number;
	codprod: number;
	collezione: string;
	capo: string;
	modello: number;
	quantita: number;
	colore: string;
	prezzoIvaEsclusa: number;
	prezzoIvaInclusa: number;
	disponibile: string;
	saldo: number;

	constructor(
		_id: number,
		_codprod: number,
		_collezione: string,
		_capo: string,
		_modello: number,
		_quantita: number,
		_colore: string,
		_prezzoIvaEsclusa: number,
		_prezzoIvaInclusa: number,
		_disponibile: string,
		_saldo: number
	) {
		this.id = _id;
		this.codprod = _codprod;
		this.collezione = _collezione;
		this.capo = _capo;
		this.modello = _modello;
		this.quantita = _quantita;
		this.colore = _colore;
		this.prezzoIvaEsclusa = _prezzoIvaEsclusa;
		this.prezzoIvaInclusa = _prezzoIvaInclusa;
		this.disponibile = _disponibile;
		this.saldo = _saldo;
	}

	getSaldoCapo(): number {
		return (this.prezzoIvaInclusa * this.saldo) / 100;
	}

	getAcquistoCapo(): number {
		return this.prezzoIvaInclusa - this.getSaldoCapo();
	}
}

async function fetchAPI() {
	const response = await fetch(Url);
	const resp = await response.json();
    console.log(resp);
	stampaCapi(resp);
}

function stampaCapi(capi: any[]) {
    let ultimo = capi.length - 1;    
    idNuovo = Number(capi[ultimo].id);
    idNuovo++;
	capi.forEach(element => {
		let capoSingolo = new Capo(
			element.id,
			element.codprod,
			element.collezione,
			element.capo,
			element.modello,
			element.quantita,
			element.colore,
			element.prezzoIvaEsclusa,
			element.prezzoIvaInclusa,
			element.disponibile,
			element.saldo
		);
		console.log(capoSingolo);
		console.log(`totale capo: € ${capoSingolo.getAcquistoCapo()}`);
	});
}

fetchAPI();

inserisci.addEventListener('click', function () {
	let nuovoCapo = new Capo(
		Number(idNuovo),
		Number(codice.value),
		collezione.value,
		capo.value,
		Number(modello.value),
		Number(quantita.value),
		colore.value,
		Number(prezzo.value),
		Number(prezzoIva.value),
		disponibile.value,
		Number(saldo.value)
	);
	scrivi(nuovoCapo);
	fetchAPI();
	form.reset();
});

async function scrivi(nuovoCapo: any) {
	const response = await fetch(Url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(nuovoCapo),
	});
	return response.json();
}
