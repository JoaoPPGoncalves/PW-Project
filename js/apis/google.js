import env from '../../../env.json' assert { type: "json" };
import * as bdContas from '../../bd/bd.js';

async function handleCredentialResponse(response) {
    //console.log("Encoded JWT ID token: " + response.credential);

    const data = jwt_decode(response.credential)


      /* fullName.textContent = data.name
      sub.textContent = data.sub
      given_name.textContent = data.given_name
      family_name.textContent = data.family_name
      email.textContent = data.email
      verifiedEmail.textContent = data.email_verified
      picture.setAttribute("src", data.picture) */

      registarContaGoogle(data.name, data.email);
}
  
//Função par aquando a janela abrir, fazer esta parte primeiro
window.addEventListener('load', 
  function() { 
    console.log("Registo/Login Google");
    google.accounts.id.initialize({
      client_id: env.GOOGLEPI,
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signUpGoogle"),
        { 
          theme: "outline", 
          size: "large",
          type: "icon",
          shape: "circle",
          text: "signin_with.",
          size: "large",
          locale: "pt-PT"
        }// customization attributes
    );
    google.accounts.id.renderButton(
      document.getElementById("loginGoogle"),
        { 
          theme: "outline", 
          size: "large",
          type: "icon",
          shape: "circle",
          text: "signin_with.",
          size: "large",
          locale: "pt-PT"
        }// customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}, false);
/* 
  window.onload = function () {
    
} */

//função para registar conta google
async function registarContaGoogle(nome, email){
  const localStorageContas = localStorage.getItem('contas');//ir buscar o item da localStorage    
  const contas = JSON.parse(localStorageContas);//Dar parse para objeto js
  var emailJaResgistado = false;

  if(nome === '' || email  === ''){//verificar se os campos tem todos alguma coisa
      console.log("um dos campos não contêm informação");
      alert("Erro ao tentar registar a conta, um dos campos está vazio.");
      return false;
  }

  //verificar se o email não existe na localStorage
  contas.forEach(conta =>{//passar por todas as contas
      if(conta.email === email){//verificar se o emeil é igual
          emailJaResgistado = true;
      }
  });

  if(emailJaResgistado){//se o email já estiver registado, fazer login
      loginContaGoogle(email);
      return;
  }

  //reigar conta
  const conta = {
      nome: nome,
      email: email,
      tipoUtilizador: "cliente"
  }

  adicionarEstrutura(conta);

  console.log("conta registada");
  location.reload();
  //return;
}


function loginContaGoogle(email){
  const contas = JSON.parse(localStorage.getItem('contas'));
  const autenticacao = JSON.parse(localStorage.getItem('autenticacao'));
  var pswdsIguais = false;
  var emailExiste = false;
  var contaAutenticada;

  //Verificar email e password
  contas.forEach(conta =>{//passar por todas as contas
      if(conta.email === email){//verificar se o emeil é igual
          emailExiste = true;
          contaAutenticada = conta;
      }
  });

  if(contaAutenticada.password !== ''){//se existir password
    delete contaAutenticada['password'];//remover a password da conta autenticada, para não poderem ter acesso

  }
  
  console.log(contaAutenticada);
  localStorage.autenticacao = JSON.stringify(contaAutenticada);//por no localStorage

  location.reload();
}

//método para adicionar um à estrutura
function adicionarEstrutura(novaConta){
  /* pegar no array atual do localStorage */
  const valoresStorage = JSON.parse(localStorage.getItem('contas'));

  /* criar a nova array para pôr*/
  valoresStorage.push(novaConta);

  /* inserir no localStorage */
  localStorage.contas = JSON.stringify(valoresStorage);
}