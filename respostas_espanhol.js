function fase1(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "abeja") {
        window.location.href = "II.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function iniciar(event){
    let botão = document.getElementById("comecar");
    botão.addEventListener('click', function(){
        window.location.href= "Jogo_espanhol.html"
    })
}

function fase2(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "tenedor") {
        window.location.href = "III.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase3(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "árbol" || resposta === "arbol") {
        window.location.href = "IV.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase4(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "nube") {
        window.location.href = "V.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase5(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "anillo") {
        window.location.href = "VI.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase6(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "zapatilla") {
        window.location.href = "VII.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase7(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "isla") {
        window.location.href = "VIII.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase8(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "oveja") {
        window.location.href = "IX.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase9(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "hueso") {
        window.location.href = "X.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase10(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "escalera") {
        window.location.href = "XI.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase11(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "huevo") {
        window.location.href = "XII.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function fase12(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "escoba") {
        window.location.href = "final.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function final(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "index.html";
        return true;
}

function instrucoes(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "instrucoes.html";
        return true;
}

function creditos(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "creditos.html";
        return true;
}