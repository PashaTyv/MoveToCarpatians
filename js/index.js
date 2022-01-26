var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".swiper-offers", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  loop: true,
  spaceBetween: 70,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}


function changeSlide(index) {
  const img = document.querySelectorAll('.img-swiper');
  const text = document.querySelectorAll('.service-text');



  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active') && text[i].classList.contains('active')) {
      img[i].classList.remove('active');
      text[i].classList.remove('active')
    }

  }

  img[index].classList.add('active');
  text[index].classList.add('active');
}


(function () {
   const burger = document.querySelector('.header-burger');
   const headerSideBar = document.querySelector('.header-sidebar');
   burger.addEventListener('click', () => {
   headerSideBar.classList.toggle('active');
   burger.classList.toggle('close');
   });
}());



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.documentElement.scrollTop = 0; 
}