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
