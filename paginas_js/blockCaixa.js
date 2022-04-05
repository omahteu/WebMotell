$(document).ready(function(){

    bloqueioRelatorios()

})

// verificar o historico da pagina para voltar para o mesmo lugar

function bloqueioRelatorios(){
    let info = localStorage.getItem("usuarioLogado")

    if(info === 'caixa'){
        
        $("#cardOcupacoes").css('display', 'none')
        $("#cardSaida").css('display', 'none')
        $("#cardQuartos").css('display', 'none')
        $("#cardCadastroQuarto").css('display', 'none')
        $("#cardCadastroIg").css('display', 'none')
        $("#cardCadastroEmail").css('display', 'none')
        $("#cardCadastroCamareira").css('display', 'none')
        $("#cardCadastroPernoite").css('display', 'none')
        $("#cardHistoricoCaixa").css('display', 'none')
    }
}
