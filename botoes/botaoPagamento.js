credito = [{
    bandeira: 'Visa - Acréscimo de 3.5%'
}, {
    bandeira: 'Master - Acréscimo de 4.2%'
}]

debito = [{
    bandeira: 'Visa - Acréscimo de 1.5%'
}, {
    bandeira: 'Master - Acréscimo de 1.2%'
}]

$(document).ready(function(){
    selecionaCredito()
    selecionaDebito()
    selecionaDinheiro()
})

function selecionaCredito(){
    
    $("#credit").click( function(){
        document.getElementById('bandeiras').innerHTML = '<option hidden>Selecione</option>'
        var checado = $(this).is(':checked')
        if(checado){
            $("#bandeiras").css('display', 'block')
            
            credito.forEach(element => {
                $('#bandeiras').append('<option>' + element.bandeira + '</option>');
            });

            $('#bandeiras').change(function() {
                var option = $('#bandeiras').find(":selected").index()
        
                var db = option - 1

                var creditoEscolhido = confirm(`Deseja escolher a opção ${credito[db].bandeira}?`)

                if(creditoEscolhido == true){
                    $("#parcelas").css('display', 'block')
                }
            
            });
        }
    })
}

function selecionaDebito(){

    $("#debit").click( function(){
        document.getElementById('bandeiras').innerHTML = '<option hidden>Selecione</option>'
        var checado = $(this).is(':checked')
        if(checado){
            $("#bandeiras").css('display', 'block')

            debito.forEach(element => {
                $('#bandeiras').append('<option>' + element.bandeira + '</option>')
                
            });

            $('#bandeiras').change(function() {
                var option = $('#bandeiras').find(":selected").index()
        
                var db = option - 1

                

                var debitoEscolhido = confirm(`Deseja escolher a opção ${debito[db].bandeira}?`)


                if(debitoEscolhido == true){
                    $("#parcelas").css('display', 'block')
                } 
            
            });
                                 
        }
    })
}

function selecionaDinheiro(){

    $("#dinheiro").click(function(){
        var checado = $(this).is(':checked')
        if(checado){
            $("#bandeiras").css('display', 'none')
        }
    })
}