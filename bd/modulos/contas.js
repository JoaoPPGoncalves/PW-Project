/*
    {
        "contas":[
            {//conta 
                "nome": "Francisco Manuel de Sousa Borges",
                "tipoUtilizador": "cliente"
            },{

            }
        ]
    }
*/

import * as autenticacao from './autenticacao.js';

const contasIniciais = [
    {
        "nome": "Francisco Manuel de Sousa Borges",
        "email": "admin@admin.com",
        "password": "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
        "tipoUtilizador": "admin",
    },
    {
        "nome": "Inês Barros",
        "email": "a@a.com",
        "password": "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
        "tipoUtilizador": "responsavel",
        "atividades": ["Parasailing"],
    },
    {
        "nome": "Manuel",
        "email": "b@a.com",
        "password": "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
        "tipoUtilizador": "responsavel",
        "atividades": ["Jetski"],
    },
    {
        "nome": "João",
        "email": "c@a.com",
        "password": "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
        "tipoUtilizador": "responsavel",
        "atividades": ["Parasailing"],
    },
    {
        "nome": "Barnabé",
        "email": "c@c.com",
        "password": "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
        "tipoUtilizador": "cliente",
    },
    {
        "nome": "Antonio",
        "email": "d@c.com",
        "password": "c7ad44cbad762a5da0a452f9e854fdc1e0e7a52a38015f23f3eab1d80b931dd472634dfac71cd34ebc35d16ab7fb8a90c81f975113d6c7538dc69dd8de9077ec",
        "tipoUtilizador": "cliente",
    }
]


function criarEstrutura(){
    localStorage.contas = JSON.stringify(contasIniciais);//Adicionar as contas iniciais
}

function lerEstrutura(){
    return JSON.parse(localStorage.getItem('contas'));//retornar a array das atividades
}

//método para adicionar um à estrutura
function adicionarEstrutura(novaConta){
    /* pegar no array atual do localStorage */
    const valoresStorage = JSON.parse(localStorage.getItem('contas'));

    console.log(novaConta);

    console.log(valoresStorage)

    /* criar a nova array para pôr*/
    valoresStorage.push(novaConta);

    console.log(valoresStorage);

    /* inserir no localStorage */
    localStorage.contas = JSON.stringify(valoresStorage);
}

//método para remover da estrutura a partir de um id
function removerEstruturaID(id){
    /* pegar no array atual do localStorage */
    const valoresStorage = pegarValores();

    /* verificar se o id existe */
    if(id > -1){
        var novosValoresStorage = valoresStorage.splice(id,1);//remover o sitio onde está o id e só remover 1 elemento
    }else{//se o id for menor que 0
        console.log("errroooooo");
    }

    /* adicionar o novo array ao localStorage */
    localStorage.contas = JSON.stringify(novosValoresStorage);
}

//função para registar conta na localStorage
function registarConta(nome, email, password, genero){
    const localStorageContas = localStorage.getItem('contas');//ir buscar o item da localStorage    
    const contas = JSON.parse(localStorageContas);//Dar parse para objeto js
    var emailJaResgistado = false;

    if(nome === '' || email  === '' || password  === '' || genero  === ''){//verificar se os campos tem todos alguma coisa
        console.log("um dos campos não contêm informação");
        alert("Erro ao tentar registar a conta, um dos campos está vazio.");
        return false;
    }

    //verificar se o email não existe na localStorage
    contas.forEach(conta =>{//passar por todas as contas
        if(conta.email === email){//verificar se o emeil é igual
            alert("O email utilizado já está registrado");//se for, passar o seguinte alerta
            emailJaResgistado = true;
        }
    });

    if(emailJaResgistado){//se o email já estiver registado, dar return para não inserir conta
        return;
    }

    //reigar conta
    const conta = {
        nome: nome,
        email: email,
        password: password,
        genero: genero,
        tipoUtilizador: "cliente"
    }

    adicionarEstrutura(conta);

    console.log("conta registada.");
}



function pegarValores(){
    return JSON.parse(localStorage.getItem('contas'));
}

export {criarEstrutura, lerEstrutura, adicionarEstrutura, removerEstruturaID, registarConta};