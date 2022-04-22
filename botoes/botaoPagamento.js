$(document).ready(function(){
    buscaTarifasBandeiras()
})

async function buscaTarifasBandeiras(){
    const respostaCredito = await fetch('https://defmoteapi.herokuapp.com/credito/')
    const respostaDebito = await fetch('https://defmoteapi.herokuapp.com/debito/')
    const dadosCredito = await respostaCredito.json()
    const dadosDebito = await respostaDebito.json()

    $("[name='paymentMethod']").click(function(){
    
        document.getElementById('bandeiraCredito').innerHTML = '<option hidden>Selecione</option>'
    
        var metodo = this.id
    
        switch (metodo) {
            case 'credit':
                var creditoChecado = $('#credit').is(':checked')
                if(creditoChecado){
                    $("#bandeiraCredito").css('display', 'block')
        
                    dadosCredito.forEach(element => {
                        $('#bandeiraCredito').append(`<option>${element.bandeira} - Acréscimo de ${element.porcentagem}%</option>`)
                    });
                }
                break;
    
            case 'debit':
                var debitoChecado = $('#debit').is(':checked')
                if(debitoChecado){
                    $("#bandeiraDebito").css('display', 'block')
    
                    dadosDebito.forEach(elemento => {
                        $('#bandeiraDebito').append(`<option>${elemento.bandeira} - Acréscimo de ${elemento.porcentagem}%</option>`)
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

}

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
