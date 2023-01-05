$(document).ready(function(){

    $('.menu_btn').click(function(){
        $(this).children('p').toggle();
        if($(this).children('p').css('display')=='block'){
            $('.ham>span').eq(0).css({'transform':'translate(0,7.5px) rotate(-135deg)','transition':'0.2s'})
            $('.ham>span').eq(1).css({'transform':'translate(0,-7.5px) rotate(135deg)','width':'30px','transition':'0.2s'})
            $('.ham>span').eq(2).hide();
        }else{
            $('.ham>span').eq(0).css({'transform':'translate(0,0) rotate(0)','transition':'0.2s'})
            $('.ham>span').eq(1).css({'transform':'translate(0,0) rotate(0)','width':'20px','transition':'0.2s'})
            $('.ham>span').eq(2).show();
        }
        $('.side_menu').slideToggle('slow','swing');
    })




        $('.side_inner>li>a').hover(function(){
/*span*/    $(this).after("<span></span>");
/*span*/    $(this).next('span').stop().animate({'opacity':'100%','width':'150px'});

            $(this).parent().find('li').stop().css({'opacity':'100%','margin-left':'0%','transition':'1s'});
            
        },function(){

/*span*/    $(this).next('span').stop().animate({'opacity':'0%','width':'0px'});
            $(this).parent().find('li').stop().animate({'opacity':'0%','margin-left':'-50px','transition':'1s'},function(){
                $(this).next('span').remove();
            }
            );
    
/*span*/    
        });
    
    


        

})