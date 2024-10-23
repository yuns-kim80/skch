// header
$('header #gnb>li').mouseover(function() {
  $('header').addClass('on');
  $(this).addClass('over')
}), $('header #gnb>li').mouseout(function() {
  $('header').removeClass('on');
  $('header #gnb').removeClass('over')
})

// header allmenu_popup
$('.btn_allmenu_open').click(function() {
  $('.allmenu_popup').css({'display':'flex'});
})
$('.btn_allmenu_close').click(function() {
  $('.allmenu_popup').hide();
})

// header search_popup
$('.btn_search_open').click(function() {
  $('.search_popup').css({'display':'flex'})
})
$('.btn_allmenu_close').click(function() {
  $('.search_popup').hide();
})
// main_visual swiper
const swiper1 = new Swiper('#swp1', {
  effect: 'fade',
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// newFam_wrap swiper
const swiper2 = new Swiper('#swp2', {
  spaceBetween: 40,
  slidesPerView: 'auto',
  autoplay: {
    delay: 0,
  },
  speed: 2000,
  loop: true,
});
// btn_gotop
$(window).scroll(function() {
  // top button controll
  if ($(this).scrollTop() > 1000) {
    $('.btn_gotop').fadeIn();
  } else {
    $('.btn_gotop').fadeOut();
  }
});
$(".btn_gotop").click(function() {
  $('html, body').animate({scrollTop:0}, '500');
});
