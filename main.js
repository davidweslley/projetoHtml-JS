const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
	e.preventDefault();

	const input_num_a = document.getElementById('na');
	const input_num_b = document.getElementById('nb');

	const msgOK = `SIM - ${input_num_a.value} é maior que ${input_num_b.value}`;
	const msgNot = `NÃO - ${input_num_a.value} NÃO é maior que ${input_num_b.value}`;

	if (input_num_a.value > input_num_b.value) {
		alert(msgOK);
	} else {
		alert(msgNot);
	};

})
