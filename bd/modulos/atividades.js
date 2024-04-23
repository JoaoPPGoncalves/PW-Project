/*
    {
        "atividades":[
            {//conta 
                id:0
                "nome": "Francisco Manuel de Sousa Borges",
                "tipoUtilizador": "cliente"
            },{

            }
        ]
    }
*/

const atividadesIniciais = [
    {
        "id":0,
        "nomeAtividade": 'Parasailing',
        'porqueAtividade': "Parasailing",
        "localAtividade": 'Praia dos Pescadores',
        "descricaoAtividade": 'Andar de Paraquedas por cima do Mar.',
        "capacidadeAividade":2,
        "funcionariosAtividade": ['Inês Barros'],
        "materialAtividade": ['Colete'],
        "horariosAtividade": ['09:00','13:00','15:00'],
        "precos": {
            "Adulto": 40,
            "Criança": 30,
            "Espectador": 25
        }
    },
    {
        "id":1,
        "nomeAtividade": 'Jetski',
        'porqueAtividade': "bbbbbbbbbbbbbbbb",
        "localAtividade": 'Praia da Rocha',
        "descricaoAtividade": 'Andar de mota de água',
        "capacidadeAividade": 2,
        "funcionariosAtividade": ['Francisco Borges'],
        "materialAtividade": ['Colete'],
        "horariosAtividade": ['09:00', '09:45', '10:30', '11:15', '12h00'],
        "precos": {
            "30 minutos": 90,
            "1 Hora": 170
        }
    },
    {
        "id":2,
        "nomeAtividade": 'Grutas Benagil',
        'porqueAtividade': "ccccccccccccccc",
        "localAtividade": '',
        "descricaoAtividade": 'Visitar as grutas de Benagil',
        "capacidadeAtividade": 0,
        "funcionariosAtividade": ['André Barros'],
        "materialAtividade": [],
        "horariosAtividade": [],
        "precos": {
            "30 minutos": 90,
            "1 Hora": 170
        }
    },
    {
        "id":3,
        "nomeAtividade": 'Grutas Benagil Sunset Experience',
        'porqueAtividade': "dddddddddddddd",
        "localAtividade": '',
        "descricaoAtividade": 'Ver o sunset nas grutas de benagil',
        "capacidadeAtividade": 0,
        "funcionariosAtividade": ['Diogo Oliveira'],
        "materialAtividade": [],
        "horariosAtividade": []
    },
    {
        "id":4,
        "nomeAtividade": 'FlyBoard',
        'porqueAtividade': "eeeeeeeeeeeeeeeee",
        "localAtividade": '',
        "descricaoAtividade": 'Dispositivo de jato de água',
        "capacidadeAtividade": 0,
        "funcionariosAtividade": ['Joao Goncalves'],
        "materialAtividade": [],
        "horariosAtividade": []
    }
]


function criarEstrutura(){
    localStorage.atividades = JSON.stringify(atividadesIniciais);//Adicionar as atividades iniciais
}

function lerEstrutura(){
    return JSON.parse(localStorage.getItem('atividades'));//retornar a array das atividades
}

//método para adicionar um à estrutura
function adicionarEstrutura(){

    atividadeAdicionarTeste= {
        "nome": "Insufláveis"
    }

    /* pegar no array atual do localStorage */
    const valoresStorage = JSON.parse(localStorage.getItem('atividades'));

    /* criar a nova array para pôr*/
    const novosValoresStorage = valoresStorage.push();

    /* inserir no localStorage */
    localStorage.atividades = JSON.stringify(novosValoresStorage);
}

//método para remover da estrutura a partir de um id
function removerEstruturaID(id){
    /* pegar no array atual do localStorage */
    const valoresStorage = JSON.parse(localStorage.getItem('atividades'));

    /* verificar se o id existe */
    if(id > -1){
        var novosValoresStorage = valoresStorage.splice(id,1);//remover o sitio onde está o id e só remover 1 elemento
    }else{//se o id for menor que 0
        console.log("errroooooo");
    }

    /* adicionar o novo array ao localStorage */
    localStorage.atividades = JSON.stringify(novosValoresStorage);
}

export {criarEstrutura, lerEstrutura, adicionarEstrutura, removerEstruturaID};