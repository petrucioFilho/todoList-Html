const inputActivite = document.getElementById("inputActivite");
const button = document.getElementById("button-addon2");
const lista = document.getElementById("minha-lista");
let countActivite = 0;
button.addEventListener("click", function () {
  const activite = inputActivite.value;
  if (activite) {
    // Cria uma nova div
    // const novaDiv = document.createElement("div");
    // novaDiv.textContent = "Sou uma nova div!";

    const novaDiv = `<div class="card my-2 d-flex flex-row">
            <div class="card-body">${activite}</div>
            <div class="d-grid gap-1 d-md-flex justify-content-end">
                <button class="btn btn-danger me-2" type="button">Button</button>
                
            </div>
          </div>`;
    lista.insertAdjacentHTML("beforeend", `<li>${novaDiv}</li>`);
    // Cria um novo item da lista (<li>) e adiciona a div dentro
    // const novoItem = document.createElement("li");
    // novoItem.appendChild(`);

    // Adiciona o novo item à lista
    // lista.appendChild(novoItem);
  }
});
