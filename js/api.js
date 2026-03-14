
export function cardSearch(){
fetch("https://api.github.com/orgs/university-projects-gustavo/repos")
    .then(response => response.json())
    .then(data => {
        const repositoryContainer = document.getElementById("repositories");

        data.forEach(repository => {
               const cardRepository = document.createElement("div");
               cardRepository.classList.add("repository-card");


               const h3 = document.createElement("h3");
               h3.textContent = repository.name;

               const p = document.createElement("p");
               p.textContent = repository.description || "Still loading";


               const a = document.createElement("a");
               a.textContent = "./repos";
               a.href = repository.html_url;
               a.target = "_blank";

               const img = document.createElement("img");
               img.classList.add("code-icon");
               img.src = "assets/svg/engrenagem.svg";
               img.alt = "simbulo de maior, barra e simbulo de menor"
               

                cardRepository.appendChild(h3);
                cardRepository.appendChild(p);
                cardRepository.appendChild(img);
                cardRepository.appendChild(a);
                

                repositoryContainer.appendChild(cardRepository);

        })


    })
}