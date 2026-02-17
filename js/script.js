const container = document.querySelector('.estrelas-container');

function criarEstrela(){
    const estrela = document.createElement('div'); // cria um novo elemento div
    estrela.classList.add('estrela'); // adiciona a classe estrela do CSS

    const inner = document.createElement('div'); // estrela que vai girar
    inner.classList.add('estrela-inner'); // aplica as informações da classe do CSS
    estrela.appendChild(inner);

    const size = Math.random() * 20 + 10;
    estrela.style.width = size + 'px';
    estrela.style.height = size + 'px';

    estrela.style.left = Math.random() * window.innerWidth + 'px';
    estrela.style.bottom = '-50px';

    container.appendChild(estrela);

    const duracao = Math.random() * 5 + 5;
    estrela.style.transition = `transform ${duracao}s linear, opacity 2s linear`;

    setTimeout(()=>{
        estrela.style.transform = `translateY(-${window.innerHeight + 50}px)`;
        estrela.style.opacity = 0;
    }, 50);

    setTimeout(()=> estrela.remove(), duracao * 10000000 + 100);
}

setInterval(criarEstrela, 500);