document.addEventListener("DOMContentLoaded", () => {
  const pessoas = [
    { nome: "Ana", cidade: "Curitiba", foto: "imagens/ana.jpg" },
    { nome: "Carlos", cidade: "São Paulo", foto: "imagens/carlos.jpg" },
    { nome: "Mariana", cidade: "Belo Horizonte", foto: "imagens/mariana.jpg" },
    { nome: "João", cidade: "Rio de Janeiro", foto: "imagens/joao.jpg" },
    { nome: "Cleide", cidade: "Recife", foto: "imagens/cleide.jpg" }
  ];

  let ultimaPessoa = null;

  function mostrarNotificacao() {
    let pessoa;

    // Evitar repetição da mesma pessoa consecutiva
    do {
      pessoa = pessoas[Math.floor(Math.random() * pessoas.length)];
    } while (pessoa === ultimaPessoa && pessoas.length > 1);

    ultimaPessoa = pessoa;

    const notificacao = document.createElement("div");
    notificacao.classList.add("notificacao");

    notificacao.innerHTML = `
      <img src="${pessoa.foto}" alt="${pessoa.nome}">
      <span><strong>${pessoa.nome}</strong> de ${pessoa.cidade} acabou de comprar o e-book!</span>
    `;

    document.body.appendChild(notificacao);

    // Remove depois de 4 segundos
    setTimeout(() => {
      notificacao.classList.add("fade-out");
      setTimeout(() => notificacao.remove(), 500);
    }, 4000);
  }

  // Mostra a primeira notificação após 3s
  setTimeout(mostrarNotificacao, 3000);

  // Depois repete a cada 12s
  setInterval(mostrarNotificacao, 12000);
});
