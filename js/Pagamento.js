var state = 0;
var stateMax = 3; //verificar isto

function next() {
    console.log("Next", state);
    // browser side functions here
}

function back() {
    console.log("Back", state);
    // browser side functions here
}

$("#next").click(function () {
    if (state < stateMax) {
        

        state += 1;

        // Enables 'back' button if disabled
        $("#back").removeClass("disabled");

        // Adds class to make nodes green
        $(".nConfirm" + state).each(function () {
            $(this).addClass("done");
        });

        // Progress bar animation
        var pBar = (state / stateMax) * 100;
        $(".pBar").css("width", `${pBar}%`);

        // Disables 'next' button if end of steps
        if (state == 3) {
            $("#next").addClass("disabled");
        }
        next();
    }
});

$(".quadrado").click(function () {
    if ($(this).attr("id") == "cc-button" || $(this).attr("id") == "mb-button" || $(this).attr("id") == "mbway-button") {

        state += 1;

        // Enables 'back' button if disabled
        $("#back").removeClass("disabled");

        // Adds class to make nodes green
        $(".nConfirm" + state).each(function () {
            $(this).addClass("done");
        });

        // Progress bar animation
        var pBar = (state / stateMax) * 100;
        $(".pBar").css("width", `${pBar}%`);

        // Disables 'next' button if end of steps
        if (state == 3) {
            $("#next").addClass("disabled");
        }
        next();
    }
});
$("#btnPagaMBWay, #btnConcluirGeraReferenciaMB, #btnConcluirCC").click(function () {

    state += 1;

    // Enables 'back' button if disabled
    

    // Adds class to make nodes green
    $(".nConfirm" + state).each(function () {
        $(this).addClass("done");
    });

    // Progress bar animation
    var pBar = (state / stateMax) * 100;
    $(".pBar").css("width", `${pBar}%`);

    // Disables 'next' button if end of steps
    if (state == 3) {
        // $("#next").off("click");
        $("#next").addClass("disabled");
       
    }

    next();
});


$("#back").click(function () {
    if (state > 0) {

        // Enables 'next' button if disabled
        $("#next").removeClass("disabled");

        // removes class that makes nodes green
        $(".nConfirm" + state).each(function () {
            $(this).removeClass("done");
        });

        state -= 1;

        // Progress bar animation
        var pBar = (state / stateMax) * 100;
        $(".pBar").css("width", `${pBar}%`);

        // Disables 'back' button if end of steps
        if (state === 0) {
            $("#back").addClass("disabled");
        }

        back();
    }
});
$("#btnCancelaMBWay, #btnCancelarMB, #btnCancelarcc ").click(function () {
    // Atualiza a barra de progresso
    state -= 1;
    var pBar = (state / stateMax) * 100;
    $(".pBar").css("width", `${pBar}%`);

    // Remove a classe "done" da "div2"
    $(".nConfirm2").removeClass("done");

    // Desabilita o botão "next" se necessário
    if (state === 3) {
        $("#next").addClass("disabled");
    }
});




const btnGeraReferenciaMB = document.getElementById("btnGeraReferenciaMB");
const minhaDiv = document.getElementById("112");

btnGeraReferenciaMB.addEventListener("click", function () {
    if (minhaDiv.style.display = "none") {
        minhaDiv.style.display = "block";
    } else {
        minhaDiv.style.display = "none";
    }
});

window.addEventListener("load", () =>{
    document.getElementById("nome").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).nome;
    document.getElementById("atividade").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).atividade;
    document.getElementById("dataReserva").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).dataReservada;
    document.getElementById("horaReserva").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).horaReserva;
    document.getElementById("quantidade").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).qntBilhetes;
    document.getElementById("valor").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).valor + "€";

    document.getElementById("nome1").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).nome;
    document.getElementById("atividade1").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).atividade;
    document.getElementById("dataReserva1").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).dataReservada;
    document.getElementById("horaReserva1").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).horaReserva;
    document.getElementById("quantidade1").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).qntBilhetes;
    document.getElementById("valor1").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).valor + "€";

    document.getElementById("lblEstadoPagamentoValor3").innerHTML = JSON.parse(localStorage.getItem("pedidoTemporario")).valor + "€";
})

//para passar as informações para o pedido
function realizarPedido(){
    const autenticacao = JSON.parse(localStorage.getItem("autenticacao"));
    const pedidos = JSON.parse(localStorage.getItem("pedidos"));
    const pedidoTemp = JSON.parse(localStorage.getItem("pedidoTemporario"));
    
    const newDate = new Date(pedidoTemp.dataReservada);
    newDate.setHours(pedidoTemp.horaReserva.substring(0,2), pedidoTemp.horaReserva.substring(3), 00);

    console.log(newDate);

    const novoPedido = {
        nomeReserva: autenticacao.nome,
        emailReseva: autenticacao.email, 
        atividade: pedidoTemp.atividade,
        estado: "pendente",
        DataAtividade: newDate,
        DataFeitaReserva: new Date(),
        quantidadeBilhetes: pedidoTemp.qntBilhetes,
        preco: pedidoTemp.valor
    }

    pedidos.push(novoPedido);

    localStorage.pedidos = JSON.stringify(pedidos);
}