// Notificação automática
function mostrarNotificacao() {
  const notif = document.getElementById("notificacao");
  notif.style.display = "block";

  setTimeout(() => {
    notif.style.display = "none";
  }, 6000); // fica visível por 6 segundos
}

// Mostrar de tempos em tempos
setInterval(mostrarNotificacao, 20000); 
// aparece a cada 20 segundos
