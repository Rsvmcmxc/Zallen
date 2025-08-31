// Exibir notificação no topo direito
function mostrarNotificacao() {
  const notificacao = document.getElementById("notificacao");
  notificacao.style.display = "block";

  setTimeout(() => {
    notificacao.style.display = "none";
  }, 4000);
}

// Mostrar a cada 20s
setInterval(mostrarNotificacao, 20000);

// Primeira notificação aparece após 5s
setTimeout(mostrarNotificacao, 5000);
