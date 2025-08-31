const notificacao = document.getElementById("notificacao-compra");

const pessoas = [
  { nome: "João - São Paulo", img: "imagens/joao.jpg" },
  { nome: "Cleide - Rio de Janeiro", img: "imagens/cleide.jpg" },
  { nome: "Carlos - Belo Horizonte", img: "imagens/carlos.jpg" },
  { nome: "Ana - Salvador", img: "imagens/ana.jpg" },
  { nome: "Marcos - Curitiba", img: "imagens/marcos.jpg" }
];

function mostrarNotificacao() {
  const pessoa = pessoas[Math.floor(Math.random() * pessoas.length)];
  notificacao.innerHTML = `<img src="${pessoa.img}" alt="Foto de ${pessoa.nome}"> 
                           <span>${pessoa.nome} acabou de comprar o e-book!</span>`;
  notificacao.style.display = "flex";

  setTimeout(() => {
    notificacao.style.display = "none";
  }, 5000);
}

// Mostra a cada 15 segundos
setInterval(mostrarNotificacao, 15000);
