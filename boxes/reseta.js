var tempoDeEspera = 5 * 10 * 100;
var timeout = setTimeout(inativo, tempoDeEspera);

function actividade(e) {
  clearInterval(timeout);
  timeout = setTimeout(inativo, tempoDeEspera);
  // só para o exemplo
  console.log('Houve actividade de ' + (e.type == 'keyup' ? 'teclado' : 'ponteiro'));
}

function inativo() {
	$("#numquarto").text('0')
	$("#intervalo").text('0')
  $("#valor-quarto").text('0')
  $("#tipo").text('0')
  $("#entrada").text('')
	var prateleiraResultado = document.getElementById('lprodutos')
	prateleiraResultado.innerHTML = '';
}

['keyup', 'touchmove' in window ? 'touchmove' : 'mousemove', "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll"].forEach(function(ev) {
  window.addEventListener(ev, actividade);
});
