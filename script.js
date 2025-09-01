// Lista de notificações
const notificacoes = [
  { nome: "Ana - Curitiba", mensagem: "acabou de comprar o e-book!", foto: "imagens/ana.jpg" },
  { nome: "Carlos - São Paulo", mensagem: "garantiu o acesso vitalício!", foto: "imagens/carlos.jpg" },
  { nome: "Cleide - Salvador", mensagem: "fez sua compra agora mesmo!", foto: "imagens/cleide.jpg" },
  { nome: "João - Rio de Janeiro", mensagem: "adquiriu o guia completo!", foto: "imagens/joao.jpg" }
];

function mostrarNotificacao() {
  const div = document.getElementById("notificacao-compra");
  if (!div) return;
  const random = notificacoes[Math.floor(Math.random() * notificacoes.length)];
  div.innerHTML = `<img src="${random.foto}" alt="Foto de ${random.nome}" onerror="this.style.display='none'">
                   <span><strong>${random.nome}</strong> ${random.mensagem}</span>`;
  div.classList.add("show");
  setTimeout(() => { div.classList.remove("show"); }, 4000);
}
setTimeout(mostrarNotificacao, 2000);
setInterval(mostrarNotificacao, 12000);

// Slider
let indice = 0;
function mudarSlide(direcao) {
  const slides = document.querySelector(".slides");
  const total = slides.children.length;
  indice += direcao;
  if (indice < 0) indice = total - 1;
  else if (indice >= total) indice = 0;
  slides.style.transform = `translateX(${-indice * 100}%)`;
}
// Automático
setInterval(() => { mudarSlide(1); }, 5000);
