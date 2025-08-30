const perguntas = [
  {
    texto: "Qual é o elemento mais abundante no universo?",
    alternativas: ["Oxigênio", "Hidrogênio", "Carbono", "Hélio"],
    correta: 1
  },
  {
    texto: "Quem é considerado o criador da Tabela Periódica moderna?",
    alternativas: ["Issac Newton", "Dmitri mendeleev", "Antonie Lavoiser", "Marie Curie"],
    correta: 1
  },
  {
    texto: "O que é o número atomico?",
    alternativas: ["Numero de protons do átomo", "Número de neutrons do átomo", "Número de eletrons no átomo", "Carga do átomo"],
    correta: 0
  },
  {
    texto: "Qual desses elementos é um metal alcalino?",
    alternativas: ["Cloro", "Cobre", "Potassio", "Silício"],
    correta: 2
  },
  {
    texto: "Qual é o símbolo químico do Ouro?",
    alternativas: ["Au", "O", "Ag", "Ga"],
    correta: 0
  }
];

// Índice da pergunta atual
let numeroPergunta = 0;
// Controle para saber se já foi respondida
let jaRespondeu = false;
// Contador de acertos
let contadorAcertos = 0;

// Pegando elementos do HTML
let elementoPergunta = document.getElementById("question");
let elementoOpcoes = document.getElementById("options");
let botaoProximo = document.getElementById("next-btn");

// Função para mostrar a pergunta na tela
function mostrarPergunta() {
  jaRespondeu = false; // permite clicar nas opções
  botaoProximo.style.display = "none"; // esconde o botão "próximo"

  let pergunta = perguntas[numeroPergunta];
  elementoPergunta.textContent = `${numeroPergunta + 1}. ${pergunta.texto}`;
  elementoOpcoes.innerHTML = ""; // limpa as opções antigas

  // Criar um botão para cada alternativa
  pergunta.alternativas.forEach((textoAlternativa, indice) => {
    let botao = document.createElement("div");
    botao.classList.add("option");
    botao.innerHTML = `<span>${String.fromCharCode(65 + indice)}</span> ${textoAlternativa}`;
    botao.onclick = () => verificarResposta(indice); // quando clicar, verifica resposta
    elementoOpcoes.appendChild(botao);
  });
}

// Função para verificar se a resposta está certa
function verificarResposta(indiceClicado) {
  if (jaRespondeu) return; // se já respondeu, não faz nada
  jaRespondeu = true;

  let respostaCerta = perguntas[numeroPergunta].correta;
  let todosBotoes = document.querySelectorAll(".option");

  // Se acertou, incrementa contador
  if (indiceClicado === respostaCerta) {
    contadorAcertos++;
  }

  // Marca verde para a certa e vermelho para as erradas
  todosBotoes.forEach((botao, indice) => {
    if (indice === respostaCerta) {
      botao.classList.add("correct");
    } else {
      botao.classList.add("incorrect");
    }
  });

  botaoProximo.style.display = "inline-block"; // mostra o botão "próximo"
}

// Função para ir para a próxima pergunta
botaoProximo.onclick = () => {
  numeroPergunta++;
  if (numeroPergunta < perguntas.length) {
    mostrarPergunta();
  } else {
    elementoPergunta.textContent = `Fim do quiz! Você acertou ${contadorAcertos} de ${perguntas.length} perguntas.`;
    elementoOpcoes.innerHTML = "";
    botaoProximo.style.display = "none";
  }
};

// Inicia o quiz
mostrarPergunta();

// --- POPUP DE CONFIRMAÇÃO DE SAÍDA ---
const popup = document.getElementById("popup-sair");
const btnConfirmar = document.getElementById("confirmar-sair");
const btnCancelar = document.getElementById("cancelar-sair");

// Intercepta os cliques no menu de navegação
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); 
    popup.style.display = "flex"; 
  });
});

// Se o usuário confirmar
btnConfirmar.addEventListener("click", () => {
  window.location.href = "index.html"; 
});

// Se o usuário cancelar
btnCancelar.addEventListener("click", () => {
  popup.style.display = "none"; 
});


