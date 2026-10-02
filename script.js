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
console.log("O script está funcionando");
gato.id = "gato-interativo";

gato.innerHTML = `
    <div id="fala-gato">Você está me observando?</div>
    <img id="gatinho" src="https://github.com/thales9970719-a11y/gatoSch-dinger/raw/refs/heads/main/IMG_20261001_163224.jpg" alt="O Gato" style="display:block !important; width:180px !important; height:auto !important; opacity:1 !important; visibility:visible !important;">
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
function responderGato(acao) {
    const resposta = document.getElementById("resposta-gato");

    if (acao === "compartilhar") {
        resposta.textContent =
            "Naturalmente. Para que verificar uma informação quando podemos oferecê-la ao mundo com a segurança de quem não sabe absolutamente nada? Allá cada cual.";
    }

    if (acao === "pesquisar") {
        resposta.textContent =
            "Oh. Você decidiu pesquisar antes de acreditar. Que inesperado. Eu começava a suspeitar que o botão de compartilhar havia abolido a curiosidade humana.";
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
