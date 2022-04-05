export function manutencao(q, x, y, z) {

    // CSS
    $("#quarto" + q).css({
        "background-color": "#A9A9A9",
        "opacity": 0.5})
    
    $("[name=form_main" + q + "]").css({
        'margin-bottom': '-60px',
        'padding-top': '50px'
    })

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    // Botões Inferiores
    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Iniciar Faxina')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Disponibilizar Quarto')

    $("#" + z).css('visibility', 'visible')
    $("#" + z).val('Ligar Luz')

    // Hora Atual
    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    // Definições
    $("#numquarto").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(`${String(hora)}:${String(minutos)}h`)
    $("#imagemQuarto" + q).css('border', '2px solid rgb(169, 169, 169)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(169, 169, 169), 0 0 1em #000')
}
