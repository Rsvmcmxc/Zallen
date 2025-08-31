// Lista de notificações simuladas
const notificacoes = [
  "Ana - Curitiba acabou de comprar o e-book!",
  "Carlos - São Paulo garantiu o exemplar agora!",
  "Talita - Recife fez a compra!",
  "Diego - Belo Horizonte adquiriu o e-book!",
  "Juliana - Porto Alegre comprou seu exemplar!"
];

function mostrarNotificacao(mensagem) {
  const notificacao = document.getElementById("notificacao-compra");
  notificacao.textContent = mensagem;
  notificacao.style.display = "block";

  setTimeout(() => {
    notificacao.style.display = "none";
  }, 5000);
}

// Exibe notificações de tempos em tempos
setInterval(() => {
  const msg = notificacoes[Math.floor(Math.random() * notificacoes.length)];
  mostrarNotificacao(msg);
}, 12000); // a cada 12 segundos

// Primeira notificação aparece após 5s
setTimeout(() => {
  const msg = notificacoes[Math.floor(Math.random() * notificacoes.length)];
  mostrarNotificacao(msg);
}, 5000);
