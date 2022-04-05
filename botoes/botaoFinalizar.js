import { dataAtual } from '../boxes/box.js'
import { rg } from '../boxes/box.js'
import { horaSaida } from '../boxes/box.js'
import { liviaExclui } from '../boxes/box.js'

$("#finalizar").click(function(){
    
    zerarComanda()

    console.log('proximo')

    zerarHeader()

    console.log('proximo')

    zerarPatio()

    console.log('proximo')
})

function registroOcupacao(quarto, entrada){

    var total = $("#totalGeral").text()

    var box = {
        data: dataAtual(),
        codigo: rg(),
        quarto: quarto,
        entrada: entrada,
        saida: horaSaida(),
        total: total,
    }

    $.post("https://defmoteapi.herokuapp.com/ocupacoes/", box, function(){})

}

function zerarComanda(){
   $.get("https://defmoteapi.herokuapp.com/comanda/", function(retorno){

        var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

        for(var i = 0; i < dados.length; i++){

            var identificador = dados[i].id

            liviaExclui("https://defmoteapi.herokuapp.com/comanda/", identificador)

        }
    })
}

function zerarHeader(){
          
    $.get("https://defmoteapi.herokuapp.com/header/", function(retorno){

        var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

        for(var i = 0; i < dados.length; i++){

            var identificador = dados[i].id
            var quarto = dados[i].quarto
            var entrada = dados[i].datahora

            liviaExclui("https://defmoteapi.herokuapp.com/header/", identificador)

        }

        registroOcupacao(quarto, entrada)

    })
}

function zerarPatio(){
    $.get("https://defmoteapi.herokuapp.com/patio/", function(retorno){

        var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

        for(var i = 0; i < dados.length; i++){

            var identificador = dados[i].id

            liviaExclui("https://defmoteapi.herokuapp.com/patio/", identificador)

        }

        sessionStorage.clear()

        console.log('sessionStorage apagado')

        setTimeout(function() {window.close()}, 4000);
    })
}
