import {getPokemon} from "./api/pokemonApi.js"
import {getRepos} from "./api/gitApi.js"
import {scrollCards} from "./config.js"
import {renderRepos, renderPokemon} from "./ui.js"
import {RandomNumber } from "./util.js";

//Load cards from Git
const repositoryContainer = document.getElementById("repositories");
const repositories = await getRepos();
renderRepos(repositories, repositoryContainer);
scrollCards();

//Load pokemon from PokeApi
const pokemonContainer = document.getElementById("pokemon-wrapper");
const imagePokemon = document.getElementById("image-pokemon-container");
const pokemonName = document.getElementById("pokemon-name-container");
const id = RandomNumber(1, 151);
console.log(id)
const pokemonApi = await getPokemon(id);
renderPokemon(pokemonContainer, imagePokemon, pokemonName, pokemonApi);


const revealBtn = document.getElementById("revealBtn");

revealBtn.addEventListener("click", () => {
    imagePokemon.classList.toggle("reveal");
    pokemonName.textContent = pokemonApi.name;
    imagePokemon.classList.toggle("silhouette");
})






