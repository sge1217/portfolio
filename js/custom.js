// $(document).ready(function(){

//     $('.btnCall').on('click',function(){        
//         if( $(this).hasClass('on') ){
//             $(this).removeClass('on');
//             $('#gnb_mo').removeClass('on');
//         }else{
//             $(this).addClass('on');
//             $('#gnb_mo').addClass('on');
//         }        
//     });


//     $('.btns>li').on('click',function(){
//         var target = $(this).text();

//         $('#cube').removeClass();
//         $('#cube').addClass(target);

//         $('.btns>li').removeClass();
//         $(this).addClass('on');
//     })

// });

$(document).ready(function(){


    $('.right>.wrap dt a').on('click focusin', function(e){
        e.preventDefault();
        var $this = $(this);
        activation($this);
    });
    
    function activation(item){
        var target = item.attr('href');

        //컨텐츠
        $('.right>.wrap dd').hide().removeClass('on');
        $(target).show();
        setTimeout(function(){
            $(target).addClass('on');
        },100)
        //$(target).addClass('on');
    
        // 버튼
        $('.right>.wrap dt a').removeClass('on');
        item.addClass('on'); 
    }
    
    


});