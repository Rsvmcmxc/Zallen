const notificacao = document.getElementById("notificacao-compra");

const nomes = [
  "Maria Oliveira", "João Silva", "Ana Santos", "Pedro Almeida", 
  "Carla Ferreira", "Lucas Souza", "Beatriz Costa", "Paulo Mendes",
  "Fernanda Rocha", "André Carvalho", "Juliana Martins", "Ricardo Lima"
];

const cidades = [
  "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", 
  "Porto Alegre - RS", "Curitiba - PR", "Recife - PE", 
  "Salvador - BA", "Fortaleza - CE", "Brasília - DF", 
  "Manaus - AM", "Florianópolis - SC", "Goiânia - GO"
];

const produto = "📖 Apocalipse: A Última Revelação";

function mostrarNotificacao() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  
  notificacao.innerHTML = `
    ✅ <strong>${nome}</strong> de ${cidade}<br>
    comprou <em>${produto}</em>
  `;
  notificacao.style.display = "block";

  setTimeout(() => {
    notificacao.style.display = "none";
  }, 5000); // some em 5s
}

// Exibe notificação a cada 25–45s
setInterval(mostrarNotificacao, Math.floor(Math.random() * 20000) + 25000);

// Primeira aparece em 6s
setTimeout(mostrarNotificacao, 6000);
