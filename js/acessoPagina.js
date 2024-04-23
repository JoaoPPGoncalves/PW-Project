window.onload = function() {
  const autenticacao = JSON.parse(localStorage.getItem("autenticacao"));
  const urlAtual = window.location.href;
  const paginaAcessar = urlAtual.substring(
    urlAtual.lastIndexOf("/") + 1,
    urlAtual.lastIndexOf(".")
  );
  const paginasFuncionario = ["CheckInFuncionario"];

  if (autenticacao.email !== "") {

    //se for responsavel
    if (
      autenticacao.tipoUtilizador !== undefined &&
      autenticacao.tipoUtilizador === "responsavel" &&
      paginasFuncionario.includes(paginaAcessar)
    ) {
      alert("responsavel");
      localStorage.temAcesso = JSON.parse({"acesso": false});
      return;
    }
  }

  //não dar acesso à página
  alert("Não tens acesso à página!");
};
