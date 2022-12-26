const prixUnitaire = 100
let input = document.getElementById('input')
let quantity = document.getElementById('quantity')
let total = document.getElementById('total')

document.getElementById('increment').addEventListener('click', () => { input.innerHTML++ })
document.getElementById('decrement').addEventListener('click', () => { input.innerHTML-- })
document.getElementById('submit').addEventListener('click', () => {
	quantity.innerHTML = input.innerHTML
	total.innerHTML = quantity.innerHTML * prixUnitaire
})
document.getElementById('reset').addEventListener('click', () => {
	input.innerHTML = 0;
	quantity.innerHTML = 0
	total.innerHTML = 0
})

