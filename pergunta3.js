const perguntas = [
  {
    texto: "Descreva o modelo de ligação de Lewis e como ele pode ser utilizado para prever a geometria molecular",
    alternativas: ["Ele representa apenas átomos, sem considerar elétrons", "Ele ajuda a visualizar elétrons de valência e prever a geometria molecular", "É um modelo que não tem aplicação prática", "Ele não é relevante para a química moderna"],
    correta: 1
  },
  {
    texto: "Compare e contraste as ligações iônicas e covalentes em termos de formação e propriedades",
    alternativas: ["Ambas são formadas por tranferência de elétrons", "Iônicas envolvem tranferência de elétrons, enquanto covalentes envolvem compartilhamento", "Iônicas são fracas e covalentes são fortes.", "Ambas são sempre encontradas em compostos sólidos."],
    correta: 1
  },
  {
    texto: "O que são forças intermoleculares e como elas influenciam as propriedades físicas das substâncias?",
    alternativas: ["Elas não têm impacto nas propriedades físicas", "Elas são interações que influenciam ponto de ebulição e solubilidade", "Elas só ocorrem em líquidos", "Elas são irrelevantes para a química"],
    correta: 1
  },
  {
    texto: "Explique a teoria da repulsão dos pares de elétrons da camada de valência sua aplicação na previsão da geometria molecular",
    alternativas: ["A teoria ignora a repulsão entre elétrons", "A teoria prevê a geometria com base na repulsão entre pares de elétrons", "A teoria se aplica apenas a moléculas grandes.", "A teoria é usada apenas para ligações covalentes."],
    correta: 1
  },
  {
    texto: "Por que as ligações metalicas são boas em conduzir eletricidade?",
    alternativas: ["Por que elas tem mais elétrons", "Por que elas compartilham elétrons", "Por que elas tem um mar de elétrons entre os átomos", "por que elas formam iôns"],
    correta: 2
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
