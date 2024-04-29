const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const input_num_a = document.getElementById('na');
	const input_num_b = document.getElementById('nb');

	const num_a = parseFloat(input_num_a.value);
	const num_b = parseFloat(input_num_b.value);

	const msgOK = `SIM - ${num_a} é maior que ${num_b}`;
	const msgNot = `NÃO - ${num_a} NÃO é maior que ${num_b}`;

	if (!isNaN(num_a) && !isNaN(num_b)) {
		if	(num_a > num_b) {
			alert(msgOK);
		} else {
			alert(msgNot);
		};
	} else {
		alert("Por favor, insira números válidos.")
	}	
})
