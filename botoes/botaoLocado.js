import { locado } from "../tags/locacao.js"
import { modos } from "../boxes/box.js"
import { index } from "../tags/particao.js"
import { start } from "../contadores/contadorUm.js"
import { start2 } from "../contadores/contadorDois.js"
import { start3 } from "../contadores/contadorTres.js"
import { start4 } from "../contadores/contadorQuatro.js"

$(".locado").click(function(){
    var quarto = $(this).attr('name')
    var rota = $(this).attr('class')

    if(confirm(`DESEJA INICIAR O QUARTO ${quarto}?`) == true){

        switch(quarto){
            case '1':
                var flags = modos.slice(0, 3)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                start()
                setTimeout(function() {index()}, 2000);
                break

            case '2':
                var flags = modos.slice(3, 6)
                locado(quarto, rota, flags[0], flags[1], flags[2])
                start2()
                setTimeout(function() {index()}, 2000);
                break

            case '3':
                var flags = modos.slice(6, 9)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                start3()
                setTimeout(function() {index()}, 2000);
                break

            case '4':
                var flags = modos.slice(9, 12)
                locado(quarto, rota,  flags[0], flags[1], flags[2])
                start4()
                setTimeout(function() {index()}, 2000);
                break
        }
    } else {
        console.log('Troca de Suíte')
    }
})
