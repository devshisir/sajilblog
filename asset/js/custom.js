$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');

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