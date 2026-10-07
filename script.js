// ===============================
// O GATO QUE DESCONFIA
// ===============================

const frases = [
    "Você está me observando. Eu também.",
    "Interessante. Você parou aqui.",
    "Você leu isso ou apenas olhou?",

    "Você clicou. Naturalmente, isso resolveu tudo.",
    "Ah, a maioria pensa assim. Desde logo, um argumento irrefutável.",
    "Você poderia pesquisar. Mas suponho que confiar seja mais confortável.",

    "Não confie em mim. Eu também desconfio de mim.",
    "Eu posso estar errado. É uma possibilidade bastante inconveniente.",
    "Não sei. E prefiro isso a inventar.",

    "Eu tinha uma observação importante. Depois vi um passarinho.",
    "A propósito, você tem comida?",
    "Miau. Às vezes é o argumento mais honesto.",

    "Cuidado. Você está acreditando em um gato."
];


// ===============================
// CRIAR O GATO
// ===============================

const gato = document.createElement("div");

console.log("O script está funcionando");

gato.id = "gato-interativo";

// O gato usa SOMENTE left e top.
gato.style.position = "fixed";
gato.style.left = "calc(100vw - 225px)";
gato.style.top = "calc(100vh - 230px)";
gato.style.right = "auto";
gato.style.bottom = "auto";
gato.style.zIndex = "99999";

gato.innerHTML = `
    <div id="fala-gato">
        Você está me observando. Eu também.
    </div>

    <img
        id="gatinho"
        src="https://github.com/thales9970719-a11y/gatoSch-dinger/raw/refs/heads/main/IMG_20261001_163224.jpg"
        alt="O Gato"
        style="
            display: block;
            width: 180px;
            height: auto;
            opacity: 1;
            visibility: visible;
        "
    >
`;

document.body.appendChild(gato);


// ===============================
// PEGAR ELEMENTOS
// ===============================

const gatinho = document.getElementById("gatinho");
const fala = document.getElementById("fala-gato");


// ===============================
// GATO FOGE AO SER CLICADO
// ===============================

gatinho.addEventListener("click", () => {

    const frase =
        frases[Math.floor(Math.random() * frases.length)];

    fala.textContent = frase;


    // ===============================
    // ANIMAÇÃO
    // ===============================

    gatinho.classList.remove("pulando");

    void gatinho.offsetWidth;

    gatinho.classList.add("pulando");


    // ===============================
    // NOVA POSIÇÃO
    // ===============================

    const margem = 20;

    const largura = gato.offsetWidth;
    const altura = gato.offsetHeight;

    const maxX =
        window.innerWidth - largura - margem;

    const maxY =
        window.innerHeight - altura - margem;

    const novaPosicaoX =
        Math.max(
            margem,
            Math.random() * maxX
        );

    const novaPosicaoY =
        Math.max(
            margem,
            Math.random() * maxY
        );


    // ===============================
    // MOVER O GATO
    // ===============================

    gato.style.setProperty(
        "left",
        novaPosicaoX + "px",
        "important"
    );

    gato.style.setProperty(
        "top",
        novaPosicaoY + "px",
        "important"
    );

    gato.style.setProperty(
        "right",
        "auto",
        "important"
    );

    gato.style.setProperty(
        "bottom",
        "auto",
        "important"
    );

    console.log(
        "O gato fugiu para:",
        novaPosicaoX,
        novaPosicaoY
    );
});


// ===============================
// GATO FALA SOZINHO
// ===============================

setInterval(() => {

    const frase =
        frases[Math.floor(Math.random() * frases.length)];

    fala.textContent = frase;

}, 12000);


// ===============================
// O GATO OBSERVA A NAVEGAÇÃO
// ===============================

let quantidadeCliques = 0;

document.addEventListener("click", (evento) => {

    if (evento.target !== gatinho) {
        quantidadeCliques++;
    }

    if (quantidadeCliques === 10) {
        fala.textContent =
            "Você já clicou dez vezes. Está procurando alguma coisa?";
    }

    if (quantidadeCliques === 20) {
        fala.textContent =
            "Você realmente gosta de clicar, hein...";
    }
});


// ===============================
// O GATO OBSERVA VOCÊ
// ===============================

const observacao = document.getElementById("observacao");

const observacoes = {
    inicio:
        "Você chegou. Ainda não sabe exatamente o que está fazendo aqui.",

    gato:
        "Você veio conhecer o gato. Ele já tinha reparado em você.",

    pensamentos:
        "Você está lendo as perguntas. Interessante. Eu não vou respondê-las.",

    desconfie:
        "Você chegou até aqui. Agora precisa decidir se acredita no que está vendo.",

    caderno:
        "Então você lê. Eu começava a suspeitar disso.",

    observa:
        "Você chegou à parte em que eu deveria observar você. Conveniente, não?",

    final:
        "Você chegou ao fim. Ou pelo menos ao fim que eu preparei."
};


// ===============================
// OBSERVAR A SEÇÃO ATUAL
// ===============================

const secoes = document.querySelectorAll("main section");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                const id = entrada.target.id;

                if (observacoes[id]) {
                    observacao.textContent = observacoes[id];
                }
            }
        });

    },
    {
        threshold: 0.55
    }
);

secoes.forEach((secao) => {
    observador.observe(secao);
});


// ===============================
// RESPOSTAS DO GATO
// ===============================

function responderGato(acao) {

    const resposta =
        document.getElementById("resposta-gato");

    if (acao === "compartilhar") {

        resposta.textContent =
            "Você poderia pesquisar antes. Mas suponho que confiar seja mais confortável. Allá cada cual.";
    }

    if (acao === "pesquisar") {

        resposta.textContent =
            "Oh. Você decidiu pesquisar antes de acreditar. Que inesperado. Eu começava a suspeitar que a curiosidade humana ainda estivesse viva.";
    }

    if (acao === "ignorar") {

        resposta.textContent =
            "Excelente estratégia. Se não olharmos para o problema, ele provavelmente desaparecerá por educação. Qué disparate.";
    }

    if (acao === "perguntar") {

        resposta.textContent =
            "Finalmente uma pergunta sensata. Não se entusiasme, porém; uma pergunta correta não transforma automaticamente você em uma pessoa criteriosa.";
    }
}
