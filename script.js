alert(
  "This NikeProject as final challenge of front-end bootcamp has done by Mehrnaz Sarafraz.Thanks for paying atention"
);
const sliderButton1 = document.querySelector(".sliderButton1");
const mainContainer1 = document.querySelector('.dropdown-mainMenu1');
sliderButton1.addEventListener('mouseover' , () => {
  mainContainer1.style.display = 'flex';
 });
mainContainer1.addEventListener('mouseover' , () => {
  mainContainer1.style.display = 'flex';
})
sliderButton1.addEventListener('mouseout', () => {
  mainContainer1.style.display = '';
});
mainContainer1.addEventListener('mouseout' , () => {
  mainContainer1.style.display = '';
})
const sliderButton2 = document.querySelector(".sliderButton2");
const mainContainer2 = document.querySelector('.dropdown-mainMenu2');
sliderButton2.addEventListener('mouseover' , () => {
  mainContainer2.style.display = 'flex';
 });
 mainContainer2.addEventListener('mouseover' , () => {
  mainContainer2.style.display = 'flex';
})
sliderButton2.addEventListener('mouseout', () => {
  mainContainer2.style.display = '';
});
mainContainer2.addEventListener('mouseout' , () => {
  mainContainer2.style.display = '';
})
const sliderButton3 = document.querySelector(".sliderButton3");
const mainContainer3 = document.querySelector('.dropdown-mainMenu3');
sliderButton3.addEventListener('mouseover' , () => {
  mainContainer3.style.display = 'flex';
 });
 mainContainer3.addEventListener('mouseover' , () => {
  mainContainer3.style.display = 'flex';
})
sliderButton3.addEventListener('mouseout', () => {
  mainContainer3.style.display = '';
});
mainContainer3.addEventListener('mouseout' , () => {
  mainContainer3.style.display = '';
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next-shoe",
    prevEl: ".swiper-button-prev-shoe",
  },
});