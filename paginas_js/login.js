$(location).ready(function(){
    loginEnter()
    loginClick()
})

async function autenticacao(usuario, senha){
    const resposta = await fetch("https://defmoteapi.herokuapp.com/usuarios/")
    const data = await resposta.json()

    var dados = data.filter(nome => nome.nome == usuario)


    if(dados.length == 0){
        alert('Usuário e/ou Senha Inválidos!')

    } else {
        dados.forEach(elemento => {

            if(usuario === elemento.nome && senha === elemento.senha){

                if(elemento.status === 'Admin'){
                    alert('Login com Sucesso!')
                    localStorage.setItem('usuarioLogado', 'admin')
                    sessionStorage.setItem('nome', elemento.nome)
                    sessionStorage.setItem('caixa', 'fechado')
                    $(location).attr('href', './paginas/home.html')
                } else {
                    alert('Login com Sucesso!')
                    localStorage.setItem('usuarioLogado', 'caixa')
                    sessionStorage.setItem('nome', elemento.nome)
                    sessionStorage.setItem('caixa', 'fechado')
                    $(location).attr('href', './paginas/caixa.html')
                }
            } else {
                alert('Usuário e/ou Senha Inválidos!')
            }
        });
    }
}

function loginEnter(){

    $(document).keypress( (event) => {

        var keycode = (event.keyCode ? event.keyCode : event.which)

        if(keycode == '13'){

            var nome = $("#nome")
            var senha = $("#senha")
        
            if(nome.val() == ''){
                alert('Nome Inválido')
                nome.focus()
                return
            }
        
            if(senha.val() == ''){
                alert('Senha Inválida')
                senha.focus()
                return
            }
        
            autenticacao(nome.val(), senha.val())       
        }
    }) 
}

function loginClick(){

    $("#entrar").click(function(){

        var nome = $("#nome")
        var senha = $("#senha")
    
        if(nome.val() == ''){
            alert('Nome Inválido')
            nome.focus()
            return
        }
    
        if(senha.val() == ''){
            alert('Senha Inválida')
            senha.focus()
            return
        }
    
        autenticacao(nome.val(), senha.val())
    })
}
