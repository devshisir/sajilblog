$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');

    // mobile menu toggle
    $('#mobile__menu__toggle__btn').on('click',function(){
        $('#mobile__menu__content').addClass('toggle');
    })
    $('#mobile__menu__close').on('click',function(){
        $('#mobile__menu__content').removeClass('toggle');
    })
    

    // info box toggle 
    $('#open__info__box').on('click',function(){
        $(this).addClass('toggle');
        $('#info__box').toggleClass('show');
    })
    $('#info__box__close').on('click',function(){
        $('#open__info__box').removeClass('toggle');
        $('#info__box').toggleClass('show');
    })
    
    
});