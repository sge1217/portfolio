$(document).ready(function(){
    $('.pic').on('mouseleave',function(){
        $('path').css({
            transition:'stroke-dashoffset 1s 0s, fill 0.5s 1s'
        });
    });
    $('.pic').on('mouseeenter',function(){
        $('path').css({
            transition:'stroke-dashoffset 1s 0.5s, fill 0.5s 0s'
        });
    });
});