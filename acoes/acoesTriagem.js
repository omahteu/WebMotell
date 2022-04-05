import { modos } from '../boxes/box.js'
import { resposta1 } from './acaorespostaum.js'
import { resposta2 } from './acaoRespostaDois.js'
import { resposta3 } from './acaoRespostaTres.js'
import { resposta4 } from './acaoRespostaQuatro.js'


$("[name=acoes]").click(function(){
    
    let chave = this.id
    var status = $(this).val()

    let numeroQuarto = $("#numquarto").text()
	let valorQuarto = $("#valor-quarto").text()
	let hora = $("#hour").text()
	let minuto = $("#minute").text()
	let tempo = `${hora}.${minuto}`

    var quarto = {
        numero: numeroQuarto,
        valor: valorQuarto,
        tempo: tempo
    }

    var quartos = []
    quartos.push(quarto)

    if(modos.slice(0, 3).includes(chave)){
        // QUARTO 1
        resposta1(status)
        localStorage.setItem('dadosQuarto', JSON.stringify(quartos))

    } else if(modos.slice(3, 6).includes(chave)){
        // QUARTO 2
        resposta2(status)

    } else if(modos.slice(6, 9).includes(chave)){
        // QUARTO 3
        resposta3(status)

    } else if(modos.slice(9, 12).includes(chave)){
        // QUARTO 4
        resposta4(status)

    } else {
        console.log('Quarto não Configurado')
    }
    
})
