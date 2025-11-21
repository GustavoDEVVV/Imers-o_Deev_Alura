const cardConteiner = document.querySelector(".card-container");
const campoBusca = document.querySelector("#campo-busca");
let dados = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
  } catch (error) {
    console.error("Erro ao carregar os dados:", error);
  }
});

function iniciarBusca() {
  const termoBuscado = campoBusca.value.toLowerCase();

  const resultados = dados.filter(
    (dado) =>
      dado.nome.toLowerCase().includes(termoBuscado) ||
      dado.descricao.toLowerCase().includes(termoBuscado)
  );

  renderizarCards(resultados);
}

function renderizarCards(lista) {
  cardConteiner.innerHTML = "";
  for (const item of lista) {
    const card = `
      <article class="novo-card">
        <div class="card-frame">
          <img src="${item.imagem || 'default.jpg'}" class="preview-img" />
        </div>

        <div class="tag-area">
          <span class="tag">${item.tag}</span>
        </div>

        <h2 class="card-title-novo">${item.nome}</h2>

        <p class="techs">${item.descricao}</p>

        <a href="${item.link}" target="_blank">
          <button class="btn-vermais">Saiba mais</button>
        </a>
      </article>
    `;
    cardConteiner.innerHTML += card;
  }
}
