const epocaBalnearInicio={
    dataInicio: '2023-05-30',
    dataFim: '2023-08-30'
}

function criarEstrutura(){
    localStorage.epocaBalnear = JSON.stringify(epocaBalnearInicio);//Adicionar as contas iniciais
}

export {criarEstrutura};