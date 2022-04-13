import { desfazer } from "../tags/desfazer.js"
import { pause, reset } from '../contadores/contadorUm.js'
import { inicioModal } from "../js/camareiras.js"
import { fimModal } from "../js/camareiras.js"

$("#selecionaCamareiraLimpeza").click(function(){
    
    let camareira = $("#selecionaCamareira").val()
    var quarto = $("#numquarto").text()
    var flags = $("#intervalo").text().split(",")
    
    var modal = getElementById('modau-camareiras')
    console.log(modal)

    

    //pause()
    //reset()
    //setTimeout(function() {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)

    /*
    var dados = {
        nome: camareira,
        registro: gera_id()
    }

    $.post("https://defmoteapi.herokuapp.com/camareiras/", dados, function(msg){
        alert("Camareira Registrado!")

        document.getElementById('formPostCamareira').reset()
    })*/
})
