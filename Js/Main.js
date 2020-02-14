const da = document.getElementsByClassName("skill_block");
//const mouse = document.getElementById('mouse');
const mouse = document.getElementsByName('mouse');

document.addEventListener("mousemove", function (e) {
move (e.clientX, e.clientY);
});

function move (x, y) {
let wh = window.innerHeight / 2,
ww = window.innerWidth / 2;

for (var i = 0; i < da.length; i++) {
  da[i].style.setProperty('--mouseX', (x - ww) / 20 + "px");
  da[i].style.setProperty('--mouseY', (y - wh) / 20 + "px");
};

  mouse[0].style.setProperty('--mouseDragX', (x + 40)+ "px");
  mouse[0].style.setProperty('--mouseDragY', (y - 20)+ "px");
}



// СлайдерSwiper


var swiper = new Swiper('.swiper-container', {
  speed: 1000,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 300,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 3,
    stretch: 0,
    depth: 1,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 800
    }
   },
}
);

let sliderImg = document.getElementsByName("sliderImg")
//Контроль слайдера
const swiperSlides = document.getElementsByClassName('swiper-slide');

swiper.on('slideChange', function() {
const otherSlides = swiperSlides
for (let index = 0; index < swiperSlides.length; index++) {
  const element = swiperSlides[index];
element.getElementsByTagName('h1')[0].style.color = 'rgba(123,4,0,0%)';
element.getElementsByTagName('h1')[0].style.letterSpacing = '0.05em';
};

const textElemCurrentSlide = swiperSlides[swiper.realIndex].getElementsByTagName('h1')
textElemCurrentSlide[0].style.color = 'rgba(123,4,0,90%)';

const tElemCurrentSlide = swiperSlides[swiper.realIndex].getElementsByTagName('h1')
tElemCurrentSlide[0].style.letterSpacing = '0.15em';


});




//element.getElementsByTagName('figure')[0].style.transform = 'rotate(0deg)';
//const sliderimg = swiperSlides[swiper.realIndex].getElementsByTagName('figure')
//sliderimg[0].style.transform = 'rotate(12deg)';
