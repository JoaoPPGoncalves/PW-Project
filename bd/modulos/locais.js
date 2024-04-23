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

const locaisInicio=[
    {
        "moradaLocal": "Av. Tomás Cabreira, Portimão, Algarve",
        "nomeLocal": "Praia da Rocha",
        "codigoPostal": "4000-454",
        "coordenadas": "37.1165238,-8.5377584",
        "cidade":'Albufeira',
        "googleMapsLink": "https://www.google.com/maps/place/Av.+Tom%C3%A1s+Cabreira,+8500-802+Portim%C3%A3o/@37.1191233,-8.5376681,19.5z/data=!4m6!3m5!1s0xd1b28fd609164ab:0xdab65687724ada24!8m2!3d37.1190245!4d-8.5364778!16s%2Fg%2F1tdc1xrk",
        "atividade": ["parasailing", "jet ski"],
    },
    {
        "moradaLocal": "...",
        "nomeLocal": "Praia dos Pescadores",
        "codigoPostal": "4000-454",
        "coordenadas": "...",
        "cidade":'Albufeira',
        "googleMapsLink": "...",
        "atividade": ["parasailing", "jet ski"],
    }
]

function criarEstrutura(){
    localStorage.locais = JSON.stringify(locaisInicio);//Adicionar as contas iniciais
}

export {criarEstrutura};