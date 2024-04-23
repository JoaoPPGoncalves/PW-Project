import * as bd from "../bd/bd.js";

const formSubmitSignUpButton = document.querySelector(".formButtonSignUp"); //Para depois injetar o onClick
const formSubmitLoginButton = document.querySelector(".formButtonLogin"); //Para depois injetar o onClick

/*para mudar a navbar*/
window.addEventListener("load", () => {
  const autenticacao = JSON.parse(localStorage.getItem("autenticacao"));

  //se não tiver autenticacao
  if (autenticacao.email === "" || autenticacao.email === undefined) {
    /*Criar apenas a parte do login*/
    const navbarLogin = document.querySelector(".toLogin"); //pegar onde é para por a cena do login ou conta
    const button = document.createElement("button"); //criar um elemento
    button.setAttribute("id", "open-modal");
    button.innerHTML = "LOGIN";
    button.classList.add("nav-link"); //adicionar class
    button.classList.add("page-scroll"); //adicionar class
    navbarLogin.appendChild(button);
    console.log("Sem autenticação");

    const openModalButton = document.querySelector("#open-modal");
    const closeModalButton = document.querySelector("#close-modal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    function toggleModal() {
      if (modal.classList.contains("hide")) {
        modal.classList.remove("hide");
        fade.classList.remove("hide");
      } else {
        modal.classList.add("hide");
        fade.classList.add("hide");
      }
    }

    openModalButton.addEventListener("click", () => toggleModal());
    closeModalButton.addEventListener("click", () => toggleModal());

    /* esconder parte login*/
    const login = document.querySelector(".login");

    document.querySelector("#chk").addEventListener("change", function () {
      if ($("#chk").is(":checked")) {
        $(".loginInput").hide();
        $(".formButtonLogin").hide();
        $(".esquecimePassword").hide();
        $(".loginGoogle").hide();
      } else {
        $(".loginInput").show();
        $(".formButtonLogin").show();
        $(".esquecimePassword").show();
        $(".loginGoogle").show();
      }
    });

    return;
  } else {
    //se tiver
    const navbarLogin = document.querySelector(".toLogin"); //pegar onde é para por a cena do login ou conta
    const link = document.createElement("a"); //criar um elemento
    link.innerHTML = "PERFIL";

    let contaAutenticada = JSON.parse(localStorage.getItem("autenticacao"));

    if (contaAutenticada.tipoUtilizador === "responsavel") {
      link.setAttribute("href", "./PerfilFuncionario.html"); //adicioar link ao elemento
    }
    if (contaAutenticada.tipoUtilizador === "cliente") {
      link.setAttribute("href", "./perfilCliente.html"); //adicioar link ao elemento
    }
    if (contaAutenticada.tipoUtilizador === "admin") {
      link.setAttribute("href", "../../../Template com Vue.js/index.html"); //adicioar link ao elemento
    }

    link.classList.add("nav-link"); //adicionar class
    link.classList.add("page-scroll"); //adicionar class
    navbarLogin.appendChild(link);
  }
});

/* Injetar JS nos botões login e js*/
//Injejtar a função no botão de registo
formSubmitSignUpButton.addEventListener("click", function () {
  const inputs = document.getElementsByClassName("inputSignUp");
  const nome = inputs[0];
  const email = inputs[1];
  const pswd = inputs[2];
  const rptpswd = inputs[3];
  const genero = inputs[4];

  //Verificar se as passwords são iguais
  if (!(pswd.value === rptpswd.value)) {
    alert("Passwords não são iguais.");
    return false;
  }

  /*Dar hash à password*/
  var hashedPswd = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
  hashedPswd.update(pswd.value);
  var hashFinal = hashedPswd.getHash("HEX");
  /* console.log * hashFinal; */
  //pwd.value = hash;

  //contas.registarConta(nome.value, email.value, hashFinal, genero.value);
  bd.fazerRegisto(nome.value, email.value, hashFinal, genero.value);
});

//Injejtar a função no botão de login
formSubmitLoginButton.addEventListener("click", function () {
  const inputs = document.getElementsByClassName("loginInput");
  const email = inputs[0];
  const pswd = inputs[1];

  /*Dar hash à password*/
  var hashedPswd = new jsSHA("SHA-512", "TEXT", { numRounds: 1 });
  hashedPswd.update(pswd.value);
  var hashFinal = hashedPswd.getHash("HEX");
  /* console.log * hashFinal; */
  //pwd.value = hash;

  //autenticacao.loginConta(email.value, hashFinal);
  bd.fazerLogin(email.value, hashFinal);
});
