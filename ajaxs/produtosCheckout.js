$(document).ready(function(){

    produtoCodigo()

    $.get("https://defmoteapi.herokuapp.com/produtos/", (resultado) => {

    resultado.forEach(function(item){
        $('#listaCheckout').append('<option>' + item.descricao + '</option>');
    });
    
    //codProduto

    $('#listaCheckout').change(function() {
        var option = $('#listaCheckout').find(":selected").index()

        var db = option - 1
    
        $(".descricaoCheckout").val(resultado[db].descricao)
        $(".unitarioCheckout").val('R$ ' + resultado[db].valorunitario)
    
        $('.quantidadeCheckout').keyup(function(){
            var qtd = $(this).val()
            var total = Number(resultado[db]['valorunitario']) * Number(qtd)
            $(".totalCheckout").val('R$ ' + total)
        });
    });
})
})

function produtoCodigo(){

    $('.codProduto').keypress( (event) => {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){

            $.get("https://defmoteapi.herokuapp.com/produtos/", (resultado) => {

                var db = 0
    
                $(".descricaoCheckout").val(resultado[db].descricao)
                $(".unitarioCheckout").val('R$ ' + resultado[db].valorunitario)
            
                $('.quantidadeCheckout').keyup(function(){
                    var qtd = $(this).val()
                    var total = Number(resultado[db]['valorunitario']) * Number(qtd)
                    $(".totalCheckout").val('R$ ' + total)
                });
            })

        }
    
    });
}

$("#addLista").click(function(){

    var quarto = sessionStorage.getItem('quarto')
	var descricao = $(".descricaoCheckout").val()
    var quantidade = $(".quantidadeCheckout").val()
	var valorTotal = $(".totalCheckout").val()
    var valorUnitario = $("unitarioCheckout").val()

	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
        datahora: '',
        valor_quarto: ''
	}

    $.post("https://defmoteapi.herokuapp.com/comanda/", produto, function(msg){

		// Exibe os Produtos
		exibirProduto();
    })
})

function exibirProduto(){

	// Requisição GET
	$.get("https://defmoteapi.herokuapp.com/comanda/", function(retorno){

		// Parâmetro e Instância de Tabela
		//var nQuarto =  $("#numquarto").text()
        var nQuarto = sessionStorage.getItem('quarto')
        console.log(nQuarto)
		var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
        console.log(dados)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach(function(resultado){

			var id = resultado.id
			//var quarto = resultado.quarto
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valor_total = resultado.valor_total

            prateleira.innerHTML += '<tr>'+
                                        '<td>'+
                                            '<div class="product-cart d-flex">'+
                                                '<div class="product-content media-body">'+
                                                    '<h5 class="title">' + descricao + '</h5>'+
                                                    '<span>Unidade Custa R$ ' + valorUnitario + '</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</td>'+
                                        '<td>'+
                                            '<p>' + quantidade + '</p>'+
                                        '</td>'+
                                        '<td>'+
                                            '<p class="price" id="total">' + valor_total + '</p>'+
                                        '</td>'+
                                        '<td><button onclick="removeProduto(' + removeItens(id)  + ')" class="btn btn-danger">Remover</button></td>'+
                                    '</tr>';
		})
	})
}