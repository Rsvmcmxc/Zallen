// Lista de notificações com fotos
const notificacoes = [
  { nome: "Ana - Curitiba", mensagem: "acabou de comprar o e-book!", foto: "imagens/pessoas/ana.jpg" },
  { nome: "Carlos - São Paulo", mensagem: "garantiu o acesso vitalício!", foto: "imagens/pessoas/carlos.jpg" },
  { nome: "Cleide - Salvador", mensagem: "fez sua compra agora mesmo!", foto: "imagens/pessoas/cleide.jpg" },
  { nome: "João - Rio de Janeiro", mensagem: "adquiriu o guia completo!", foto: "imagens/pessoas/joao.jpg" }
];

function mostrarNotificacao() {
  const div = document.getElementById("notificacao-compra");
  const random = notificacoes[Math.floor(Math.random() * notificacoes.length)];

  div.innerHTML = `<img src="${random.foto}" alt="Foto de ${random.nome}"><span>${random.nome} ${random.mensagem}</span>`;
  div.classList.add("show");

  setTimeout(() => {
    div.classList.remove("show");
  }, 4000);
}

// Exibe a cada 12 segundos
setInterval(mostrarNotificacao, 12000);
