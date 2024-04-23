window.onload = function () {
    const atividadeEscolhida = localStorage.getItem("atividadeEscolhida");
    const atividades = JSON.parse(localStorage.getItem("atividades"));
    var infoAtividade;

    for (let i = 0; i < atividades.length; i++) {
        if (atividades[i].nomeAtividade === atividadeEscolhida) {
            infoAtividade = atividades[i];
        }
    }
    console.log(infoAtividade);


    //var atividade = "BENAGIL";
    //var descricaoAtividade = "Explore as Grutas de Benagil e mergulhe numa experiência encantadoras!"
    //var porque = "Porquê experimentar a atividade?";
    //var textoAtividade = "Explorar as grutas de Benagil é uma experiência única e deslumbrante. Ao adentrar nessas formações rochosas esculpidas pela natureza, você se depara com paisagens impressionantes, praias escondidas e uma atmosfera mágica. A beleza e a serenidade das grutas de Benagil proporcionam um momento inesquecível, permitindo que se conecte com a natureza e desfrute de vistas panorâmicas deslumbrantes. Seja por terra ou por mar, a experiência de testemunhar pessoalmente essas maravilhas naturais certamente deixará uma marca duradoura na sua memória."
    /* var tituloPreco1 = "Preço Criança";
    var preco1 = "18€";
    var tituloPreco2 = "Preço Adulto";
    var preco2 = "30€"; */


    //adicionar titulo
    console.log(infoAtividade.nomeAtividade)
    const spanTituloAtividade = document.createElement("span");
    spanTituloAtividade.appendChild(document.createTextNode(infoAtividade.nomeAtividade));
    //adicionar descrição da atividade
    const spanDescricaoAtividade = document.createElement("span");
    spanDescricaoAtividade.appendChild(document.createTextNode(infoAtividade.descricaoAtividade));

    //Inserir titulo para "Porquê experimentar a atividade?"
    /*     const spanPorque = document.createElement("span");
        spanPorque.appendChild(document.createTextNode(porque)); */

    //adicionar texto da atividade
    const spanPorqueAtividade = document.createElement("span");
    spanPorqueAtividade.appendChild(document.createTextNode(infoAtividade.porqueAtividade));



    const keys = Object.keys(infoAtividade.precos);
    console.log(keys.length)
    let divCard;

    for (let i = 0; i < keys.length; i++) {
        console.log(i);
        divCard = document.createElement("div");
        divCard.setAttribute("id", "Card2PrecosSki");
        divCard.classList.add("card");

        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");

        const ulCard = document.createElement("ul");
        ulCard.classList.add("list-unstyled");
        ulCard.classList.add("li-space-lg");

        const titleCard = document.createElement("h3");
        titleCard.classList.add("card-title");
        titleCard.appendChild(document.createTextNode(keys[i]));

        let li1 = document.createElement("li");
        li1.classList.add("media");

        let iLi1 = document.createElement("li");
        iLi1.classList.add("fas");
        iLi1.classList.add("fa-square");

        let divLi1 = document.createElement("div");
        divLi1.classList.add("media-body");
        divLi1.appendChild(document.createTextNode("asdasd"));

        let li2 = document.createElement("li");
        li2.classList.add("media");

        let iLi2 = document.createElement("li");
        iLi2.classList.add("fas");
        iLi2.classList.add("fa-square");

        let divLi2 = document.createElement("div");
        divLi2.classList.add("media-body");
        divLi2.appendChild(document.createTextNode("asdasd"));

        /* let pprice = document.createElement("p");
        pprice.setAttribute("id", "preco1Atividade");
        pprice.classList.add("price"); */

        li1.appendChild(iLi1);
        li1.appendChild(divLi1);

        li2.appendChild(iLi2);
        li2.appendChild(divLi2);

        ulCard.appendChild(li1);
        ulCard.appendChild(li2);

        divCardBody.appendChild(titleCard);
        divCardBody.appendChild(ulCard);
        divCard.appendChild(divCardBody);
        //divCardBody.appendChild(pprice);


        document.getElementById("cards").appendChild(divCard);
    }

    /*     
    
    
        const pIdade  = document.createElement("p");
        pIdade.textContent = "(+12 anos)"; */




    /*  //Inserir titulo para preço adulto
     const spanTituloPreco1 = document.createElement("span");
     spanTituloPreco1.appendChild(document.createTextNode(tituloPreco1));
     //Inserir titulo para preço adulto
     const spanPreco1 = document.createElement("span");
     spanPreco1.appendChild(document.createTextNode(preco1));
 
     //Inserir titulo para preço criança
     const spanTituloPreco2 = document.createElement("span");
     spanTituloPreco2.appendChild(document.createTextNode(tituloPreco2));
     //Inserir titulo para preço adulto
     const spanPreco2 = document.createElement("span");
     spanPreco2.appendChild(document.createTextNode(preco2)); */


    document.getElementById("nomeAtividade").appendChild(spanTituloAtividade);
    document.getElementById("descricaoAtividade").appendChild(spanDescricaoAtividade);
    document.getElementById("textoAtividade").appendChild(spanPorqueAtividade);
    //document.getElementById("porqueseriabom").appendChild(spanPorque);
    //document.getElementById("tituloPreco1Atividade").appendChild(spanTituloPreco1);
    //document.getElementById("preco1Atividade").appendChild(spanPreco1);
    //document.getElementById("tituloPreco2Atividade").appendChild(spanTituloPreco2);
    //document.getElementById("preco2Atividade").appendChild(spanPreco2);

}



