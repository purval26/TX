const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const player = document.querySelectorAll('.player');

let slideNum = 1 ;
const length = player.length;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNum*100}%)`;
    slideNum++;
};
const getfirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNum=1;
};
right.addEventListener('click', ()=>{
    slideNum < length ? nextSlide() : getfirstSlide();
});
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNum-2)*100}%)`;
    slideNum--;
};
const getlastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*100}%)`;
    slideNum= length;
};

left.addEventListener('click', ()=>{
    slideNum > 1 ? prevSlide() : getlastSlide();
});