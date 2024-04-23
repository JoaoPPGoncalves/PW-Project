window.onload = function () {
  const autenticacao = JSON.parse(localStorage.getItem("autenticacao"));
  
  
  if (autenticacao.email !== "") {
    //Se tiver autenticacao
    if (autenticacao.tipoUtilizador === "responsavel") {
      criarNavbarResponsavel();
      return;
    }
  }
  criarNavBarDefafult();
};

function criarNavBarDefafult() {
  /*Criar navbar se não estiver logado*/
  const navbarDiv = document.createElement("div"); //criar div que vai cobrir tudo
  navbarDiv.classList.add("collapse");
  navbarDiv.classList.add("navbar-collapse");
  navbarDiv.setAttribute("id", "navbarsExampleDefault");

  const navBarUl = document.createElement("ul");
  navBarUl.classList.add("navbar-nav");
  navBarUl.classList.add("ml-auto");

  //HOME
  const primeiroLi = document.createElement("li");
  primeiroLi.classList.add("nav-item");

  const linkPrimeiroLi = document.createElement("a");
  linkPrimeiroLi.classList.add("nav-link");
  linkPrimeiroLi.classList.add("page-scroll");
  linkPrimeiroLi.setAttribute("href", "./index.html");
  linkPrimeiroLi.appendChild(document.createTextNode("HOME"));
  primeiroLi.appendChild(linkPrimeiroLi);
  

  //Quem Somos
  const segundoLi = document.createElement("li");
  segundoLi.classList.add("nav-item");

  const linkSegundoLi = document.createElement("a");
  linkSegundoLi.classList.add("nav-link");
  linkSegundoLi.classList.add("page-scroll");
  linkSegundoLi.setAttribute("href", "./index.html#intro");
  linkSegundoLi.appendChild(document.createTextNode("QUEM SOMOS"));
  segundoLi.appendChild(linkSegundoLi);

  //Contacto
  const terceitoLi = document.createElement("li");
  terceitoLi.classList.add("nav-item");

  const linkTerceitoLi = document.createElement("a");
  linkTerceitoLi.classList.add("nav-link");
  linkTerceitoLi.classList.add("page-scroll");
  linkTerceitoLi.setAttribute("href", "index.html#contacto");
  linkTerceitoLi.appendChild(document.createTextNode("CONTACTO"));
  terceitoLi.appendChild(linkTerceitoLi);

  //Frota
  const quartoLi = document.createElement("li");
  quartoLi.classList.add("nav-item");

  const linkQuartoLi = document.createElement("a");
  linkQuartoLi.classList.add("nav-link");
  linkQuartoLi.classList.add("page-scroll");
  linkQuartoLi.setAttribute("href", "./Frotas.html");
  linkQuartoLi.appendChild(document.createTextNode("FROTA"));
  quartoLi.appendChild(linkQuartoLi);

  //DropDown
  const quintoLi = document.createElement("li");
  quintoLi.classList.add("nav-item");
  quintoLi.classList.add("dropdown");

  const linkQuintoLi = document.createElement("a");
  linkQuintoLi.classList.add("nav-link");
  linkQuintoLi.classList.add("page-scroll");
  linkQuintoLi.classList.add("dropdown-toggle");
  linkQuintoLi.setAttribute("id", "navbarDropdown");
  linkQuintoLi.setAttribute("role", "button");
  linkQuintoLi.setAttribute("aria-expanded", "false");
  linkQuintoLi.appendChild(document.createTextNode("EXPERIÊNCIAS DISPONÍVEIS"));
  quintoLi.appendChild(linkQuintoLi);


  //criar div que vai ficar com a lista das experiencias
  var divQuintoLi = document.createElement("div");
  divQuintoLi.setAttribute("aria-labelledby", "navbarDropdown");
  divQuintoLi.classList.add("dropdown-menu");

  //adicionar atividades
  const atividades = JSON.parse(localStorage.getItem("atividades"));
  let linkAtividadeAdicionar, spanAtividadeNome, divAtividadesSeparador;

  for (let i = 0; i < atividades.length; i++) {
    linkAtividadeAdicionar = document.createElement("a"); //criar o link
    spanAtividadeNome = document.createElement("span"); //criar span para texto
    divAtividadesSeparador = document.createElement("div"); //criar divisória

    linkAtividadeAdicionar.setAttribute(
      "onclick",
      `localStorage.setItem('atividadeEscolhida', '${atividades[i].nomeAtividade}')`
      );

    linkAtividadeAdicionar.classList.add("dropdown-item");
    if(atividades[i].nomeAtividade === "Grutas Benagil Sunset Experience"){
      linkAtividadeAdicionar.setAttribute(
        "href",
        'GBSunsetExperience.html'
      );
    }else if(atividades[i].nomeAtividade === "Jetski"){
      linkAtividadeAdicionar.setAttribute(
        "href",
        'Jetskii.html'
      );
    }else{
      linkAtividadeAdicionar.setAttribute(
        "href",
        `${atividades[i].nomeAtividade.replace(" ","")}.html`
      );
    }

    spanAtividadeNome.classList.add("item-text");
    spanAtividadeNome.appendChild(
      document.createTextNode(atividades[i].nomeAtividade)
    );

    divAtividadesSeparador.classList.add("dropdown-items-divide-hr");

    linkAtividadeAdicionar.appendChild(spanAtividadeNome);

    divQuintoLi.append(linkAtividadeAdicionar);
    divQuintoLi.append(divAtividadesSeparador);
  }

  quintoLi.appendChild(divQuintoLi);

  //para adicionar o login
  const sextoLi = document.createElement("li");
  sextoLi.classList.add("nav-item");
  sextoLi.classList.add("toLogin");

  navBarUl.appendChild(primeiroLi); //adicioanr HOME à navBar
  navBarUl.appendChild(segundoLi); //adicioanr HOME à navBar
  navBarUl.appendChild(terceitoLi); //adicioanr HOME à navBar
  navBarUl.appendChild(quartoLi); //adicioanr HOME à navBar
  navBarUl.appendChild(quintoLi); //adicioanr HOME à navBar
  navBarUl.appendChild(sextoLi); //adicioanr HOME à navBar

  console.log(navBarUl)

  navbarDiv.appendChild(navBarUl); //adicionar à div que vai cubrir tudo

  document.getElementById("colocarNavBarItems").appendChild(navbarDiv); //adicionar à página
}

