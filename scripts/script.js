'use strict'

const lang = document.querySelector('html').lang;

switch(lang) {
    case 'en':
        document.querySelector('option[value="index-en.html"]').selected = true;
        break;
    case 'ja':
        document.querySelector('option[value="index-ja.html"]').selected = true;
        break;
}

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value; 
}
document.getElementById('formSP').elements.select.onchange = function() {
    location.href = document.getElementById('formSP').select.value; 
}


//pageTop
$(function(){
  const pagetop = $('#pageTop');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

//ドロワー
$(document).ready(function(){
    $('#openNav').on('click', function(){
        $('#wrapper, #nav').toggleClass('show');
    
       if ($('body').css('overflow') === 'hidden') {
      $('body').css({ height: '', overflow: '' });
    } else {
      $('body').css({ height: '100%', overflow: 'hidden' });
    }
  });

  $('#nav a').on('click', function(){
        $('#wrapper, #nav').removeClass('show');

        $('body').css({height: '', overflow: ''});
    });
  });
