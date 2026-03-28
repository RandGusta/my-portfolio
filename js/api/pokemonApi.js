import { getResponseApi } from "./core.js"

export async function getPokemon(id) {
    return getResponseApi(`https://pokeapi.co/api/v2/pokemon/${id}`);
}