import { getResponseApi } from "./core.js";

export async function getRepos(){
   return getResponseApi("https://api.github.com/orgs/university-projects-gustavo/repos");
}