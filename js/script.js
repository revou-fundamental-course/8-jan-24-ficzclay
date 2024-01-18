document.getElementById('persegi-form').addEventListener('submit', function(e) {
	e.preventDefault();
	const sisi = parseFloat(document.getElementById('sisi').value);
	const luas = Math.round(sisi * sisi * 10) / 10;
	const keliling = Math.round(4 * sisi * 10) / 10;
	document.getElementById('luas').textContent = luas;
	document.getElementById('keliling').textContent = keliling;
});