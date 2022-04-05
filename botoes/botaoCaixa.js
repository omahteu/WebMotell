$(document).ready(function(){
    
    var nomeUsuario = sessionStorage.getItem('nome')
    $("#usuario").val(nomeUsuario)
    bloqueiaAbertura()
    validarUsoFundoCaixa()

})

$("#abrirCaixa").click(function(){

    sessionStorage.removeItem('caixa')

    var usuario = $("#usuario").val()

    var dataEntrada = new Date();
    var dia = dataEntrada.getDate()
    var mes = dataEntrada.getMonth()
    var ano = dataEntrada.getFullYear()
    let dataAtual = `${String(dia)}/${String(mes)}/${String(ano)}`


    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()
    let horaAtual = `${String(hora)}:${String(minutos)}`

    var dados = {
        data: dataAtual,
        entrada: horaAtual,
        usuario: usuario,
        total: "",
        saida: ""
    }


    $.post("https://defmoteapi.herokuapp.com/caixa/", dados, function(){

        alert('Caixa Aberto!')
        $(location).attr('href', '../paginas/homecaixa.html')
    })

    
})

function bloqueiaAbertura(){

    var status = sessionStorage.getItem('caixa')

    if(status === 'fechado'){
        $("#abrirCaixa").prop('disabled', false)
    }

}

function validarUsoFundoCaixa(){
    
    $("#usarFundoCaixa").click( function(){
        var checado = $(this).is(':checked')
        if(checado){
            $("#valorFundoCaixa").css('display', 'block')
                                 
        } else {
            $("#valorFundoCaixa").removeAttr('style')
        }
    })
}