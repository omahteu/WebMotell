credito = [{
    bandeira: 'Visa - Acréscimo de 3.5%',
}, {
    bandeira: 'Master - Acréscimo de 4.2%'
}]

debito = [{
    bandeira: 'Visa - Acréscimo de 1.5%'
}, {
    bandeira: 'Master - Acréscimo de 1.2%'
}]

$("[name='paymentMethod']").click(function(){
    
    document.getElementById('bandeiraCredito').innerHTML = '<option hidden>Selecione</option>'

    var metodo = this.id

    switch (metodo) {
        case 'credit':
            var creditoChecado = $('#credit').is(':checked')
            if(creditoChecado){
                $("#bandeiraCredito").css('display', 'block')
    
                credito.forEach(element => {
                    $('#bandeiraCredito').append('<option>' + element.bandeira + '</option>');
                });
            }
            break;

        case 'debit':
            var debitoChecado = $('#debit').is(':checked')
            if(debitoChecado){
                $("#bandeiraDebito").css('display', 'block')

                debito.forEach(elemento => {
                    $('#bandeiraDebito').append('<option>' + elemento.bandeira + '</option>');
                })
            }
            break

        case 'dinheiro':
            var dinheiroChecado = $(this).is(':checked')
            if(dinheiroChecado){
                $("#bandeiras").css('display', 'none')
                $("#parcelas").css('display', 'none')
            }
            break
    
        default:
            break;
    }
})

function npc(){
    console.log($('#bandeiraCredito'))
     
    var option = $('#bandeiraCredito').find(":selected").index()
    var db = option - 1

    alert(`Deseja escolher a opção ${credito[db].bandeira}?`)
    $("#parcelas").css('display', 'block')
       
}

function npd(){
    var option = $('#bandeiraDebito').find(":selected").index()
    var db = option - 1

    alert(`Deseja escolher a opção ${debito[db].bandeira}?`)
    $("#parcelas").css('display', 'block')
}
