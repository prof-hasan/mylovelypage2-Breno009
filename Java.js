document.addEventListener("DOMContentLoaded", () => {
    const dvd = document.getElementById("dvd");
    const musica = document.getElementById("musica");

    if (dvd && musica) {
        dvd.addEventListener("click", () => {
            if (musica.paused) musica.play();
            else musica.pause();
        });
    }

    const img = document.getElementById("imgFlutuante");
    const main = document.querySelector("main");

    if (!img || !main) return;

    let x = 50, y = 50;
    let dx = 2, dy = 2;

    img.style.left = x + "px";
    img.style.top = y + "px";

    function animar() {
        const largura = main.clientWidth;
        const altura = main.clientHeight;
        const imgLargura = img.offsetWidth;
        const imgAltura = img.offsetHeight;

        x += dx;
        y += dy;

        if (x <= 0 || x + imgLargura >= largura) dx = -dx;
        if (y <= 0 || y + imgAltura >= altura) dy = -dy;

        img.style.left = x + "px";
        img.style.top = y + "px";

        requestAnimationFrame(animar);
    }

    requestAnimationFrame(animar);
});

function abrirJanela(titulo, texto) {
    document.getElementById("titulo-modal").innerText = titulo;
    document.getElementById("texto-modal").innerText = texto;
    document.getElementById("minhaJanela").style.display = "block";
}

function fecharJanela() {
    document.getElementById("minhaJanela").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("minhaJanela")) {
        document.getElementById("minhaJanela").style.display = "none";
    }
}
