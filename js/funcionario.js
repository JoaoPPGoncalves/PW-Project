import * as weatherAPI from '../js/apis/weather.js';

const tabela = document.getElementById('tabelaFuncionario');
const meses = ["Janeiro","Febreiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outobro","Novembro","Dezembro"];

window.onload = async () =>{

    //if(JSON.parse(localStorage.getItem("autenticacao")).tipoUtilizador === "responsavel"){//se for um funcionario
        /* SEPARAR EM FICHEIROS*/
        /* Chamar o weather */
        let weather = await weatherAPI.getWeather();
        let horaAtual = new Date();

        //Adicionar nome em cima
        document.querySelector('.paraMudarNome').innerHTML = JSON.parse(localStorage.getItem("autenticacao")).nome;
        
        /* PARA O CALENDARIO */

        //fazer as alterações na página
        const dias = document.getElementsByClassName('dia');
        const horas = document.getElementsByClassName('hora');
        const temperaturas = document.getElementsByClassName('temperatura');
        const imgs = document.getElementsByClassName('imgsWeather');

        for(let i = 0; i < dias.length; i++){
            if( i === 0 ){
                dias[i].innerHTML = weather.current.last_updated.substring(0,10);
                horas[i].innerHTML = weather.current.last_updated.substring(10);
                temperaturas[i].innerHTML = weather.current.temp_c + " ºC";
                imgs[i].src= weather.current.condition.icon;
            }else{
                dias[i].innerHTML = weather.forecast.forecastday[0].hour[horaAtual.getHours() + i].time.substring(0,10);
                horas[i].innerHTML = horaAtual.getHours() + i + ":" + weather.current.last_updated.substring(14);
                temperaturas[i].innerHTML = weather.forecast.forecastday[0].hour[horaAtual.getHours() + i].temp_c + " ºC";
                imgs[i].src= weather.forecast.forecastday[0].hour[horaAtual.getHours() + i].condition.icon;
            }
        }

        //Mudar o titulo do calendario
        document.querySelector("#tituloCalendario").innerHTML = "Calendário do dia " + horaAtual.getDate() + " de " +  meses[horaAtual.getMonth()] + " de " + horaAtual.getFullYear();   
        
        let marcacoes = JSON.parse(localStorage.getItem("marcacoes"));
        console.log(marcacoes)

        for(let i = 0; i < marcacoes.length; i++){

            if(marcacoes[i].emailResponsavel !== JSON.parse(localStorage.getItem('autenticacao')).email){
               continue;
            }
            let date = new Date(marcacoes[i].data);
            let mes = date.getMonth() + 1;
            let dia = date.getDate();

            if(dia < 10){//Ficar com o 0 antes se for antes do dia 10
                dia = "0" + dia;
            }

            if(mes < 10){//Ficar com o 0 antes se for antes do mes 10
                mes = "0" + mes;
            }

            //Gerar para tabela
            let tr = document.createElement("tr");//criar o tr

            if(i % 2 === 0){//para por cor diferente 
                tr.classList.add("table-secondary");
            }
            

            let tdAtividade = document.createElement("td");//criar a parte da atividade
            let strongAtividade = document.createElement("strong");
            strongAtividade.classList.add('semFundo');
            strongAtividade.appendChild(document.createTextNode(marcacoes[i].atividade.nome));//adicionar o texto à atividade
            tdAtividade.appendChild(strongAtividade);

            let tdHorario = document.createElement("td");//criar a parte da horario
            
            tdHorario.appendChild(document.createTextNode(date.getUTCHours() + ":" + date.getUTCMinutes()));//adicionar o texto à horario
            
            let tdData = document.createElement("td");//criar a parte da data
            tdData.appendChild(document.createTextNode(dia + "/" + mes + "/" + date.getFullYear()));//adicionar o texto à data

            let tdEstado = document.createElement("td");//criar a parte da estado
            let spanBadge = document.createElement("span");//criar span da badge

            if(marcacoes[i].estado === "completa"){//se já estiver completa
                spanBadge.classList.add("badge");//adicionar classlist
                spanBadge.classList.add("bg-label-success");//adicionar classlist
                spanBadge.classList.add("me-1");//adicionar classlist
                spanBadge.appendChild(document.createTextNode("COMPLETO"));//adicionar o texto ao estado
            }else if(marcacoes[i].estado === "decorrer"){//se estiver a decorrer
                spanBadge.classList.add("badge");//adicionar classlist
                spanBadge.classList.add("bg-label-warning");//adicionar classlist
                spanBadge.classList.add("me-1");//adicionar classlist
                spanBadge.appendChild(document.createTextNode("A DECORRER"));//adicionar o texto ao estado
            }else if(marcacoes[i].estado === "marcada"){//se ainda for para acontecer
                spanBadge.classList.add("badge");//adicionar classlist
                spanBadge.classList.add("bg-label-secondary");//adicionar classlist
                spanBadge.classList.add("me-1");//adicionar classlist
                spanBadge.appendChild(document.createTextNode("MARCADA"));//adicionar o texto ao estado
            }else if(marcacoes[i].estado === "cancelada"){//se foi cancelada
                spanBadge.classList.add("badge");//adicionar classlist
                spanBadge.classList.add("bg-label-danger");//adicionar classlist
                spanBadge.classList.add("me-1");//adicionar classlist
                spanBadge.appendChild(document.createTextNode("CANCELADA"));//adicionar o texto ao estado
            }
            
            tdEstado.appendChild(spanBadge);//adicionar a span à td principal
            

            let tdOpcoes = document.createElement("td");//criar a parte da opcoes
            let buttonOpcoes = document.createElement('button');//criar o botão
            buttonOpcoes.classList.add('buttonCheckIn');//adicionar classe ao botão
            buttonOpcoes.setAttribute("onclick", `guardarInfo(${JSON.stringify(marcacoes[i])})`);
            let linkOpcoes = document.createElement("a");//criar o link
            linkOpcoes.classList.add('aCheckIn');//adicioanr classe ao link
            linkOpcoes.appendChild(document.createTextNode("Check In"));//adicionar texto ao link
            linkOpcoes.href = "#";//meter o href do link
            
            buttonOpcoes.appendChild(linkOpcoes);
            tdOpcoes.appendChild(buttonOpcoes);

            tr.appendChild(tdAtividade);
            tr.appendChild(tdHorario);
            tr.appendChild(tdData);
            tr.appendChild(tdEstado);
            tr.appendChild(tdOpcoes);

            tabela.appendChild(tr);
        }

        
    /* }else{
        alert('Não tens acesso a esta página');
    } */
}

document.querySelector('.buttonCheckIn', function(){
    console.log("asd")
}, false)