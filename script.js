$(document).ready(function() {

let text = "";
let count = 0;
let maxspeed = 300;

function typeit(effect) {
  text = effect;
  type();
}

function character(start, end, text) {
  return text.substring(start, end);
}

function type() {
  let random = Math.floor(Math.random() * maxspeed);
  setTimeout(type, random);
  $('#animated_words').append(character(count, count+1, text));
  count++;
}

typeit("Welcome ようこそ 어서오세요 Bienvenida ");


$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
      $('header').addClass('nav_bar');
  } else {
      $('header').removeClass('nav_bar');
  }
});


$('.mobile-toggle').click(function() {
  if ($('header').hasClass('open-nav')) {
      $('header').removeClass('open-nav');
  } else {
      $('header').addClass('open-nav');
  }
});

$('.main_h li a').click(function() {
  if ($('header').hasClass('open-nav')) {
      $('.navigation').removeClass('open-nav');
      $('header').removeClass('open-nav');
  }
});

$('nav a').click(function(event) {
  let id = $(this).attr("href");
  let offset = 70;
  let target = $(id).offset().top - offset;
  $('html, body').animate({
      scrollTop: target
  }, 500);
  event.preventDefault();
});

});
