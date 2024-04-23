let jaTemDiv = 0;

const atividades = JSON.parse(localStorage.getItem("atividades"));
const marcacoes = JSON.parse(localStorage.getItem("marcacoes"));
const autenticacao = JSON.parse(localStorage.getItem("autenticacao"));
const atividadeEscolhida = localStorage.getItem("atividadeEscolhida");

function fazerMarcacao() {
  
  if (window.location.pathname === "/E104/Parasailing.html") {
    var QuantidadePessoas1Input = document.getElementById("preco1Input");
    var QuantidadePessoas1 = parseInt(QuantidadePessoas1Input.value);

    var QuantidadePessoas2Input = document.getElementById("preco2Input");
    var QuantidadePessoas2 = parseInt(QuantidadePessoas2Input.value);

    var QuantidadePessoas3Input = document.getElementById("preco3Input");
    var QuantidadePessoas3 = parseInt(QuantidadePessoas3Input.value);

    let numeroMarcacoes,
      numeroMarcacoesAtual = 0;

    //iur buscar numero maximo de reservas
    for (let i = 0; i < atividades.length; i++) {
      if (atividades[i].nomeAtividade === atividadeEscolhida) {
        //se for igual a atividade
        numeroMarcacoes = atividades[i].capacidadeAividade; //ir buscar o numero maximo de marcacoes
      }
    }

    // Código a ser executado se a URL atual for "pagina.html"
    var dataInput = document.getElementById("date");
    var dataSelecionada = dataInput.value;

    if (dataSelecionada === "") {
      Swal.fire({
        icon: "error",
        title: "Por favor, selecione uma data no calendário!",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else {
      // Aqui você pode adicionar a lógica adicional que desejar
      // se a data estiver selecionada corretamente

      if (
        QuantidadePessoas1 === 0 &&
        QuantidadePessoas2 === 0 &&
        QuantidadePessoas3 === 0
      ) {
        Swal.fire({
          icon: "error",
          title: "Por favor selecione a quantidade de pessoas que deseja!",
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      } else {
        let horasAtividade;
        var linkHoras;
        const dataReserva = new Date(
          $("#datepicker").data("datepicker").getFormattedDate("yyyy-mm-dd")
        );

        if (jaTemDiv !== 0) {
          let node = document.getElementById("porHorarios");
          if (node.parentNode) {
            node.parentNode.removeChild(node);
            jaTemDiv--;
          }
        }

        const divContainer = document.createElement("div");
        divContainer.setAttribute("id", "porHorarios");

        const div = document.createElement("div");
        div.classList.add("list-group");
        div.classList.add("list-group-light");

        //passar por todas as atividades
        for (let i = 0; i < atividades.length; i++) {
          //se o que tivermos a verificar for igual á atividade escolhida
          if (atividades[i].nomeAtividade === atividadeEscolhida) {
            
            for (let j = 0; j < atividades[i].horariosAtividade.length; j++) {
              linkHoras = document.createElement("a");
              linkHoras.classList.add("list-group-item");
              linkHoras.classList.add("list-group-item-action");
              linkHoras.classList.add("px-3");
              linkHoras.classList.add("border-0");
              linkHoras.classList.add("ripple");
              linkHoras.setAttribute(
                "onclick",
                `loginOuPagamento('${atividades[i].horariosAtividade[j]}')`
              );
              
              //linkHoras.setAttribute("aria-current", "true");

              linkHoras.appendChild(
                document.createTextNode(atividades[i].horariosAtividade[j])
              ); //meter texto

              //ver quantas reservas existem
              for (let k = 0; k < marcacoes.length; k++) {
                console.log(marcacoes[k].atividade)
                if (marcacoes[k].atividade === atividadeEscolhida) {
                  horasAtividade = new Date(marcacoes[k].data);

                  if (
                    horasAtividade.getFullYear() ===
                      dataReserva.getFullYear() &&
                    horasAtividade.getMonth() === dataReserva.getMonth() &&
                    horasAtividade.getDay() === dataReserva.getDay() &&
                    (horasAtividade.getUTCHours() +
                      ":" +
                      horasAtividade.getUTCMinutes() ===
                      atividades[i].horariosAtividade[j] ||
                      horasAtividade.getUTCHours() +
                        ":" +
                        horasAtividade.getUTCMinutes() +
                        "0" ===
                        atividades[i].horariosAtividade[j])
                  ) {
                    //se as horas forem as mesmas
                    numeroMarcacoesAtual += 1;
                  }
                }
              }

              if (numeroMarcacoesAtual < numeroMarcacoes) {
                div.appendChild(linkHoras); //adicionar à div
              }

              numeroMarcacoesAtual = 0;
            }
          }
        }

        divContainer.appendChild(div);
        document.getElementById("HorasDisponiveis").appendChild(divContainer);
        document.getElementById("HorasDisponiveis").style.display = "block";

        jaTemDiv++;
        return;
      }
    }
  } else {
    var dataInput = document.getElementById("date");
    var dataSelecionada = dataInput.value;

    var QuantidadePessoas1Input = document.getElementById("preco1Input");
    var QuantidadePessoas1 = parseInt(QuantidadePessoas1Input.value);

    var QuantidadePessoas2Input = document.getElementById("preco2Input");
    var QuantidadePessoas2 = parseInt(QuantidadePessoas2Input.value);

    if (dataSelecionada === "") {
      Swal.fire({
        icon: "error",
        title: "Por favor, selecione uma data no calendário!",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else {
      // Aqui você pode adicionar a lógica adicional que desejar
      // se a data estiver selecionada corretamente

      if (QuantidadePessoas1 === 0 && QuantidadePessoas2 === 0) {
        Swal.fire({
          icon: "error",
          title: "Por favor, selecione a quantidade de pessoas que deseja!",
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      } else {
        //Se der certo
        const marcacoes = JSON.parse(localStorage.getItem("marcacoes"));
        const atividadeEscolhida = localStorage.getItem("atividadeEscolhida");

        //document.getElementById("HorasDisponiveis").style.display = "block";
        const div = document.createElement("div");
        div.classList.add("list-group");
        div.classList.add("list-group-light");

        return;
      }
    }
  }
}

function loginOuPagamento(hora) {
  // Verificar se o usuário está logado (exemplo simplificado)
  const dataReserva = new Date(
    $("#datepicker").data("datepicker").getFormattedDate("yyyy-mm-dd")
  );
  let pedidoTemporario;

  var QuantidadePessoas1Input = document.getElementById("preco1Input");
  var QuantidadePessoas1 = parseInt(QuantidadePessoas1Input.value);

  var QuantidadePessoas2Input = document.getElementById("preco2Input");
  var QuantidadePessoas2 = parseInt(QuantidadePessoas2Input.value);

  var QuantidadePessoas3Input = document.getElementById("preco3Input");
  var QuantidadePessoas3 = parseInt(QuantidadePessoas3Input.value);
  //alert(QuantidadePessoas1 + QuantidadePessoas2 + QuantidadePessoas3)

  if (autenticacao.email !== "") {
    if (window.location.pathname.includes("/E104/Parasailing.html")) {
      pedidoTemporario = {
        nome: autenticacao.nome,
        atividade: atividadeEscolhida,
        dataReservada: `${dataReserva.getUTCFullYear()}-${
          dataReserva.getUTCMonth() + 1
        }-${dataReserva.getDate()}`,
        horaReserva: hora,
        qntBilhetes:
          QuantidadePessoas1 + QuantidadePessoas2 + QuantidadePessoas3,
        valor:
          QuantidadePessoas1 * 40 +
          QuantidadePessoas2 * 30 +
          QuantidadePessoas3 * 25,
      };
    }

    if (window.location.pathname.includes("/E104/Jetski.html")) {
      pedidoTemporario = {
        nome: autenticacao.nome,
        atividade: atividadeEscolhida,
        dataReservada: `${dataReserva.getUTCFullYear()}-${
          dataReserva.getUTCMonth() + 1
        }-${dataReserva.getDate()}`,
        horaReserva: hora,
        qntBilhetes:
          QuantidadePessoas1 + QuantidadePessoas2 + QuantidadePessoas3,
        valor:
          QuantidadePessoas1 * 40 +
          QuantidadePessoas2 * 30 +
          QuantidadePessoas3 * 25,
      };
    }

    localStorage.pedidoTemporario = JSON.stringify(pedidoTemporario);

    /* 
    const pedidoTemporario = {
      nome: autenticacao.nome,
      atividade: atividadeEscolhida,
      dataReserva: `${dataReserva.getUTCFullYear()}-${dataReserva.getUTCMonth()}-${dataReserva.getUTCDay()}`,
      horaReserva: hora,
      qntBilhetes: QuantidadePessoas1 + QuantidadePessoas2 + QuantidadePessoas3,
      valor: (QuantidadePessoas1 * ),
      dataLimite: `${dataReserva.getUTCFullYear()}-${dataReserva.getUTCMonth()}-${dataReserva.getUTCDay() + 2}`
    } */
    window.location.href = "Pagamento.html";
  } else {
    // Exibir pop-up de login
    alert("Faça o login para prosseguir."); // Pode substituir por um pop-up de login mais elaborado
  }
}

function setCookie(nome, valor, dias) {
  var data = new Date();
  data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
  var expires = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}

function getCookie(nome) {
  var nomeCookie = nome + "=";
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nomeCookie) === 0) {
      return cookie.substring(nomeCookie.length, cookie.length);
    }
  }
  return "";
}
