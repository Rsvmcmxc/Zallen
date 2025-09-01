// ===== NOTIFICAÇÕES =====
const notificacoes = [
  { nome: "Ana - Curitiba", mensagem: "acabou de comprar o e-book!", foto: "imagens/pessoas/ana.jpg" },
  { nome: "Carlos - São Paulo", mensagem: "garantiu o acesso vitalício!", foto: "imagens/pessoas/carlos.jpg" },
  { nome: "Cleide - Salvador", mensagem: "fez sua compra agora mesmo!", foto: "imagens/pessoas/cleide.jpg" },
  { nome: "João - Rio de Janeiro", mensagem: "adquiriu o guia completo!", foto: "imagens/pessoas/joao.jpg" }
];

function mostrarNotificacao() {
  const div = document.getElementById("notificacao-compra");
  if (!div) return;

  const random = notificacoes[Math.floor(Math.random() * notificacoes.length)];

  div.innerHTML = `
    <img src="${random.foto}" alt="Foto de ${random.nome}" onerror="this.style.display='none'">
    <span><strong>${random.nome}</strong> ${random.mensagem}</span>
  `;

  div.classList.add("show");

  setTimeout(() => {
    div.classList.remove("show");
  }, 4000);
}

// Primeira aparece após 2s
setTimeout(mostrarNotificacao, 2000);

// Depois a cada 12s
setInterval(mostrarNotificacao, 12000);

// ===== SLIDER =====
const slides = document.querySelector(".slides");
const imagens = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicatorsContainer = document.querySelector(".indicators");

let index = 0;

// Criar indicadores dinamicamente
imagens.forEach((_, i) => {
  const span = document.createElement("span");
  if (i === 0) span.classList.add("active");
  span.addEventListener("click", () => mostrarSlide(i));
  indicatorsContainer.appendChild(span);
});

const indicadores = indicatorsContainer.querySelectorAll("span");

function atualizarIndicadores() {
  indicadores.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function mostrarSlide(i) {
  if (i < 0) index = imagens.length - 1;
  else if (i >= imagens.length) index = 0;
  else index = i;
  slides.style.transform = `translateX(${-index * 100}%)`;
  atualizarIndicadores();
}

if (prev && next) {
  prev.addEventListener("click", () => mostrarSlide(index - 1));
  next.addEventListener("click", () => mostrarSlide(index + 1));
}

// Troca automática a cada 5s
setInterval(() => mostrarSlide(index + 1), 5000);
