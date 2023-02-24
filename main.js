// tady je místo pro náš program

let button = document.querySelectorAll('.button');
let msgElm = document.querySelectorAll('.msg');

// Platební karta

button[0].addEventListener('click',
  function() {
	let vstupCislo = prompt('Číslo karty:');

	if (vstupCislo <= null) {
        alert('Číslo karty je povinný údaj');
    } else {
        let vstupCisloValid = validator.isCreditCard(vstupCislo);

		if (vstupCisloValid === true) {
            msgElm[0].innerHTML = 'Platné číslo';
            msgElm[0].classList.add('msg--valid');
        } else {
            msgElm[0].innerHTML = 'Neplatné číslo';
            msgElm[0].classList.add('msg--invalid');
        }
		
		/*button[0].classList.add('hidden');*/
	}
  }
);

// Platný e-mail

button[1].addEventListener('click',
  function() {
	let vstupEmail = String(prompt('E-mail:'));

	if (vstupEmail === '') {
        alert('E-mail je povinný údaj');
    } else {
        let vstupEmailValid = validator.isEmail(vstupEmail);

		if (vstupEmailValid === true) {
            msgElm[1].innerHTML = 'Správný e-mail';
            msgElm[1].classList.add('msg--valid');
        } else {
            msgElm[1].innerHTML = 'Špatný e-mail';
            msgElm[1].classList.add('msg--invalid');
        }
		
		/*button[1].classList.add('hidden');*/
	}
  }
);