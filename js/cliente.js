const tabelaAtividadesFuturas = document.getElementById(
  "tabelaAtividadesFuturasBody"
);
const tabelaRealizadas = document.getElementById("tabelaRealizadas");

const meses = [
  "Janeiro",
  "Febreiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outobro",
  "Novembro",
  "Dezembro",
];

const pedidos = JSON.parse(localStorage.getItem("pedidos"));
const autenticacao = JSON.parse(localStorage.getItem("autenticacao"));
const marcacoes = JSON.parse(localStorage.getItem("marcacoes"));

window.addEventListener("load", function () {
  document.querySelector(".paraMudarNome").innerHTML = JSON.parse(
    localStorage.getItem("autenticacao")
  ).nome;

  for (let i = 0; i < pedidos.length; i++) {
    if (pedidos[i].emailReseva === autenticacao.email) {
      let newDate = new Date(pedidos[i].DataAtividade);
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");

      td1.classList.add("row");
      td1.appendChild(document.createTextNode(pedidos[i].atividade));
      td2.appendChild(
        document.createTextNode(
          newDate.getFullYear() +
            "-" +
            meses[newDate.getUTCMonth()] +
            "-" +
            newDate.getDate()
        )
      );
      td3.appendChild(
        document.createTextNode(newDate.getHours() + ":" + newDate.getMinutes())
      );
      td4.appendChild(document.createTextNode(pedidos[i].estado));
      td5.appendChild(document.createTextNode(pedidos[i].quantidadeBilhetes));

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tabelaAtividadesFuturas.appendChild(tr);
    }
  }

  for (let i = 0; i < marcacoes.length; i++) {
    if (marcacoes[i].emailReseva === autenticacao.email) {
      let newDate = new Date(marcacoes[i].data);
      let tr = document.createElement("tr");

      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");

      td1.classList.add("row");
      td1.appendChild(document.createTextNode(marcacoes[i].atividade));
      td2.appendChild(
        document.createTextNode(
          newDate.getFullYear() +
            "-" +
            meses[newDate.getUTCMonth()] +
            "-" +
            newDate.getDate()
        )
      );
      td3.appendChild(
        document.createTextNode(newDate.getHours() + ":" + newDate.getMinutes())
      );
      td4.appendChild(document.createTextNode(marcacoes[i].estado));
      td5.appendChild(document.createTextNode(marcacoes[i].preco));

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tabelaRealizadas.appendChild(tr);
    }
  }
});
