// ===============================
// O GATO QUE DESCONFIA
// ===============================

const frases = [
    "Você está me observando ou eu estou observando você?",
    "Por que você acredita nisso?",
    "Interessante... você clicou.",
    "Eu não tenho certeza de nada.",
    "Talvez a pergunta seja mais importante que a resposta.",
    "Você leu tudo mesmo?",
    "Desconfie até de mim.",
    "Miau.",
    "Quem colocou essa informação aí?",
    "Você voltou. Eu percebi."
];

const gato = document.createElement("div");

gato.id = "gato-interativo";

gato.innerHTML = `
    <div id="fala-gato">
        Você está me observando?
    </div>

    <div id="gatinho">
        🐈
    </div>
`;

document.body.appendChild(gato);


// ===============================
// CLICAR NO GATO
// ===============================

const gatinho = document.getElementById("gatinho");
const fala = document.getElementById("fala-gato");

gatinho.addEventListener("click", () => {

    const frase =
        frases[Math.floor(Math.random() * frases.length)];

    fala.textContent = frase;

    gatinho.classList.remove("pulando");

    void gatinho.offsetWidth;

    gatinho.classList.add("pulando");
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
