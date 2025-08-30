const perguntas = [
  {
    texto: "Quais são os principais grupos de substãncias inorgânicas, e como elas se diferenciam em termos de suas propriedades químicas e aplicações?",
    alternativas: ["Ácidos, bases, sais e óxidos", "Carboidratos, lipídios, proteínas e ácidos nucleicos", "Compostos orgânicos e inorgânicos", "Gases, líquidos, sólidos e plasma"],
    correta: 0
  },
  {
    texto: "O que caracteriza uma substância inorgânica?",
    alternativas: ["A presença de carbono em sua estrutura", "Ser solúvel em água", "Ser sempre encontrada na natureza.", "A ausência de carbono em sua estrutura principal"],
    correta: 3
  },
  {
    texto: "Quais são os efeitos das substâncias inorgânicas na saúde humana, e como a exposição a elas pode ser controlada?",
    alternativas: [" Elas não afetam a saúde", "Podem ser tóxicas, e o controle inclui regulamentações e uso de EPIs", "Elas são sempre benéficas", "Apenas afetam a saúde em altas concentrações"],
    correta: 1
  },
  {
    texto: "Analise a importância da água como solvente universal e suas implicações nas reações químicas inorgânicas",
    alternativas: ["A água dissolve substâncias e facilita reações químicas", "A água é um excelente isolante e não participa de reações químicas", "A água só dissolve sólidos", "Apenas afetam a saúde em altas concentrações"],
    correta: 1
  },
  {
    texto: "Qual é a característica principal dos ácidos em solução aquosa?",
    alternativas: ["Liberação de íons hidroxila (OH-)", "Liberação de íons hidrogénio (H+)", "Liberação de H2O", "Liberação de íons oxigénio (O2-)"],
    correta: 1
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
