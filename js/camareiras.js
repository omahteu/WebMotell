



export function inicioModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

export function fimModal(){
    var modal = getElementById('modau-camareiras')
    console.log(modal)
}