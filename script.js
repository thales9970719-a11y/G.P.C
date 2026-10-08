// ===============================
// O GATO QUE DESCONFIA
// ===============================

const frases = [
    "Você está me observando. Eu também.",
    "Interessante. Você parou aqui.",
    "Você leu isso ou apenas olhou?",

    "Você clicou. Naturalmente, isso resolveu tudo.",
    "Ah, a maioria pensa assim. Desde luego, um argumento irrefutável.",
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

let finalVisitado = false;

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                const id = entrada.target.id;

                if (observacoes[id]) {
                    observacao.textContent = observacoes[id];
                }

                // ===============================
                // ÚLTIMA PERGUNTA
                // ===============================

                if (id === "final" && !finalVisitado) {

                    finalVisitado = true;

                    fala.textContent =
                        "E agora você está perguntando por quê?";
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


// ===============================
// NOTÍCIAS FICTÍCIAS
// ===============================

const noticias = [

    {
        titulo:
            "Cientistas descobrem que ouvir música triste antes da prova aumenta a inteligência",

        texto:
            "Pesquisadores afirmam que estudantes que escutam músicas melancólicas antes de uma prova apresentam um desempenho intelectual significativamente maior.",

        fonte:
            "Instituto Nacional de Estudos Comportamentais",

        pista:
            "P"
    },

    {
        titulo:
            "Pesquisadores afirmam que dormir com um livro debaixo do travesseiro melhora a memória",

        texto:
            "O estudo acompanhou estudantes durante seis meses e concluiu que a simples presença de um livro durante o sono poderia fortalecer a capacidade de lembrar informações.",

        fonte:
            "Centro Internacional de Estudos do Sono",

        pista:
            "E"
    },

    {
        titulo:
            "Gatos entendem português, mas fingem que não entendem, diz pesquisa",

        texto:
            "Segundo pesquisadores, gatos seriam capazes de compreender diversas palavras humanas, mas escolheriam ignorá-las para preservar sua independência.",

        fonte:
            "Instituto de Comportamento Felino",

        pista:
            "N"
    },

    {
        titulo:
            "Cientistas criam aplicativo capaz de descobrir quando alguém está mentindo",

        texto:
            "O aplicativo analisaria pequenos movimentos do rosto e seria capaz de identificar uma mentira antes mesmo que a pessoa terminasse de falar.",

        fonte:
            "Laboratório de Tecnologia Comportamental",

        pista:
            "S"
    },

    {
        titulo:
            "Estudo revela que olhar para o próprio celular por 30 segundos aumenta a criatividade",

        texto:
            "Pesquisadores observaram voluntários e concluíram que uma breve exposição à tela do celular poderia estimular novas conexões criativas.",

        fonte:
            "Observatório Nacional da Criatividade",

        pista:
            "E"
    }

];

let noticiaAtual = 0;


// ===============================
// MOSTRAR NOTÍCIA
// ===============================

function mostrarNoticia() {

    const noticia = noticias[noticiaAtual];

    const titulo =
        document.getElementById("titulo-noticia");

    const texto =
        document.getElementById("texto-noticia");

    const fonte =
        document.getElementById("fonte-noticia");

    if (!titulo || !texto || !fonte) {
        return;
    }


    // ===============================
    // NOTÍCIA 1 — P
    // ===============================

    if (noticiaAtual === 0) {

        titulo.innerHTML =
            `Cientistas descobrem que ouvir música triste
            antes da prova aumenta a inteligência`;

        texto.innerHTML =
            `Pesquisadores afirmam que o efeito é
            <span class="pista-letra">P</span>articularmente forte
            em estudantes que escutam músicas melancólicas antes de uma prova.`;
    }


    // ===============================
    // NOTÍCIA 2 — E
    // ===============================

    else if (noticiaAtual === 1) {

        titulo.textContent =
            noticia.titulo;

        texto.innerHTML =
            `O estudo foi realizado
            <span class="pista-letra letra-invertida">E</span>m
            três universidades durante seis meses.`;

    }


    // ===============================
    // NOTÍCIA 3 — N
    // ===============================

    else if (noticiaAtual === 2) {

        titulo.textContent =
            noticia.titulo;

        texto.textContent =
            noticia.texto;

        texto.innerHTML +=
            `<br><br>
            <span class="pista-cenario">[ N ]</span>`;
    }


    // ===============================
    // NOTÍCIA 4 — S
    // ===============================

    else if (noticiaAtual === 3) {

        titulo.textContent =
            noticia.titulo;

        texto.innerHTML =
            `${noticia.texto}
            <br><br>
            <span class="pista-espelho">S</span>`;
    }


    // ===============================
    // NOTÍCIA 5 — E
    // ===============================

    else if (noticiaAtual === 4) {

        titulo.textContent =
            noticia.titulo;

        texto.innerHTML =
            `${noticia.texto}
            <br><br>
            <span class="pista-cabeca-baixo">E</span>`;
    }


    fonte.textContent =
        noticia.fonte;
}


// ===============================
// PRÓXIMA NOTÍCIA
// ===============================

function proximaNoticia() {

    noticiaAtual++;

    if (noticiaAtual >= noticias.length) {
        noticiaAtual = 0;
    }

    mostrarNoticia();


    // Limpar respostas antigas

    const resposta =
        document.getElementById("resposta-gato");

    if (resposta) {
        resposta.textContent = "";
    }
}


// ===============================
// SENHA SECRETA
// ===============================

function verificarSenha() {

    const campo =
        document.getElementById("senha-gato");

    const mensagem =
        document.getElementById("mensagem-secreta");

    if (!campo || !mensagem) {
        return;
    }

    const senha =
        campo.value.trim().toUpperCase();

    if (senha === "PENSE") {

        mensagem.innerHTML = `
            <strong>Você acreditou.</strong>

            <br><br>

            Cinco notícias falsas, uma senha escondida
            e você ainda chegou até aqui.

            <br><br>

            O mais engraçado é que você estava tão ocupado
            tentando descobrir a mentira que não percebeu que
            <strong>a própria pergunta era uma armadilha.</strong>

            <br><br>

            Não se preocupe. O gato também erra.

            <br><br>

            A diferença é que ele desconfia quando tem certeza demais.

            <br><br>

            <strong>
                Agora volte e pense um pouco antes de acreditar na próxima.
            </strong>

            <br><br>

            <em>
                Parabéns. Você acabou de ser enganado por um gato.
            </em>
        `;

    } else {

        mensagem.textContent =
            "Não. Mas talvez você esteja procurando no lugar errado.";
    }
}


// ===============================
// INICIAR NOTÍCIA
// ===============================

mostrarNoticia();
