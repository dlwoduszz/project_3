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

    $('.side_menu>ul>li').hover(function(){

        // var menu_li=$('.slide_menu>ul ul li')
        // var index=0
        // index++;
        // if(index>menu_li.length){
        //     menu_li==0
        // }





        $(this).find('li').fadeIn(500);
        $(this).find('li').css({'right':'0','transition':'1s'});
    },function(){
        $(this).find('li').fadeOut(500);
        $(this).find('li').css({'right':'100px','transition':'1s'});
    });


        

})