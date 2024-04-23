const locaisInicio=[
    {
        "atividade": "parasailing",
        "horarios":[
            {
                "2023-05-30":[
                    {
                        "horario": "09:00",
                        "numeroMaximoOcupantes": 8,
                        "numeroOcupados": 5,
                        "numerLivre": 3,
                    }
                ]
            }
        ]
    },{
        "atividade": "Jetski",
        "horarios":[
            {
                "2023-05-30":[
                    {
                        "horario": "09:00",
                        "numeroMaximoOcupantes": 2,
                        "numeroOcupados": 0,
                        "numerLivre": 2,
                    }
                ]
            }
        ]
    },

]

function criarEstrutura(){
    localStorage.horarios = JSON.stringify(locaisInicio);//Adicionar as contas iniciais
}

export {criarEstrutura};