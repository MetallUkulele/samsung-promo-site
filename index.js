let prevImg = document.querySelector(".hero__img_prev");
let nextImg = document.querySelector(".hero__img_next");
let inactiveFirst = document.querySelector('.inactive_first');
let inactiveSecond = document.querySelector('.inactive_second');

console.log(document.querySelector('.hero__slides').style)

function changeImg() {
  prevImg = document.querySelector(".hero__img_prev");
  nextImg = document.querySelector(".hero__img_next");
  inactiveFirst = document.querySelector('.inactive_first');
  inactiveSecond = document.querySelector('.inactive_second');


  prevImg.classList.remove('hero__img_prev')
  prevImg.classList.add('inactive_second')
  prevImg.style.order = 3
  

  nextImg.style.order = 0
  nextImg.classList.remove('hero__img_next')
  nextImg.classList.add('hero__img_prev')

  
  
  inactiveFirst.style.order = 1
  inactiveFirst.classList.remove('inactive_first')
  inactiveFirst.classList.add('hero__img_next')
  
  inactiveSecond.style.order = 2
  inactiveSecond.classList.remove('inactive_second')
  inactiveSecond.classList.add('inactive_first')

}
setInterval(() => {
changeImg()
  
}, 3000);

function changeSlide() {

}





