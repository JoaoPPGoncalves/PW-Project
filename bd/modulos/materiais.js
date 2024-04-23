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

const materiaisInicio=[
    { 
        nome:'Colete',
        quantidade:'20'
    }
]

function criarEstrutura(){
    localStorage.materiais = JSON.stringify(materiaisInicio);//Adicionar as contas iniciais
}

export {criarEstrutura};