let button = document.querySelector('.show-all__text')
let contenier = document.querySelectorAll(".main__wrapper")
console.log(contenier.length)
for(let i = 0; i < contenier.length; i++){
  if (i > 5 && window.screen.availWidth > 767 && window.screen.availWidth < 1120){
    contenier[i].classList.add('hidden');
  }
}

for(let i = 0; i < contenier.length; i++){
  if (i > 7 && window.screen.availWidth > 1120){
    contenier[i].classList.add('hidden');
  }
}

button.addEventListener('change', function(){
  
  let text = document.querySelector('.show-all__text-check')
  let pict = document.querySelector('.show-all__image')
  

  if (button.checked){
    text.textContent = "Показать все"
    pict.src = "image/expand.png"
    for(let i = 0; i < contenier.length; i++){
      if (i > 5 && window.screen.availWidth > 767 && window.screen.availWidth < 1120){
        contenier[i].classList.add('hidden');
      }
    }
    for(let i = 0; i < contenier.length; i++){
      if (i > 7 && window.screen.availWidth > 1120){
        contenier[i].classList.add('hidden');
      }
    }

  }else{
    text.textContent = "Скрыть"
    pict.src = "image/expand_out.png"
    for(let i = 0; i < contenier.length; i++){
      if (i > 5 && window.screen.availWidth > 767 && window.screen.availWidth < 1120){
        contenier[i].classList.remove('hidden');
      }
    }
    for(let i = 0; i < contenier.length; i++){
      if (i > 7 && window.screen.availWidth > 1120){
        contenier[i].classList.remove('hidden');
      }
  }
}

})


const swiper = new Swiper('.swiper', {
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        enabled: true,
        slidesPerView: 1.15,
        spaceBetween: 16,
      },
      768: {
        enabled: false,
        slidesPerView: 'auto',
        spaceBetween: 'auto',
      }
    }
  });




// let button = document.querySelector('.show-all__text')
// let contenier = document.querySelector(".swiper")


// button.addEventListener('change', function(){
//   contenier.classList.toggle('swiperHidden')
//   let text = document.querySelector('.show-all__text-check')
//   let pict = document.querySelector('.show-all__expand-image')
  

//   if (button.checked){
//     text.textContent = "Показать все"
//     pict.src = "img/expand.png"

//   }else{
//     text.textContent = "Скрыть"
//     pict.src = "img/out.png"
//   }


// })

// new Swiper('.swiper', {
//   freeMode: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     320: {
//       enabled: true,
//       slidesPerView: 1.15,
//       spaceBetween: 16,
//     },
//     768: {
//       enabled: false,
//       slidesPerView: 'auto',
//       spaceBetween: 'auto',
//     }
//   }
// });