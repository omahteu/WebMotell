$("#guardara").click(function(){

    var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	if(tipos.includes(tipo)){
		registroVeiculo()
	} else (
		alert('Selecione um Quarto!')
	)
})

function registroVeiculo(){

	var quarto =  $("#numquarto").text()
	var veiculo = $("#tipoVeiculo").val()
    var modelo = $("#modelo").val()
    var placa = $("#placa").val()

	var patio = {
		quarto: quarto,
		veiculo: veiculo,
		modelo: modelo,
		placa: placa
    }

	// Requisição POST
	$.post("https://defmoteapi.herokuapp.com/patio/", patio, function(msg){

		// Exibe os Produtos
		mostraVeiculo();
	})

	document.getElementById('formLogin').reset();
}

function removeVeiculo(operacao){

	$.ajax({
		url: "https://defmoteapi.herokuapp.com/patio/" + operacao,
		method: 'DELETE',
		dataType: 'json',
		success: function(data){
			alert('Veículo Excluído!')
			mostraVeiculo();
		}
	})
}

function mostraVeiculo(){

	// Requisição GET
	$.get("https://defmoteapi.herokuapp.com/patio/", function(retorno){

		// Parâmetro e Instância de Tabela
		var nQuarto =  $("#numquarto").text()
		var patio = document.getElementById('garagem');
		patio.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach(function(resultado){

			var id = resultado.id
			var quarto =  resultado.quarto
			var veiculo = resultado.veiculo
			var modelo = resultado.modelo
			var placa = resultado.placa

			patio.innerHTML += '<tr>'+
									'<td>'+ quarto + '</td>' +
									'<td>'+ veiculo + '</td>' +
									'<td>'+ modelo + '</td>' +
									'<td>'+ placa + '</td>' +
									'<td><button onclick="removeVeiculo('+ id +')" class="btn btn-danger">Remover</button></td>'+
								'</tr>';
		})
	})
}
