const container = document.querySelector('.estrelas-container');

function criarEstrela(x, y){
    const estrela = document.createElement('div'); // cria um novo elemento div
    estrela.classList.add('estrela'); // adiciona a classe estrela do CSS

    const inner = document.createElement('div'); // estrela que vai girar
    inner.classList.add('estrela-inner'); // aplica as informações da classe do CSS
    estrela.appendChild(inner);

    const size = Math.random() * 15 + 5;
    estrela.style.width = size + 'px';
    estrela.style.height = size + 'px';

    estrela.style.left = x + 'px';
    estrela.style.top = y + 'px';

    container.appendChild(estrela);

    estrela.style.transition = `transform 0.8s linear, opacity 0.8s linear`;

    setTimeout(()=>{
        estrela.style.transform = `translateY(-30px)`;
        estrela.style.opacity = 0;
    }, 10);

    setTimeout(()=> {estrela.remove();},800);
}

let ultimoTempo = 0; // guardar quando a ultima estrela foi criada
document.addEventListener("mousemove", function(e){ // e--> objeto
    const momentoAtual = Date.now();

    if(momentoAtual - ultimoTempo > 60){ // 80ms entre cada uma 
    criarEstrela(e.clientX, e.clientY);// posição horizontal e  vertical do mouse
    ultimoTempo = momentoAtual;    
    }
     
});