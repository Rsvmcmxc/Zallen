// ======== Notificações de Compra Fake ========
const notificacao = document.getElementById("notificacao-compra");

// Lista de nomes simulados
const nomes = [
  "Maria - São Paulo",
  "João - Rio de Janeiro",
  "Carla - Belo Horizonte",
  "Pedro - Salvador",
  "Ana - Curitiba",
  "Lucas - Brasília",
  "Fernanda - Recife",
  "Ricardo - Porto Alegre"
];

// Função para exibir notificação
function mostrarNotificacao() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  notificacao.textContent = `${nome} acabou de comprar o e-book!`;

  notificacao.style.display = "block";

  // Some automaticamente depois de 3 segundos
  setTimeout(() => {
    notificacao.style.display = "none";
  }, 3000);
}

// Exibe notificações de tempos em tempos
setInterval(mostrarNotificacao, 10000); // a cada 10s
