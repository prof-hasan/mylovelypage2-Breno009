const perguntas = [
    {
        pergunta: "Qual desses brawlers não consegue quebrar paredes com o Super?",
        respostas: [
            { opcao: "Edgar", correta: true },
            { opcao: "Bull", correta: false },
            { opcao: "Colt", correta: false },
        ]
    },
    {
        pergunta: "Quando a Emz usa seu Super, o que acontece?",
        respostas: [
            { opcao: "Congela os inimigos por 3 segundos", correta: false },
            { opcao: "Recupera a vida dos aliados", correta: false },
            { opcao: "Cria uma névoa que causa dano contínuo", correta: true },
        ]
    },
    {
        pergunta: "Qual era o nome do Rico antes dele ser remodelado?",
        respostas: [
            { opcao: "Ricochet", correta: true },
            { opcao: "Ricocheta", correta: false },
            { opcao: "Ricochete", correta: false },
        ]
    },
    {
        pergunta: "Qual foi a primeira skin a ser lançada no jogo?",
        respostas: [
            { opcao: "Shelly Estelar", correta: false },
            { opcao: "Shelly Bandida", correta: true },
            { opcao: "Nita Panda", correta: false },
        ]
    }
];

const perguntaEl = document.querySelector(".pergunta");
const respostasEl = document.querySelector(".respostas");
const contadorEl = document.querySelector(".contador");
const conteudoEl = document.querySelector(".conteudo");
const finalEl = document.querySelector(".final");
const mensagemFinal = document.querySelector(".mensagem-final");
const btnReiniciar = document.querySelector(".btn-reiniciar");

let indiceAtual = 0;
let acertos = 0;

btnReiniciar.onclick = () => {
    conteudoEl.style.display = "flex";
    finalEl.style.display = "none";
    indiceAtual = 0;
    acertos = 0;
    carregarPergunta();
};

function proximaPergunta(e) {
    const correta = e.target.getAttribute("data-correta") === "true";

    if (correta) {
        acertos++;
        e.target.style.backgroundColor = "green";
    } else {
        e.target.style.backgroundColor = "red";
    }

    // Bloqueia todos os botões
    document.querySelectorAll(".resposta").forEach(btn => btn.disabled = true);

    setTimeout(() => {
        if (indiceAtual < perguntas.length - 1) {
            indiceAtual++;
            carregarPergunta();
        } else {
            finalizar();
        }
    }, 700);
}

function finalizar() {
    mensagemFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas! 🎉`;
    conteudoEl.style.display = "none";
    finalEl.style.display = "flex";
}

function carregarPergunta() {
    const item = perguntas[indiceAtual];
    contadorEl.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
    perguntaEl.innerHTML = item.pergunta;
    respostasEl.innerHTML = "";

    item.respostas.forEach(r => {
        const btn = document.createElement("button");
        btn.className = "resposta";
        btn.setAttribute("data-correta", r.correta);
        btn.textContent = r.opcao;
        btn.addEventListener("click", proximaPergunta);
        respostasEl.appendChild(btn);
    });
}

carregarPergunta();
