$("#salvar").click(function(){

	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	// Verificação se o quarto está em Pernoite ou Locação
	if(tipos.includes(tipo)){
		registroProduto()
	} else (
		alert('Selecione um Quarto!')
	)
})

function registroProduto(){
	
	// Parâmetros
	var descricao = $("#des").val()
    var quantidade = $("#qtd").val()
	var valorTotal = $("#tot").val()
    var quarto =  $("#numquarto").text()
    var valorUnitario = $("#vun").val()
	var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    var datahora = String(hora) + ':' + String(minutos)
	var valor = $("#valor-quarto").text()
    
    // Objetos
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: datahora,
		valor_quarto: valor
	}

	// Requisição POST
	$.post("https://defmoteapi.herokuapp.com/comanda/", produto, function(msg){

		// Exibe os Produtos
		mostraProduto();
    })

	// Limpa os Campos
	document.getElementById('produtos').reset();
}

function removeProduto(operacao){

	motivo = prompt('Motivo da retirada do produto:')

	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		// Requisição DELETE
		$.ajax({
			url: "https://defmoteapi.herokuapp.com/comanda/" + operacao,
			method: 'DELETE',
			dataType: 'json',
			success: function(data){
				alert('Produto Excluído!')
				mostraProduto();
			}
		})
	}
}

// GUARDAR O MOTIVO NUMA VARIÁVEL E ADICIONAR A API

function mostraProduto(){

	// Requisição GET
	$.get("https://defmoteapi.herokuapp.com/comanda/", function(retorno){

		// Parâmetro e Instância de Tabela
		var nQuarto =  $("#numquarto").text()
		var prateleira = document.getElementById('lprodutos');
		prateleira.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach(function(resultado){

			var id = resultado.id
			var quarto = resultado.quarto
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total

			prateleira.innerHTML += '<tr>'+
										'<td>'+ quarto + '</td>' +
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										'<td><button onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
									'</tr>';
		})
	})
}
