const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const span = document.querySelector('.counter span:first-child');
const slides = Array.from(document.querySelectorAll('.slide'));
const container = document.querySelector('.container');
let index = 0;

function animRight(){
    let PLRIGHT = gsap.timeline();
    span.innerHTML = index + 1;

    PLRIGHT
    .to(slides[index], {x: 0, duration: .5});
}

btnNext.addEventListener('click', ()=> {
    if(index == slides.length - 1) {
        gsap.to(container, {
            keyframes: [
                {duration: 0.1, x: -4},
                {duration: 0.1, x: 4},
                {duration: 0.1, x: -4},
                {duration: 0.1, x: 4}
            ]
        })
        return;
    }
    index++;
    animRight();
});

function animLeft(){
    let PLLEFT = gsap.timeline();
    span.innerHTML = index;

    PLLEFT
    .to(slides[index], {x: '-100%', duration: .5})
}

btnPrev.addEventListener('click', ()=> {
    if(index == 0) {
        gsap.to(container, {
            keyframes: [
                {duration: 0.1, x: -4},
                {duration: 0.1, x: 4},
                {duration: 0.1, x: -4},
                {duration: 0.1, x: 4}
            ]
        })
        return;
    }
    animLeft();
    index--;
});