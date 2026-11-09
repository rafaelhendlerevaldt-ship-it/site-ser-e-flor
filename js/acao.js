// Carrossel adaptado do exemplo visto em aula.
// Usa vetor, indice, funcoes, botoes e setInterval.

var fotos = ["Acupuntura.png", "extress.png", "Auriculoterapia.png", "Naturopatia.png", "Iridologia.png", "Ozonioterapia.png", "Bioregulacao.png"];
var indice = 0;
var moldura;
var temporizador;

window.onload = inicio;

function inicio() {
    moldura = document.getElementById("moldura");

    // O carrossel aparece somente na pagina inicial.
    if (moldura) {
        document.getElementById("btnVoltar").onclick = voltarFoto;
        document.getElementById("btnAvancar").onclick = avancarFoto;
        mostrarFoto();
        temporizador = setInterval(trocarFoto, 5000);
    }

    // Menu usado quando a tela e menor (celular ou tablet).
    var botaoMenu = document.getElementById("abrirMenu");
    if (botaoMenu) {
        botaoMenu.onclick = abrirMenu;
    }
}

function mostrarFoto() {
    moldura.src = "img/" + fotos[indice];
    document.getElementById("contadorFoto").textContent = (indice + 1) + " / " + fotos.length;
}

function trocarFoto() {
    if (indice < fotos.length - 1) {
        indice++;
    } else {
        indice = 0;
    }
    mostrarFoto();
}

function avancarFoto() {
    trocarFoto();
    clearInterval(temporizador);
    temporizador = setInterval(trocarFoto, 5000);
}

function voltarFoto() {
    if (indice > 0) {
        indice--;
    } else {
        indice = fotos.length - 1;
    }
    mostrarFoto();
    clearInterval(temporizador);
    temporizador = setInterval(trocarFoto, 5000);
}

function abrirMenu() {
    var menu = document.getElementById("menuPrincipal");
    var botao = document.getElementById("abrirMenu");
    menu.classList.toggle("aberto");

    if (menu.classList.contains("aberto")) {
        botao.setAttribute("aria-expanded", "true");
    } else {
        botao.setAttribute("aria-expanded", "false");
    }
}