//criar nav bar do responsavel
function criarNavbarResponsavel() {
  const navbarDiv = document.createElement("div"); //criar div que vai cobrir tudo
  navbarDiv.classList.add("collapse");
  navbarDiv.classList.add("navbar-collapse");
  navbarDiv.setAttribute("id", "navbarsExampleDefault");

  const navBarUl = document.createElement("ul");
  navBarUl.classList.add("navbar-nav");
  navBarUl.classList.add("ml-auto");

  //HOME
  const primeiroLi = document.createElement("li");
  primeiroLi.classList.add("nav-item");

  const linkPrimeiroLi = document.createElement("a");
  linkPrimeiroLi.classList.add("nav-link");
  linkPrimeiroLi.classList.add("page-scroll");
  linkPrimeiroLi.setAttribute("href", "./index.html");
  linkPrimeiroLi.appendChild(document.createTextNode("HOME"));
  primeiroLi.appendChild(linkPrimeiroLi);

  //DropDown
  const segundoLi = document.createElement("li");
  segundoLi.classList.add("nav-item");
  segundoLi.classList.add("dropdown");

  const linkSegundoLi = document.createElement("a");
  linkSegundoLi.classList.add("nav-link");
  linkSegundoLi.classList.add("page-scroll");
  linkSegundoLi.classList.add("dropdown-toggle");
  linkSegundoLi.setAttribute("id", "navbarDropdown");
  linkSegundoLi.setAttribute("role", "button");
  linkSegundoLi.setAttribute("aria-expanded", "false");
  linkSegundoLi.appendChild(document.createTextNode("ATIVIDADES"));
  segundoLi.appendChild(linkSegundoLi);

  //criar div que vai ficar com a lista das experiencias
  var divSegundoLi = document.createElement("div");
  divSegundoLi.setAttribute("aria-labelledby", "navbarDropdown");
  divSegundoLi.classList.add("dropdown-menu");
  console.log("asdasd");

  //adicionar atividades
  const atividades = JSON.parse(localStorage.getItem("atividades"));
  let linkAtividadeAdicionar, spanAtividadeNome, divAtividadesSeparador;

  for (let i = 0; i < atividades.length; i++) {
    linkAtividadeAdicionar = document.createElement("a"); //criar o link
    spanAtividadeNome = document.createElement("span"); //criar span para texto
    divAtividadesSeparador = document.createElement("div"); //criar divisória

    linkAtividadeAdicionar.classList.add("dropdown-item");

    if (atividades[i].nomeAtividade === "Grutas Benagil Sunset Experience") {
      //GBSunsetExperience
      linkAtividadeAdicionar.setAttribute("href", "GBSunsetExperience.html");
    } else {
      linkAtividadeAdicionar.setAttribute(
        "href",
        `${atividades[i].nomeAtividade.replace(" ", "")}.html`
      );
    }

    spanAtividadeNome.classList.add("item-text");
    spanAtividadeNome.appendChild(
      document.createTextNode(atividades[i].nomeAtividade)
    );

    divAtividadesSeparador.classList.add("dropdown-items-divide-hr");

    linkAtividadeAdicionar.appendChild(spanAtividadeNome);

    divSegundoLi.append(linkAtividadeAdicionar);
    divSegundoLi.append(divAtividadesSeparador);
  }

  segundoLi.appendChild(divSegundoLi);

  //HOME
  const terceiroLi = document.createElement("li");
  terceiroLi.classList.add("nav-item");

  const linkTerceiroLi = document.createElement("a");
  linkTerceiroLi.classList.add("nav-link");
  linkTerceiroLi.classList.add("page-scroll");
  linkTerceiroLi.setAttribute("href", "./Inventario.html");
  linkTerceiroLi.appendChild(document.createTextNode("INVENTÁRIO"));
  terceiroLi.appendChild(linkTerceiroLi);

  //para adicionar o login
  const quartoLi = document.createElement("li");
  quartoLi.classList.add("nav-item");
  quartoLi.classList.add("toLogin");

  navBarUl.appendChild(primeiroLi); //adicioanr HOME à navBar
  navBarUl.appendChild(segundoLi); //adicioanr atividades à navBar
  navBarUl.appendChild(terceiroLi); //adicioanr Inventario à navBar
  navBarUl.appendChild(quartoLi); //adicioanr para o login à navBar

  navbarDiv.appendChild(navBarUl); //adicionar à div que vai cubrir tudo

  document.getElementById("colocarNavBarItems").appendChild(navbarDiv); //adicionar à página
}