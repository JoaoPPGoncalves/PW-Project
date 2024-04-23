/*
    {
        "locais":[
            {//pedido 
                "moradaLocal": "",
                "codigoPostal": "",
                "coordenadas": "",
                "googleMapsLink": "",
                "atividade": [],
            }
        ]
    }
*/

const acessoInicial={
    "acesso": false
}

function criarEstrutura(){
    localStorage.temAcesso = JSON.stringify(acessoInicial);//Adicionar as contas iniciais
}

export {criarEstrutura};