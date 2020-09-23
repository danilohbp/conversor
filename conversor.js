var dolar = document.getElementById('dolar');
var botao = document.querySelector('button');
var real = document.querySelector('#real');

botao.addEventListener('click', converter);

function converter(){
	real.textContent = dolar.value * 5;
}