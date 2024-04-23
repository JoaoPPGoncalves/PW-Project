const marcacoesIniciais=[
    {
        "emailReseva": "d@c.com",
        "emailResponsavel": "a@a.com",
        "atividade": "Parasailing",
        "estado": "marcada",
        "data": new Date('31 May 2023 14:00 UTC').toISOString(),
        "preco": 80
    },
    {
        "emailReseva": "d@c.com",
        "emailResponsavel": "b@a.com",
        "atividade": "Jetski",
        "estado": "completa",
        "data": new Date('29 May 2023 14:00 UTC').toISOString(),
        "preco": 40
    },
    {
        "emailReseva": "franciscomsborges2002@gmail.com",
        "emailResponsavel": "b@a.com",
        "atividade": "Jetski",
        "estado": "decorrer",
        "data": new Date('29 May 2023 14:00 UTC').toISOString(),
        "preco": 40
    },
    {
        "emailReseva": "franciscomsborges2002@gmail.com",
        "emailResponsavel": "b@a.com",
        "atividade": "Jetski",
        "estado": "cancelada",
        "data": new Date('30 May 2023 14:00 UTC').toISOString(),
        "preco": 80
    },
    {
        "emailReseva": "franciscomsborges2002@gmail.com",
        "emailResponsavel": "a@a.com",
        "atividade": "Parasailing",
        "estado": "marcada",
        "data": new Date('31 May 2023 13:00 UTC').toISOString(),
        "preco": 80
    },
    {
        "emailReseva": "franciscomsborges2002@gmail.com",
        "emailResponsavel": "a@a.com",
        "atividade": "Parasailing",
        "estado": "marcada",
        "data": new Date('31 May 2023 13:00 UTC').toISOString(),
        "preco": 80
    }
]

function criarEstrutura(){
    localStorage.marcacoes = JSON.stringify(marcacoesIniciais);//Adicionar as contas iniciais
}

function adicionarEstrutura(novaMarcacao){//Existe uma nova marcacao quando é aceite pelo admin
    /* pegar no array atual do localStorage */
    const valoresStorage = JSON.parse(localStorage.getItem('marcacoes'));

    console.log(novoPedido);

    /* criar a nova array para pôr*/
    valoresStorage.push(novoPedido);

    /* inserir no localStorage */
    localStorage.pedidos = JSON.stringify(valoresStorage);
}

export {criarEstrutura, adicionarEstrutura};