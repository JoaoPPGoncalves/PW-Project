/*
Ficheiro para fazer a ligação das páginas ao local storage, os ficheiros separados é para acessar cada parte 
*/

//imports
import * as autenticacao from './modulos/autenticacao.js';
import * as contas from './modulos/contas.js';
import * as atividades from './modulos/atividades.js';
import * as pedidos from './modulos/pedido.js';
import * as marcacoes from './modulos/marcacoes.js';
import * as locais from './modulos/locais.js';
import * as materiais from './modulos/materiais.js';
import * as epocaBalnear from './modulos/epocaBalnear.js';
import * as podeAcessarPaginas from './modulos/podeAcessarPagina.js';
import * as horarios from './modulos/horarios.js';
import * as atividadeEscolhida from './modulos/atividadeEscolhida.js';


const estaCriado = localStorage.getItem("autenticacao");//Verificar se a página já tem as partes criadas do localStorage
const formSubmitSignUpButton = document.querySelector('.formButtonSignUp');//Para depois injetar o onClick
const formSubmitLoginButton = document.querySelector('.formButtonLogin');//Para depois injetar o onClick

//Função par aquando a janela abrir, fazer esta parte primeiro
window.addEventListener('load', 
  function() {
    //localStorage.clear(); //Só para remover da localStorage se houver algo

    if(estaCriado === null){//verificar se tem a autenticação no localStorage
      console.log("Não está criado.\nA criar estrutura para o localStorage");//comentario para a consola
        
      //criar a estrutura do localStorage
      autenticacao.criarEstrutura();//criar autenticacao
      contas.criarEstrutura();//criar contas
      atividades.criarEstrutura();//criar atividades
      pedidos.criarEstrutura();//criar pedidos
      marcacoes.criarEstrutura();//criar marcacoes
      locais.criarEstrutura();//criar locais
      materiais.criarEstrutura();//criar materiais
      epocaBalnear.criarEstrutura();//criar epocaBalnear
      podeAcessarPaginas.criarEstrutura();//criar podeAcessarPagina
      //horarios.criarEstrutura();//criar os horarios
      atividadeEscolhida.criarEstrutura();//criar atividade escolhida
    }

});

//função para ler
function ler(){
  console.log("asd")
}

/* Para realizar compra */

/* Para fazer o registo */
function fazerRegisto(nome, email, password, genero){
  contas.registarConta(nome, email, password, genero);
}

/* Para fazer login */
function fazerLogin(email, password){
  autenticacao.loginConta(email, password);
}

export { fazerRegisto, fazerLogin };