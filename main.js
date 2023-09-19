const toggle = document.querySelector('button');

toggle.onclick = () => {
	if (toggle.className === 'active') {
		toggle.className = 'inactive';
	} else {
		toggle.className = 'active';
	}
};
