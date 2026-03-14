const rep = document.getElementById("repositories");

const btnLeft = document.querySelector(".scroll-left");
const btnRight = document.querySelector(".scroll-right");


function scrollToLeft(){
const card = document.querySelector(".repository-card");

const carWidth = card.offsetWidth;

   rep.scrollBy({
    left: -carWidth,
    behavior:"smooth"
   }) 
}

function scrollToRight(){
const card = document.querySelector(".repository-card");

const carWidth = card.offsetWidth;
    rep.scrollBy({
        left: carWidth,
        behavior: "smooth"
    })
}

export function scrollCards(){
    btnLeft.addEventListener("click", scrollToLeft);
    btnRight.addEventListener("click", scrollToRight);
}



