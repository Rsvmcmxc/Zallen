// ===== NOTIFICAÇÕES =====
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

  div.innerHTML = `<img src="${random.foto}" alt="Foto de ${random.nome}"><span>${random.nome} ${random.mensagem}</span>`;
  div.classList.add("show");

  setTimeout(() => {
    div.classList.remove("show");
  }, 4000);
}

// Exibe a cada 12 segundos
setInterval(mostrarNotificacao, 12000);

// ===== CONTADOR PROMOCIONAL (sempre reseta) =====
function iniciarContador(duracaoSegundos) {
  const contador = document.getElementById("contador");
  let tempo = duracaoSegundos;

  setInterval(() => {
    let horas = Math.floor(tempo / 3600);
    let minutos = Math.floor((tempo % 3600) / 60);
    let segundos = tempo % 60;

    contador.textContent = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

    if (tempo > 0) {
      tempo--;
    } else {
      tempo = duracaoSegundos; // reinicia
    }
  }, 1000);
}

// Sempre inicia em 2 horas (7200 segundos)
iniciarContador(7200);
