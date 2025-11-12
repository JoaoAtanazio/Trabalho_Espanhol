function fase1(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "hablando") {
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
        window.location.href= "Atanazio/Jogo_espanhol.html"
    })
}

function fase2(event) {
    event.preventDefault(); // impede o submit do form

    let resposta = prompt("Digite sua Resposta.");
    if (resposta === null) return; // Cancelar

    resposta = resposta.trim().toLowerCase();

    if (resposta === "bebiendo") {
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

    if (resposta === "corriendo") {
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

    if (resposta === "bailando") {
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

    if (resposta === "cocinando") {
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

    if (resposta === "durmiendo") {
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

    if (resposta === "cayendo") {
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

    if (resposta === "explotando") {
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

    if (resposta === "luchando" || resposta === "peleando") {
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

    if (resposta === "llorando") {
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

    if (resposta === "sorriendo") {
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

    if (resposta === "escribiendo") {
        window.location.href = "final.html";
        return true;
    } else {
        alert("ERRRRRRROOOOUUUUU!!!");
        return false;
    }
}

function final(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "../index.html";
        return true;
}

function instrucoes(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "Atanazio/instrucoes.html";
        return true;
}

function creditos(event) {
    event.preventDefault(); // impede o submit do form
        window.location.href = "Atanazio/creditos.html";
        return true;
}