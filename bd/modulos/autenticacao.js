/*

    {
        "contaLogada":[
            {
                "email": ...,
                "password": ... ->fazer hash
            }
        ]
    }
*/

const autenticacaoJSON = {
    "email": ""
}

function criarEstrutura(){
    localStorage.autenticacao = JSON.stringify(autenticacaoJSON);//Adicionar as contas iniciais
}

function loginConta(email, pswd){
    const contas = JSON.parse(localStorage.getItem('contas'));
    const autenticacao = JSON.parse(localStorage.getItem('autenticacao'));
    var pswdsIguais = false;
    var emailExiste = false;
    var contaAutenticada;

    //Verificar email e password
    contas.forEach(conta =>{//passar por todas as contas
        if(conta.email === email){//verificar se o emeil é igual
            emailExiste = true;

            if(emailExiste && conta.password === pswd){//se email existir, verificar as passwords
                pswdsIguais = true;
                contaAutenticada = conta;
            }
        }
    });

    delete contaAutenticada['password'];//remover a password d aconta autenticada, para não poderem ter acesso

    localStorage.autenticacao = JSON.stringify(contaAutenticada);//por no localStorage

    //meter no utilziador autenticado a conta dele

    if(contaAutenticada.tipoUtilizador === "cliente"){
        location.replace("../../perfilCliente.html");
    }
    if(contaAutenticada.tipoUtilizador === "responsavel"){
        location.replace("../../PerfilFuncionario.html");
    }
    if(contaAutenticada.tipoUtilizador === "admin"){
        location.replace("../../../Template com Vue.js/index.html");
    }

    window.location.reload();
}

export {criarEstrutura, loginConta};