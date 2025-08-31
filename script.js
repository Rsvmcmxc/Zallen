// Lista de notificações com fotos reais
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
