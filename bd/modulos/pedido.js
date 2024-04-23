/*
    {
        "pedidos":[
            {//pedido 
                "emailReseva": "franciscomsborges2002@gmail.com",
                "atividade": "parasailing",
                "estado": "pendente",
                "DataAtividade": "",
                "DataFeitaReserva": "",
            }
        ]
    }
*/

const pedidosInicio=[
    {
        "nomeReserva": "Francisco Borges",
        "emailReseva": "franciscomsborges2002@gmail.com",
        "atividade": "Parasailing",
        "estado": "pendente",
        "DataAtividade": new Date('05 July 2023 14:00 UTC').toISOString(),
        "DataFeitaReserva": new Date('01 May 2023 17:52 UTC').toISOString(),
        "quantidadeBilhetes": 2,
        "preco": 80
    },
    {
        "nomeReserva": "João",
        "emailReseva": "a@asd.com",
        "atividade": "Jetski",
        "estado": "pendente",
        "DataAtividade": new Date('05 June 2023 14:00 UTC').toISOString(),
        "DataFeitaReserva": new Date('01 June 2023 17:52 UTC').toISOString(),
        "quantidadeBilhetes": 5,
        "preco": 80
    }
]

function criarEstrutura(){
    localStorage.pedidos = JSON.stringify(pedidosInicio);//Adicionar as contas iniciais
}

function adicionarEstrutura(novoPedido){
    /* pegar no array atual do localStorage */
    const valoresStorage = JSON.parse(localStorage.getItem('pedidos'));

    console.log(novoPedido);

    /* criar a nova array para pôr*/
    valoresStorage.push(novoPedido);

    /* inserir no localStorage */
    localStorage.pedidos = JSON.stringify(valoresStorage);
}

//função para quando a compra é realizada
function compraRealizada(){
    const novoPedido={

    }

    //adicionar à estrutura
    adicionarEstrutura(novoPedido);
}

//Para o admin validar o pedido
function validarPedido(){

}

export {criarEstrutura, adicionarEstrutura};