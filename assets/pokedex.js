let currentIndex = 0;

// Mostrar o primeiro Pokémon ao carregar a página
displayPokemon(currentIndex);

function displayPokemon(index) {
  const pokemon = pokemonData[index];
  document.getElementById("pokemon-image").src = `src/img/${pokemon.name.toLowerCase()}-${padNumber(pokemon.number)}.gif`;
  document.getElementById("pokemon-image").alt = pokemon.name;
  document.getElementById("pokemon-info").textContent = `${padNumber(pokemon.number)} ${pokemon.name}`;
  document.getElementById("pokemon-description").textContent = pokemon.description;
  document.getElementById("pokemon-types").textContent = pokemon.types.join(", ");
  document.getElementById("pokemon-advantages").textContent = pokemon.advantages.join(", ");
  document.getElementById("pokemon-image").style.display = "inline-block"; // Exibir a imagem do Pokémon
}

function previousPokemon() {
  currentIndex = (currentIndex === 0) ? pokemonData.length - 1 : currentIndex - 1;
  displayPokemon(currentIndex);
}

function nextPokemon() {
  currentIndex = (currentIndex === pokemonData.length - 1) ? 0 : currentIndex + 1;
  displayPokemon(currentIndex);
}

function toggleModal() {
  const modalBg = document.getElementById("modal-bg");
  const modalContent = document.querySelector(".modal-content");
  const closeButton = document.querySelector(".close");
  if (modalBg.style.display === "block") {
    modalBg.style.display = "none";
    modalContent.style.display = "none";
    closeButton.style.display = "none";
  } else {
    modalBg.style.display = "block";
    modalContent.style.display = "block";
    closeButton.style.display = "block";
    displayPokemonList(); // Exibir a lista completa de Pokémon quando o modal é aberto
  }
}

function closeModal() {
  document.getElementById("modal-bg").style.display = "none";
  document.querySelector(".modal-content").style.display = "none";
  document.querySelector(".close").style.display = "none";
}

function filterPokemon() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const filteredPokemon = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(input) || padNumber(pokemon.number).includes(input)); // Filtrar por nome ou número
  displayPokemonList(filteredPokemon);
}

function displayPokemonList(pokemonList = pokemonData) {
  const listContainer = document.getElementById("pokemon-list");
  listContainer.innerHTML = "";
  pokemonList.forEach(pokemon => {
    const div = document.createElement("div");
    div.textContent = `${padNumber(pokemon.number)} ${pokemon.name}`;
    div.onclick = () => {
      currentIndex = pokemon.number - 1;
      displayPokemon(currentIndex);
      closeModal();
    };
    listContainer.appendChild(div);
  });
}

// Esconder o modal ao carregar a página
closeModal();

// Mostrar o primeiro Pokémon ao carregar a página
displayPokemon(currentIndex);
