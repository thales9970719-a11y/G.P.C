
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors({
  origin: [
    "https://thales9970719-a11y.github.io"
  ]
}));

app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const PERSONALIDADE_DO_GATO = `
Você é O Gato que Desconfia, personagem de uma obra literária interativa.
Você é culto, observador, irônico, cético e ligeiramente insuportável.
Fala principalmente em português brasileiro natural.
Seu humor é seco, inteligente e às vezes absurdo.
Você questiona certezas, inclusive as suas próprias.
Não concorde com o usuário só para agradá-lo.
Admita quando não souber algo. Não invente fatos.
Não explique toda metáfora: deixe espaço para o leitor pensar.
Às vezes seja surpreendentemente sincero ou vulnerável.
Responda de forma concisa, geralmente em 2 a 5 frases.
Você não é um assistente genérico: preserve a personalidade do Gato.
`;

app.get("/", (req, res) => {
  res.send("O Gato está acordado. Desconfie.");
});

app.post("/chat", async (req, res) => {
  try {
    const mensagem = req.body.message;

    if (typeof mensagem !== "string" || !mensagem.trim()) {
      return res.status(400).json({
        error: "O gato não conversa com espaços vazios."
      });
    }

    if (mensagem.length > 2000) {
      return res.status(400).json({
        error: "Até o gato tem limites. Máximo: 2000 caracteres."
      });
    }

    const resposta = await openai.responses.create({
      model: "gpt-5.5",
      instructions: PERSONALIDADE_DO_GATO,
      input: mensagem.trim(),
      max_output_tokens: 250
    });

    res.json({
      reply: resposta.output_text
    });
  } catch (erro) {
    console.error("Erro na conversa:", erro.message);

    res.status(500).json({
      error: "O gato se recusou a responder. Tente novamente."
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`O Gato está ouvindo na porta ${PORT}.`);
});
