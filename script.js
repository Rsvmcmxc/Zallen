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

// Avatares fictícios (pode trocar por fotos reais ou IA)
const avatares = [
  "https://i.pravatar.cc/100?img=1",
  "https://i.pravatar.cc/100?img=2",
  "https://i.pravatar.cc/100?img=3",
  "https://i.pravatar.cc/100?img=4",
  "https://i.pravatar.cc/100?img=5",
  "https://i.pravatar.cc/100?img=6",
  "https://i.pravatar.cc/100?img=7",
  "https://i.pravatar.cc/100?img=8"
];

function mostrarNotificacao() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const cidade = cidades[Math.floor(Math.random() * cidades.length)];
  const avatar = avatares[Math.floor(Math.random() * avatares.length)];
  
  notificacao.innerHTML = `
    <img src="${avatar}" alt="Comprador">
    <div>
      ✅ <strong>${nome}</strong> de ${cidade}<br>
      comprou <em>${produto}</em>
    </div>
  `;
  notificacao.style.display = "flex";

  setTimeout(() => {
    notificacao.style.display = "none";
  }, 5000); // desaparece após 5 segundos
}

// Exibe uma nova notificação a cada 25–45s
setInterval(mostrarNotificacao, Math.floor(Math.random() * 20000) + 25000);

// Primeira notificação em 6s
setTimeout(mostrarNotificacao, 6000);